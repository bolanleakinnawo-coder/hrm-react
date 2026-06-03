import {
  FiClock,
  FiUsers,
  FiCreditCard,
  FiCalendar,
  FiAlertCircle,
} from "react-icons/fi";


const rules = [
  {
    icon: <FiCreditCard />,
    title: "Space Booking",
    text: "Payment covers only the space you choose. You cannot switch between The Homely Series and The Pro Series after booking.",
  },

  {
    icon: <FiUsers />,
    title: "Guest Limit",
    text: "Our studio accommodates up to 25 people at a time for comfort and safety.",
  },

  {
    icon: <FiUsers />,
    title: "Extra Guests",
    text: "Extra guests attract additional charges. Unpaid guests will not be allowed into the studio.",
  },

  {
    icon: <FiCalendar />,
    title: "Guest Changes",
    text: "Guests cannot be swapped or changed after your booking has been confirmed.",
  },

  {
    icon: <FiClock />,
    title: "Time Policy",
    text: "Please arrive exactly at your booked time. Late arrivals will reduce your session time.",
  },

  {
    icon: <FiAlertCircle />,
    title: "Long Sessions",
    text: "For bookings longer than 3 hours, kindly notify us ahead of time.",
  },
];

function BookingRules() {
  return (
    <section className="booking-rules">
      <div className="booking-header">
        <p>BEFORE YOU BOOK</p>

        <h2>Important Booking Rules</h2>

        <div className="gold-line"></div>

        <span>
          Please read through our studio guidelines before confirming your
          session.
        </span>
      </div>

      <div className="rules-wrapper">
        {rules.map((rule, index) => (
          <div className="booking-card" key={index}>
            <div className="icon-box">{rule.icon}</div>

            <h3>{rule.title}</h3>

            <p>{rule.text}</p>
          </div>
        ))}
      </div>

      <button className="view-rules-btn">View All Rules</button>
    </section>
  );
}

export default BookingRules;
