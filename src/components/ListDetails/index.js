import {AiFillCaretRight} from 'react-icons/ai'
import './index.css'

const ListDetails = props => {
  const {data, onChange} = props
  const {content, logo, id, isDisplay, head} = data

  const onClickButton = () => {
    onChange(id)
  }

  return (
    <>
      <div className="mobile-approach">
        <img src={logo} alt={head} className="logo" />
        <h4>{head}</h4>
        <button className="button" type="button" onClick={onClickButton}>
          <AiFillCaretRight />
        </button>
        {isDisplay && <p>{content}</p>}
      </div>
      <div className="desktop-approach">
        <img src={logo} alt={head} className="logo" />
        <h1>{head}</h1>
        <p>{content}</p>
      </div>
    </>
  )
}

export default ListDetails
