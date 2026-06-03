import React from "react";
import camera from "../assets/camera.jpeg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
const Inhouse = () => {
  return (
    <>
      <section className="inhouse-camera" id="inhouse">
        <div className="inhouse-content">
          <div>
            <img src={camera} alt="Camera Icon" className="in-cam" />
          </div>

          <div className="in-house-title">
            <h3>Exclusive for studio client</h3>
            <h1>
              IN-HOUSE <br />
              PHOTOGRAPHY
            </h1>
            <p className="in-bra">(HRM Photography)</p>
            <p>
              We offer professional in-house <br /> photography services
              exclusively <br /> to clients who book our studio.
            </p>
          </div>

          <div className="in-card">
            <IoPhonePortraitOutline className="in-icon" />
            <h3>IPHONE PACKAGE </h3>

            <p>
              All raw contents <br />5 Edited Photos
            </p>
            <h1>15,000</h1>
          </div>

          <div className="in-card">
            <CiCamera className="in-icon" />
            <h3>
              DIGITAL CAMERA <br />
              PACKAGE{" "}
            </h3>

            <p>
              All raw contents <br />5 Edited Photos
            </p>
            <h1>25,000</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inhouse;
