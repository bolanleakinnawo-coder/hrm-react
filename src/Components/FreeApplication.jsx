import { FiSun, FiCamera, FiMic, FiVolume2 } from "react-icons/fi";

const appliances = [
  {
    icon: <FiSun />,
    title: "LED Light",
    text: "Professional lighting equipment available to enhance your content.",
  },

  {
    icon: <FiCamera />,
    title: "Tripod Stand",
    text: "Stable tripod support for photos, videos, and creative setups.",
  },

  {
    icon: <FiMic />,
    title: "Wireless Microphone",
    text: "Clear audio equipment available for recordings and shoots.",
  },

  {
    icon: <FiVolume2 />,
    title: "Speaker",
    text: "Quality sound equipment available for your studio experience.",
  },
];

function Appliances() {
  return (
    <section className="appliances">
      <div className="appliance-header">
        <p>STUDIO AMENITIES</p>

        <h2>Free Appliances Available</h2>

        <span>
          To make your content creation smoother, we provide these essentials at
          no extra cost.
        </span>
      </div>

      <div className="appliance-grid">
        {appliances.map((item, index) => (
          <div className="appliance-card" key={index}>
            <div className="appliance-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Appliances;
