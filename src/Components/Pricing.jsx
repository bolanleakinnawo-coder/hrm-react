import React from "react";
import { FiClock, FiUsers } from "react-icons/fi";
import { LuPartyPopper } from "react-icons/lu";

const homelySeries = [
  { duration: "1 hour", guests: "2 guests", price: "₦20,000" },
  { duration: "2 hours", guests: "3 guests", price: "₦40,000" },
  { duration: "3 hours", guests: "4 guests", price: "₦55,000" },
];

const proSeries = [
  { duration: "1 hour", guests: "2 guests", price: "₦20,000" },
  { duration: "2 hours", guests: "3 guests", price: "₦40,000" },
  { duration: "3 hours", guests: "4 guests", price: "₦50,000" },
];

const celebrationTiers = [
  { label: "Up to 10 guests", price: "₦100,000", unlimited: false },
  { label: "Up to 15 guests", price: "₦130,000", unlimited: false },
  { label: "Up to 20 guests", price: "₦160,000", unlimited: false },
  { label: "Unlimited guests", price: "₦200,000", unlimited: true },
];

const PackageCard = ({ seriesLabel, name, desc, rows, featured }) => (
  <div className={`pkg-card ${featured ? "featured" : ""}`}>
    <div className="pkg-header">
      {featured && <span className="pkg-featured-badge">Most Popular</span>}
      <p className="pkg-series">{seriesLabel}</p>
      <h3 className="pkg-name">{name}</h3>
      <p className="pkg-desc">{desc}</p>
    </div>
    <div className="pkg-body">
      {rows.map((row, i) => (
        <div className="pkg-row" key={i}>
          <div className="pkg-meta">
            <FiClock className="pkg-icon" />
            <span className="pkg-duration">{row.duration}</span>
            <span className="pkg-guests">· {row.guests}</span>
          </div>
          <span className="pkg-price">{row.price}</span>
        </div>
      ))}
    </div>
  </div>
);

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-top">
        <h2 className="pricing-heading">
          Simple, <span>Transparent</span> Pricing
        </h2>
        <p className="pricing-sub">Choose the package that fits your vision</p>
      </div>

      <div className="pricing-grid">
        <PackageCard
          seriesLabel="Standard Package"
          name="The Homely Series"
          desc="Intimate, cosy sessions"
          rows={homelySeries}
        />

        <PackageCard
          seriesLabel="Standard Package"
          name="The Pro Series"
          desc="Elevated studio experience"
          rows={proSeries}
          featured
        />

        <div className="teaser-card">
          <div className="teaser-icon">
            <LuPartyPopper />
          </div>
          <p className="teaser-title">Planning a celebration?</p>
          <p className="teaser-desc">
            See our Event &amp; Celebration package below — bridal showers,
            proposals, birthdays &amp; more.
          </p>
          <div className="teaser-line" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-inner">
          <div className="event-left">
            <p className="event-tag">Event Package</p>
            <h3 className="event-name">Celebration Package</h3>
            <p className="event-desc">
              Perfect for bridal showers, proposals, baby showers, birthday
              parties, and more. Guests enjoy full access to all studio spaces.
            </p>
            <p className="event-note">
              Decoration not included. Max duration 3 hours. Studio comfortably
              fits up to 25 people — larger groups possible based on preference.
            </p>
          </div>

          <div className="event-right">
            <p className="event-right-title">Guest Capacity</p>
            {celebrationTiers.map((tier, i) => (
              <div className="event-row" key={i}>
                <div className="event-guests">
                  <FiUsers className="event-guests-icon" />
                  <span className={tier.unlimited ? "event-unlimited" : ""}>
                    {tier.label}
                  </span>
                </div>
                <span className="event-price">{tier.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Pricing;
