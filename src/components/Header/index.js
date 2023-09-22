import {FaGooglePlay} from 'react-icons/fa'
import './index.css'

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container">
      <a className="navbar-brand" href="#home">
        <div className="logo-container">
          <img
            alt="company-logo"
            className="x-logo"
            src="https://s3-alpha-sig.figma.com/img/629f/f9bc/1671f45dd70fcc98ccd63fd9b593b28e?Expires=1696204800&Signature=pwpqEEFN4O4bCvenJ-ZBJggatU0j1O3KvOvGFMFKhrXH6TcRHjiOMA4dAeYzrbj7cYruOxNixnngllREWcj~lFN9JJ4qmlTEvn7qCuGMg5sllCPyqskgBbKPWTxZXSkR-jLgDvF8kBLq6Bj-nzkRKO0hilfsoeuQZcnKNo2Vn3yd7AVRnjP9hkZkrNm3f2LdGkghDrFIGMq~f0g34CezKVHdw4cdKBRAsiWrwYd-oDCa7WElCSg3pUjJH6~iYFBIGI6wlkkTLNiB3vFVGsXMtPI9UxgVPVirD0fP8S1yKspJDh7y0AKpvuk~Oq4Um0hGt11vbYji3Lz5jY0BeA--xw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/7aff/313c/1fdad0e29dca16618cd104e8b63219da?Expires=1696204800&Signature=KjtMEhEAPYZnepPpVsRXnIkpDFKMr7a1gx3k2MsWvvBtMpLVETKclh-7dmUcFvUPSJlzcFZTxS4SkF8lLh-dIBEvzmPIOe5jHW0nxIEmEmC7tRGT6eXpSlZJhYWwPlH4sYpsB5A3wkZ54rHnUo--VXq8reSU4UiIkR-IAwaFwTfWwIMQvR1xtDWOCDL8m3Y9DaueOWPfFHQE4rNIBVdNE00fvk22jU8yynELj-8k~8VsTcjEMyS~9dK1MiuEzRLKHwh6fzOQF0~9cmdaAP9sYBHrcSCIewOuuI3LKAsOkiBQQMqOXGGz5AKMqY8gaPgXE8uoYjeXmT9ohOGNvq0-UA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="company logo"
            className="company-logo"
          />
        </div>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">-</span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-link" href="#home">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-link" href="#product">
            Health Condition
          </a>
          <a className="nav-link active" href="#recent">
            Lab tests
          </a>
          <a className="nav-link" href="#delivery">
            Medicine
          </a>
          <a className="nav-link" href="#patients">
            <button type="button" className="btn btn-primary">
              For Patients
            </button>
          </a>
          <a className="nav-link" href="#patients">
            <button type="button" className="btn btn-primary">
              For Hospitals
            </button>
          </a>
          <a className="nav-link" href="#patients">
            <button type="button" className="btn btn-dark">
              <FaGooglePlay /> Playstore
            </button>
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
