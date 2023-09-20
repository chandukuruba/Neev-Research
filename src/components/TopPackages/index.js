import {AiFillStar} from 'react-icons/ai'
import './index.css'

const TopPackages = () => (
  <div className="package-section">
    <h1>
      Top
      <span className="head-span">packages</span>
    </h1>
    <p className="para">
      Explore our wide range of tests! We ensure that you do not miss out on any
      chance to keep yourself healthy.
    </p>
    <div className="packages">
      <div className="package-item">
        <h4>Basic Full Body Checkup</h4>
        <div className="reviews mt-2">
          <p>4.3</p>
          <AiFillStar />
          <p>(75 Reviews)</p>
        </div>
        <p>Number of tests - 53</p>
        <p>
          MRP: <span>$10,000</span> $8,490
        </p>
        <button type="button" className="btn btn-primary mt-3">
          Book now
        </button>
      </div>
      <div className="package-item">
        <h4>Advance Full Body Checkup</h4>
        <div className="reviews mt-2">
          <p>4.7</p>
          <AiFillStar />
          <p>(100 Reviews)</p>
        </div>
        <p>Number of tests - 70</p>
        <p>
          MRP: <span>$12,000</span> $10,000
        </p>
        <button type="button" className="btn btn-primary mt-3">
          Book now
        </button>
      </div>
      <div className="package-item">
        <h4>Liver Function Test (LFT)</h4>
        <div className="reviews mt-2">
          <p>4.3</p>
          <AiFillStar />
          <p>(43 Reviews)</p>
        </div>
        <p>Number of tests - 89</p>
        <p>
          MRP: <span>$13,299</span> $11,299
        </p>
        <button type="button" className="btn btn-primary mt-3">
          Book now
        </button>
      </div>
      <p>See all</p>
    </div>
  </div>
)

export default TopPackages
