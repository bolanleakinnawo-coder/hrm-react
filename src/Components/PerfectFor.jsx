import React from "react";
import {
  FiCamera,
  FiHeart,
  FiUsers,
  FiBriefcase,
  FiMic,
  FiVideo,
} from "react-icons/fi";

import { LuSparkles, LuPartyPopper, LuMegaphone } from "react-icons/lu";
import img1 from "../assets/homely/home1.jpg";
import img2 from "../assets/homely/home2.jpg";
import img3 from "../assets/homely/home3.jpg";

const PerfectFor = () => {
  const iconMap = {
    camera: <FiCamera />,
    sparkles: <LuSparkles />,
    heart: <FiHeart />,
    party: <LuPartyPopper />,
    users: <FiUsers />,
    briefcase: <FiBriefcase />,
    mic: <FiMic />,
    video: <FiVideo />,
    megaphone: <LuMegaphone />,
  };
  const perfectFor = [
    { icon: "camera", title: "Dreamy Photoshoots" },
    { icon: "sparkles", title: "Creative Content Days" },
    { icon: "heart", title: "Intimate Bridal Showers" },
    { icon: "heart", title: "Romantic Proposals" },
    { icon: "party", title: "Fun Birthday Parties" },
    { icon: "users", title: "Cozy Hangouts with Friends" },
    { icon: "briefcase", title: "Private Meetings" },
    { icon: "mic", title: "Podcast Recording Sessions" },
    { icon: "video", title: "Cinematic Video Shoots" },
    { icon: "camera", title: "Elegant Wedding Portraits" },
    { icon: "megaphone", title: "Stunning Brand Campaigns" },
  ];
  return (
    <div>
      <section className="perfect-for" id="perfect-for">
        <div className="perfect-for-wrapper">
          <div className="perfect-for-cards">
            <h2 className="perfect-for-title">Our Space is perfect for</h2>
            <div className="perfect-for-card">
              {perfectFor.map((item, index) => (
                <div key={index} className="perfect-for-item">
                  <div className="icon">{iconMap[item.icon]}</div>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerfectFor;
