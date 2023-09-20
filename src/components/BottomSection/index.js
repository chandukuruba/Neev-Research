import {IoIosCall} from 'react-icons/io'
import './index.css'

const BottomSection = () => (
  <>
    <div className="bottom-section">
      <div className="phone">
        <img
          src="data:image/png;base64,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"
          alt="logo"
          className="x-logo"
        />
        <p>
          Book doctor appointment online and get your aliments treated in no
          time with our expert medical support sysytem. Get rid of all your
          medical problem with our expert panal of doctors who guide you towards
          a healthier life.
        </p>
        <div className="number-input-container">
          <p className="number">+91</p>
          <input type="text" className="number-input" />
          <button type="button" className="button-logo">
            <IoIosCall />
          </button>
        </div>
      </div>
      <div className="others">
        <div>
          <h1>Services</h1>
          <p>Appointments</p>
          <p>Lab tests</p>
          <p>A-Z medicine</p>
          <p>Doctor support</p>
        </div>
        <div>
          <h1>Legal</h1>
          <p>General info</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
          <p>Consultation</p>
          <p>How it works</p>
        </div>
        <div>
          <h1>Talk to us</h1>
          <p>support@notinline.com</p>
          <p>appointment@notinline.com</p>
          <p>+91 12346 78991</p>
          <p>+91 97642 09752</p>
        </div>
      </div>
    </div>
    <div className="bottom">
      <hr className="line" />
      <p className="rights">C 2021-2023 All Rights Reserved</p>
    </div>
  </>
)

export default BottomSection
