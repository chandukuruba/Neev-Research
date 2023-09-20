import {FaGooglePlay} from 'react-icons/fa'
import './index.css'

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container">
      <a className="navbar-brand" href="#home">
        <img
          src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/roofing-company-logo.jpg"
          alt="company logo"
          className="company-logo"
        />
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
