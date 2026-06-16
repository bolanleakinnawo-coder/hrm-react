import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../Book.css";
import homely1 from "../assets/homely/home1.jpg";
import homely2 from "../assets/homely/home2.jpg";
import homely3 from "../assets/homely/home3.jpg";
import homely4 from "../assets/homely/home4.jpg";

import { db } from "../../firebase";
import { ref, push, get, child } from "firebase/database";

// ─── PRICES ─────────────────────────────────────────────────A────────────────
const STUDIO_PRICES = {
  homely: { "1 Hour": 20000, "2 Hours": 40000, "3 Hours": 55000 },
  pro: { "1 Hour": 20000, "2 Hours": 40000, "3 Hours": 50000 },
};
const DURATION_HOURS = { "1 Hour": 1, "2 Hours": 2, "3 Hours": 3 };
const LIFESTYLE_PRICES = { prewedding: 30000, family: 30000 };
const EVENT_PRICES = {
  guests10: 100000,
  guests15: 130000,
  guests20: 160000,
  unlimited: 200000,
};
const PHOTO_PRICES = { iphone: 15000, camera: 25000 };

// ─── SERIES DATA ─────────────────────────────────────────────────────────────
const SERIES = [
  {
    title: "The Homely Series",
    subtitle: "Intimate, cosy sessions",
    seriesKey: "homely",
    images: [
      { id: "homely1", src: homely1, desc: "Homely Background 1" },
      { id: "homely2", src: homely2, desc: "Homely Background 2" },
      { id: "homely3", src: homely3, desc: "Homely Background 3" },
      { id: "homely4", src: homely4, desc: "Homely Background 4" },
    ],
  },
  {
    title: "The Pro Series",
    subtitle: "Elevated studio experience",
    seriesKey: "pro",
    images: [
      { id: "pro1", src: homely1, desc: "Pro Background 1" },
      { id: "pro2", src: homely2, desc: "Pro Background 2" },
      { id: "pro3", src: homely3, desc: "Pro Background 3" },
      { id: "pro4", src: homely4, desc: "Pro Background 4" },
    ],
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function toMins(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}
function timesOverlap(sA, eA, sB, eB) {
  return sA < eB && eA > sB;
}

// Studio opens 11am (660 mins), closes midnight (1440 mins)
const OPEN_MINS = 11 * 60; // 11:00
const CLOSE_MINS = 24 * 60; // 00:00 (midnight)

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const Book = () => {
  const [selectedBg, setSelectedBg] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [bookingType, setBookingType] = useState("studio");
  const [duration, setDuration] = useState("");
  const [lifestylePackage, setLifestylePackage] = useState("");
  const [eventPackage, setEventPackage] = useState("");
  const [photography, setPhotography] = useState("");

  const [unavailable, setUnavailable] = useState({});
  const [checking, setChecking] = useState(false);
  const [timeError, setTimeError] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingTotal, setBookingTotal] = useState(0);
  const [bookingInfo, setBookingInfo] = useState({});

  // ── Validate time within opening hours ──────────────────────────────────
  useEffect(() => {
    if (!time || !duration) {
      setTimeError("");
      return;
    }
    const startMins = toMins(time);
    const endMins = startMins + (DURATION_HOURS[duration] || 1) * 60;
    if (startMins < OPEN_MINS) {
      setTimeError("Studio opens at 11:00 AM.");
    } else if (endMins > CLOSE_MINS) {
      setTimeError(
        "Session would end after midnight. Please choose an earlier time.",
      );
    } else {
      setTimeError("");
    }
  }, [time, duration]);

  // ── Check availability whenever date/time/duration changes ───────────────
  useEffect(() => {
    if (!date || !time || !duration || timeError) return;
    checkAllAvailability();
  }, [date, time, duration, timeError]);

  const checkAllAvailability = async () => {
    setChecking(true);
    const durationHrs = DURATION_HOURS[duration] || 1;
    const startMins = toMins(time);
    const endMins = startMins + durationHrs * 60;
    const newUnavailable = {};

    try {
      const snap = await get(ref(db, "bookings"));
      const allBookings = snap.exists() ? Object.values(snap.val()) : [];
      const dayBookings = allBookings.filter((b) => b.date === date);

      const allIds = SERIES.flatMap((s) => s.images.map((img) => img.id));
      for (const bgId of allIds) {
        newUnavailable[bgId] = dayBookings.some((b) => {
          if (b.selectedBg !== bgId) return false;
          const bStart = toMins(b.time);
          const bEnd = bStart + (DURATION_HOURS[b.duration] || 1) * 60;
          return timesOverlap(startMins, endMins, bStart, bEnd);
        });
      }
    } catch (err) {
      console.error("Availability check failed:", err);
    }

    setUnavailable(newUnavailable);
    setChecking(false);
  };

  // ── Price ────────────────────────────────────────────────────────────────
  const getTotal = () => {
    let total = 0;
    if (bookingType === "studio") {
      const prices = STUDIO_PRICES[selectedSeries] || STUDIO_PRICES.homely;
      total += prices[duration] || 0;
    }
    if (bookingType === "lifestyle")
      total += LIFESTYLE_PRICES[lifestylePackage] || 0;
    if (bookingType === "event") total += EVENT_PRICES[eventPackage] || 0;
    total += PHOTO_PRICES[photography] || 0;
    return total;
  };

  // ── Submit ───────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!name || !phone || !date || !time || !selectedBg) {
      alert("Please fill in all required fields and select a background.");
      return;
    }
    if (bookingType === "studio" && !duration) {
      alert("Please select a duration.");
      return;
    }
    if (timeError) {
      alert(timeError);
      return;
    }
    if (unavailable[selectedBg]) {
      alert(
        "This background is already booked for that time. Please choose another slot or background.",
      );
      return;
    }

    setLoading(true);

    const data = {
      name,
      phone,
      email,
      date,
      time,
      selectedBg,
      selectedSeries,
      bookingType,
      duration,
      lifestylePackage,
      eventPackage,
      photography,
      total: getTotal(),
      createdAt: new Date().toISOString(),
    };

    try {
      await push(ref(db, "bookings"), data);
      setBookingTotal(getTotal());
      setBookingInfo(data);
      setSubmitted(true);
    } catch (err) {
      console.error("Booking failed:", err);
      alert("Something went wrong saving your booking. Please try again.");
    }

    setLoading(false);
  };

  const sendToWhatsApp = () => {
    const d = bookingInfo;
    const message = `NEW BOOKING 

Name: ${d.name}
Phone: ${d.phone}
Email: ${d.email || "N/A"}

Date: ${d.date}
Time: ${d.time}
Background: ${d.selectedBg} (${d.selectedSeries} series)
Booking Type: ${d.bookingType}
Duration: ${d.duration || "-"}
Lifestyle: ${d.lifestylePackage || "-"}
Event Package: ${d.eventPackage || "-"}
Photography: ${d.photography || "None"}

TOTAL: ₦${bookingTotal.toLocaleString()}

[Payment screenshot attached]`.trim();

    window.open(
      `https://wa.me/2349169828254?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  // ── POST-BOOKING SCREEN ──────────────────────────────────────────────────
  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="book-page">
          <div className="confirm-screen">
            <div className="confirm-card">
              <div className="confirm-check">✓</div>
              <h2>Booking Received!</h2>
              <p className="confirm-sub">
                Your slot is <strong>not confirmed</strong> until we verify your
                payment. Kindly click the button below to send your booking
                details and payment receipt to us on WhatsApp.
              </p>
              <p className="screenshot-note">
                Attach your payment screenshot when you message us — your slot
                will be confirmed once we verify it and you'll receive the
                studio address.
              </p>
              <button className="whatsapp-btn" onClick={sendToWhatsApp}>
                Send Booking Details & Receipt
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── FORM ─────────────────────────────────────────────────────────────────
  return (
    <>
      <Navbar />

      {/* BACKGROUND PICKER */}
      <div className="book-page">
        <section className="series-section">
          <h2>Choose Your Background</h2>
          {checking && <p className="checking-note">Checking availability…</p>}

          {SERIES.map((series) => (
            <div key={series.title} className="series-group">
              <div className="series-header">
                <h3>{series.title}</h3>
                <span className="series-subtitle">{series.subtitle}</span>
              </div>

              <div className="series-images-container">
                {series.images.map((img) => {
                  const isUnavailable = !!unavailable[img.id];
                  const isSelected = selectedBg === img.id;
                  return (
                    <div
                      key={img.id}
                      className={`series-card${isSelected ? " selected" : ""}${isUnavailable ? " unavailable" : ""}`}
                      onClick={() => {
                        if (isUnavailable) return;
                        setSelectedBg(img.id);
                        setSelectedSeries(series.seriesKey);
                      }}
                    >
                      <img src={img.src} alt={img.desc} />
                      {isUnavailable && (
                        <div className="unavailable-badge">Booked</div>
                      )}
                      {isSelected && (
                        <div className="selected-badge">✓ Selected</div>
                      )}
                      <div className="series-card-text">{img.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* BOOKING FORM */}
        <div className="container">
          <h2>Your Details</h2>

          <input
            placeholder="Full Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Phone Number *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="field-hint">Prefered Date: </p>

          <input
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]} // today in YYYY-MM-DD
            onChange={(e) => setDate(e.target.value)}
          />
          <p className="field-hint">Prefered Time: </p>
          <input
            type="time"
            min="11:00"
            max="23:59"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          {timeError && <p className="field-error">{timeError}</p>}
          <p className="field-hint">Studio hours: 11:00 AM – 12:00 AM</p>

          <select
            value={bookingType}
            onChange={(e) => {
              setBookingType(e.target.value);
              setDuration("");
              setLifestylePackage("");
              setEventPackage("");
            }}
          >
            <option value="studio">Studio Session</option>
            <option value="lifestyle">Lifestyle Shoot</option>
            <option value="event">Event / Celebration</option>
          </select>

          {bookingType === "studio" && (
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="">Select Duration</option>
              <option value="1 Hour">1 Hour · 2 guests — ₦20,000</option>
              <option value="2 Hours">2 Hours · 3 guests — ₦40,000</option>
              <option value="3 Hours">
                3 Hours · 4 guests —{" "}
                {selectedSeries === "pro" ? "₦50,000" : "₦55,000"}
              </option>
            </select>
          )}

          {bookingType === "lifestyle" && (
            <select
              value={lifestylePackage}
              onChange={(e) => setLifestylePackage(e.target.value)}
            >
              <option value="">Select Package</option>
              <option value="prewedding">Pre-Wedding — ₦30,000</option>
              <option value="family">Family Shoot — ₦30,000</option>
            </select>
          )}

          {bookingType === "event" && (
            <select
              value={eventPackage}
              onChange={(e) => setEventPackage(e.target.value)}
            >
              <option value="">Select Event Package</option>
              <option value="guests10">Up to 10 Guests — ₦100,000</option>
              <option value="guests15">Up to 15 Guests — ₦130,000</option>
              <option value="guests20">Up to 20 Guests — ₦160,000</option>
              <option value="unlimited">Unlimited Guests — ₦200,000</option>
            </select>
          )}

          <select
            value={photography}
            onChange={(e) => setPhotography(e.target.value)}
          >
            <option value="">No Photography Add-on</option>
            <option value="iphone">iPhone Photography (+₦15,000)</option>
            <option value="camera">Digital Camera (+₦25,000)</option>
          </select>

          {getTotal() > 0 && (
            <h3 className="total">Total: ₦{getTotal().toLocaleString()}</h3>
          )}

          {/* PAYMENT DETAILS (visible before booking) */}
          <div className="container">
            <div className="account-box pre-booking">
              <h3>💳 Payment Details</h3>
              <div className="account-row">
                <span>Bank</span>
                <strong>Keystone</strong>
              </div>
              <div className="account-row">
                <span>Account Name</span>
                <strong>AbdulRasaq Zainab Ayowumi</strong>
              </div>
              <div className="account-row">
                <span>Account Number</span>
                <strong>6031962197</strong>
              </div>
              <p className="screenshot-note" style={{ marginTop: "10px" }}>
                Kindly screenshot your payment. After booking you will be
                redirected to our WhatsApp where your payment will be confirmed.
              </p>
            </div>
          </div>
          <button onClick={handleSubmit} disabled={loading || !!timeError}>
            {loading ? "Saving booking…" : "Book Now"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
