import {AiFillStar} from 'react-icons/ai'
import './index.css'

const TopPackages = () => (
  <div className="package-section">
    <h1 className="style-head">
      Top
      <span className="head-span"> packages</span>
    </h1>
    <p className="package-para">
      Explore our wide range of tests! We ensure that you do not miss out on any
      chance to keep yourself healthy.
    </p>
    <div className="packages">
      <div className="package-item">
        <h4 className="package-head">Basic Full Body Checkup</h4>
        <div className="reviews mt-2">
          <p className="rating">4.3</p>
          <AiFillStar className="star" />
          <p className="no-of-reviews">(75 Reviews)</p>
        </div>
        <p className="rating">Number of tests - 53</p>
        <p>
          MRP: <span className="line-through">$10,000</span>{' '}
          <span className="amount">$8990</span>
        </p>
        <button type="button" className="package-button">
          Book now
        </button>
      </div>
      <div className="package-item">
        <h4 className="package-head">Advance Full Body Checkup</h4>
        <div className="reviews mt-2">
          <p className="rating">4.7</p>
          <AiFillStar className="star" />
          <p className="no-of-reviews">(100 Reviews)</p>
        </div>
        <p className="rating">Number of tests - 70</p>
        <p>
          MRP: <span className="line-through">$12,000</span>{' '}
          <span className="amount">$10,000</span>
        </p>
        <button type="button" className="package-button">
          Book now
        </button>
      </div>
      <div className="package-item">
        <h4 className="package-head">Liver Function Test (LFT)</h4>
        <div className="reviews">
          <p className="rating">4.3</p>
          <AiFillStar className="star" />
          <p className="no-of-reviews">(43 Reviews)</p>
        </div>
        <p className="rating">Number of tests - 89</p>
        <p>
          MRP: <span className="line-through">$13,299</span>{' '}
          <span className="amount">$11,299</span>
        </p>
        <button type="button" className="package-button">
          Book now
        </button>
      </div>
      <p className="extend">See all</p>
    </div>
  </div>
)

export default TopPackages
