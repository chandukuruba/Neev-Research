import {IoIosCall} from 'react-icons/io'
import './index.css'

const BottomSection = () => (
  <div className="bottom-section">
    <div className="bottom-top">
      <div className="bottom-section-logo-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/629f/f9bc/1671f45dd70fcc98ccd63fd9b593b28e?Expires=1696204800&Signature=pwpqEEFN4O4bCvenJ-ZBJggatU0j1O3KvOvGFMFKhrXH6TcRHjiOMA4dAeYzrbj7cYruOxNixnngllREWcj~lFN9JJ4qmlTEvn7qCuGMg5sllCPyqskgBbKPWTxZXSkR-jLgDvF8kBLq6Bj-nzkRKO0hilfsoeuQZcnKNo2Vn3yd7AVRnjP9hkZkrNm3f2LdGkghDrFIGMq~f0g34CezKVHdw4cdKBRAsiWrwYd-oDCa7WElCSg3pUjJH6~iYFBIGI6wlkkTLNiB3vFVGsXMtPI9UxgVPVirD0fP8S1yKspJDh7y0AKpvuk~Oq4Um0hGt11vbYji3Lz5jY0BeA--xw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="x-logo"
          className="logo-x"
        />

        <p className="bottom-section-para">
          Book doctor appointments online and get your ailments treated in no
          time with our expert medical support systems. Get rid of all your
          medical problem with our expert panel of doctors who guide you towards
          a healthier life.
        </p>
        <div className="number-input-container">
          <p className="number">+91</p>
          <input type="text" className="number-input" />
          <div className="phone-logo-container">
            <IoIosCall className="phone-logo" />
          </div>
        </div>
      </div>
      <div className="bottom-section-services">
        <div className="bottom-section-list">
          <h1 className="bottom-head">Services</h1>
          <p className="bottom-section-para">Appointments</p>
          <p className="bottom-section-para">Lab tests</p>
          <p className="bottom-section-para">A-Z medicine</p>
          <p className="bottom-section-para">Doctor support</p>
        </div>
        <div className="bottom-section-list">
          <h1 className="bottom-head">Legal</h1>
          <p className="bottom-section-para">General info</p>
          <p className="bottom-section-para">Privacy policy</p>
          <p className="bottom-section-para">Terms of services</p>
          <p className="bottom-section-para">Consultation</p>
          <p className="bottom-section-para">How it works</p>
        </div>
        <div className="bottom-section-list">
          <h1 className="bottom-head">Talk to us</h1>
          <p className="bottom-section-para">support@notinline.com</p>
          <p className="bottom-section-para">appointment@notinline.com</p>
          <p className="bottom-section-para">+91 123456789</p>
          <p className="bottom-section-para">+91 987654321</p>
        </div>
      </div>
    </div>
    <div>
      <hr className="line" />
      <span className="copyrights">C</span>
      <span className="bottom-head">2021-2023 All Rights Reserved</span>
    </div>
  </div>
)

export default BottomSection
