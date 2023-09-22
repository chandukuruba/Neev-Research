import {useState} from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
import './index.css'

const WhyChooseUs = () => {
  const [isDisplay1, setDisplay1] = useState(false)
  const [isDisplay2, setDisplay2] = useState(false)
  const [isDisplay3, setDisplay3] = useState(false)
  const [isDisplay4, setDisplay4] = useState(false)

  const onClick1 = () => {
    setDisplay1(prevState => !prevState)
  }

  const onClick2 = () => {
    setDisplay2(prevState => !prevState)
  }

  const onClick3 = () => {
    setDisplay3(prevState => !prevState)
  }

  const onClick4 = () => {
    setDisplay4(prevState => !prevState)
  }

  return (
    <div className="why-us-section">
      <h1 className="style-head">
        Why <span className="head-span">choose</span> us?
      </h1>
      <p className="package-para">
        We want you and your heart to be healthy so you can live a happy life!
      </p>
      <div className="why-section-back">
        <div className="why-section-list">
          <div className="why-section-item-desktop">
            <div className="why-section-head-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/6018/3a9c/54faee57a4b5ceedd5ebe33ab7c68d08?Expires=1696204800&Signature=Nejier95nlOzRMo-h-fadbU8TeBqh9cSe7LenakZTsWskDoS1tdIet~MHhym6DBLsBBHl3-Vrzg2c2fid3hT0GBCY2i~8Z0LQCZUOUFcdgq6UxPuE7kL3FmEv6ZPfIERotHY3QrhdBi4CKmakcwIBNknaiKXcD3hrAd43UuhDLTedpKhMkTyXftedDSIX64~S4bvo6X9lRNmMuMiNThDkldQRi9ic7zLiLauGnAX~tMp8h3IjsxdLsqLm8SP4q7F6oBc~mDXea5Ju6B5OVGsuM632sR0CGOWXMwBp9gcK~qQpdqzr8mHqeeRzHheVaBwHiD5J1ivX-rJDwmatH~~EQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="nabl"
                className="why-section-image"
              />
              <h1 className="why-section-head">NABL Accredited Labs</h1>
            </div>
            <p className="why-section-para">
              Get accurate and safe results from our NABL-certified lab
              partners.
            </p>
          </div>
          <div className="why-section-item-desktop why-section-item-1">
            <div className="why-section-head-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/85ae/fb5b/cda70a4e1c2c0566bb3835493bd9fae6?Expires=1696204800&Signature=QmAF1hnnaPqx6zHzAzYB8x~sRN42S5nJOa6Ij8wIEm29SYZKhW7UvZDWWm~ROsijMNRbJxqQxEmZwA9qWU-sdrWbs5lZ0-zihwjYAcUDoarEpmqSuBF7WyyuyOw5vAmsny3TkPJ9mUkesovRLNCdgJljxlUu64EWLKzja4EvjIez17a9~oTWAUGvYDkJqu0caf~fFOjbS1yEevsZYNcAyWcURCRsyS92pDUGeXmr89BShaW1cZGjEmdNx8QcVR6~IgEeG8XZqdLeX4RMHl~Up2BTZUHOQads6nAaXHMuUQ3bNUJBsdyvxKU8Wal0-3JXDDyXWsICx5YbwWtbD1rcvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="nabl"
                className="why-section-image"
              />
              <h1 className="why-section-head">Value experience</h1>
            </div>
            <p className="why-section-para">
              Experience seamless care without the hassle of waiting in long
              lines for an appointment. Book with us for a healthier lifestyle.
            </p>
          </div>
          <div className="why-section-item-desktop">
            <div className="why-section-head-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/76aa/5506/5b16a88759861a9f8868d2bcc39ac494?Expires=1696204800&Signature=Fb35FbvjDnWAoCSgRydxuEtU8qAtkrFiSW1WMQdd-JvHOWsLTyXY~5tgBzSMsLBPbl0PrU~z97OT9qWKnKm8NYdZL20jNMccOpHsN5oz81EKCTvbaAc9v3ec4Je5T7m~136Yt-Oi0SE4vsyVYV31XmPLEY-0tPvGGfauFrRQ7SVhXaG-lpvuIN9Toj1jJ7ldw7cy-MqcmgI7KoM6u6khLKXifXkxdSwh0HMea1CtUhKOr1AjTlpU7rrcjsDtwkGkfqP15r~CB67Usy8Y71WiDibKz0Kh1tliXJvTkK1GhMCvmGiRL8uYni7sSxkvtc-qIFNRJuKEgqpidzbIsasP6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="nabl"
                className="why-section-image"
              />
              <h1 className="why-section-head">Timely collections</h1>
            </div>
            <p className="why-section-para">
              We collect samples timely to prevent treatment delays and ensure
              your continued well-being.
            </p>
          </div>
          <div className="why-section-item-desktop why-section-item-1">
            <div className="why-section-head-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/b927/be19/477a4dbd9106f27a0a5849429422bdb7?Expires=1696204800&Signature=gj3nqiMtnqTMM8794Ncm2pwIO40DSG6VP8GX9WKAVopZrlSNf4WDZLDbCAvbXQeYaFA4Is~TCrh1PYPSiWiF-iiTz~h7-KtoSOt3cCpqmb6z-fjqn7JKtCyvY-9KT8ooiY1EnpHlSX1ymZXvSpyYx0TSM6H1Rv9li8kkQfu6K-J7iD0m4tJtITDKbPo4xM1qMwgPVM2yCbgRBaxTQfDk6LEYi5B6pE7S4YhomeXE6f9degkuACbV8pdaafFdhEeY-O~vMdPF5JCgtUE5YcMtr34lh7yIFN3ePYSIu5TTOAWnymWewOR4anvgmZGc2dUqjIhqlm3I-pwOnm32eNrFpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="nabl"
                className="why-section-image"
              />
              <h1 className="why-section-head">Transparency</h1>
            </div>
            <p className="why-section-para">
              Enjoy hassle free medical assistance with our transparent
              approach. We prioritize transparency for your smooth
              medical journey.
            </p>
          </div>
          <div className="why-section-item-mobile">
            <img
              src="https://s3-alpha-sig.figma.com/img/6018/3a9c/54faee57a4b5ceedd5ebe33ab7c68d08?Expires=1696204800&Signature=Nejier95nlOzRMo-h-fadbU8TeBqh9cSe7LenakZTsWskDoS1tdIet~MHhym6DBLsBBHl3-Vrzg2c2fid3hT0GBCY2i~8Z0LQCZUOUFcdgq6UxPuE7kL3FmEv6ZPfIERotHY3QrhdBi4CKmakcwIBNknaiKXcD3hrAd43UuhDLTedpKhMkTyXftedDSIX64~S4bvo6X9lRNmMuMiNThDkldQRi9ic7zLiLauGnAX~tMp8h3IjsxdLsqLm8SP4q7F6oBc~mDXea5Ju6B5OVGsuM632sR0CGOWXMwBp9gcK~qQpdqzr8mHqeeRzHheVaBwHiD5J1ivX-rJDwmatH~~EQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="nabl"
              className="why-section-image"
            />
            <div>
              <h1 className="why-section-head">NABL Accredited Labs</h1>
              {isDisplay1 && (
                <p className="why-section-para">
                  Get accurate and safe results from our NABL-certified lab
                  partners.{' '}
                </p>
              )}
            </div>
            <button type="button" className="button" onClick={onClick1}>
              {isDisplay1 ? (
                <ImCross className="arrow-logo" />
              ) : (
                <AiFillCaretRight className="arrow-logo" />
              )}
            </button>
          </div>
          <div className="why-section-item-mobile">
            <img
              src="https://s3-alpha-sig.figma.com/img/76aa/5506/5b16a88759861a9f8868d2bcc39ac494?Expires=1696204800&Signature=Fb35FbvjDnWAoCSgRydxuEtU8qAtkrFiSW1WMQdd-JvHOWsLTyXY~5tgBzSMsLBPbl0PrU~z97OT9qWKnKm8NYdZL20jNMccOpHsN5oz81EKCTvbaAc9v3ec4Je5T7m~136Yt-Oi0SE4vsyVYV31XmPLEY-0tPvGGfauFrRQ7SVhXaG-lpvuIN9Toj1jJ7ldw7cy-MqcmgI7KoM6u6khLKXifXkxdSwh0HMea1CtUhKOr1AjTlpU7rrcjsDtwkGkfqP15r~CB67Usy8Y71WiDibKz0Kh1tliXJvTkK1GhMCvmGiRL8uYni7sSxkvtc-qIFNRJuKEgqpidzbIsasP6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="nabl"
              className="why-section-image"
            />
            <div>
              <h1 className="why-section-head">Timely collections</h1>
              {isDisplay2 && (
                <p className="why-section-para">
                  We collect samples timely to prevent treatment delays and
                  ensure your continued well-being.
                </p>
              )}
            </div>
            <button type="button" className="button" onClick={onClick2}>
              {isDisplay2 ? (
                <ImCross className="arrow-logo" />
              ) : (
                <AiFillCaretRight className="arrow-logo" />
              )}
            </button>
          </div>
          <div className="why-section-item-mobile">
            <img
              src="https://s3-alpha-sig.figma.com/img/85ae/fb5b/cda70a4e1c2c0566bb3835493bd9fae6?Expires=1696204800&Signature=QmAF1hnnaPqx6zHzAzYB8x~sRN42S5nJOa6Ij8wIEm29SYZKhW7UvZDWWm~ROsijMNRbJxqQxEmZwA9qWU-sdrWbs5lZ0-zihwjYAcUDoarEpmqSuBF7WyyuyOw5vAmsny3TkPJ9mUkesovRLNCdgJljxlUu64EWLKzja4EvjIez17a9~oTWAUGvYDkJqu0caf~fFOjbS1yEevsZYNcAyWcURCRsyS92pDUGeXmr89BShaW1cZGjEmdNx8QcVR6~IgEeG8XZqdLeX4RMHl~Up2BTZUHOQads6nAaXHMuUQ3bNUJBsdyvxKU8Wal0-3JXDDyXWsICx5YbwWtbD1rcvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="nabl"
              className="why-section-image"
            />
            <div>
              <h1 className="why-section-head">Value experience</h1>
              {isDisplay3 && (
                <p className="why-section-para">
                  Experience seamless care without the hassle of waiting in long
                  lines for an appointment. Book with us for a
                  healthier lifestyle.
                </p>
              )}
            </div>
            <button type="button" className="button" onClick={onClick3}>
              {isDisplay3 ? (
                <ImCross className="arrow-logo" />
              ) : (
                <AiFillCaretRight className="arrow-logo" />
              )}
            </button>
          </div>
          <div className="why-section-item-mobile">
            <img
              src="https://s3-alpha-sig.figma.com/img/b927/be19/477a4dbd9106f27a0a5849429422bdb7?Expires=1696204800&Signature=gj3nqiMtnqTMM8794Ncm2pwIO40DSG6VP8GX9WKAVopZrlSNf4WDZLDbCAvbXQeYaFA4Is~TCrh1PYPSiWiF-iiTz~h7-KtoSOt3cCpqmb6z-fjqn7JKtCyvY-9KT8ooiY1EnpHlSX1ymZXvSpyYx0TSM6H1Rv9li8kkQfu6K-J7iD0m4tJtITDKbPo4xM1qMwgPVM2yCbgRBaxTQfDk6LEYi5B6pE7S4YhomeXE6f9degkuACbV8pdaafFdhEeY-O~vMdPF5JCgtUE5YcMtr34lh7yIFN3ePYSIu5TTOAWnymWewOR4anvgmZGc2dUqjIhqlm3I-pwOnm32eNrFpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="nabl"
              className="why-section-image"
            />
            <div>
              <h1 className="why-section-head">Transparency</h1>
              {isDisplay4 && (
                <p className="why-section-para">
                  Enjoy hassle free medical assistance with our transparent
                  approach. We prioritize transparency for your smooth
                  medical journey.
                </p>
              )}
            </div>
            <button type="button" className="button" onClick={onClick4}>
              {isDisplay4 ? (
                <ImCross className="arrow-logo" />
              ) : (
                <AiFillCaretRight className="arrow-logo" />
              )}
            </button>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dyukfze9f/image/upload/v1695144640/expressive-young-woman-posing-studio-removebg-preview-transformed_1_myub3t.png"
          alt="doctor"
          className="doctor-image"
        />
      </div>
    </div>
  )
}

export default WhyChooseUs
