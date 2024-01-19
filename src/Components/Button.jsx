import React, { useContext } from 'react'
import '../Styles/Button.scss'
import '../Styles/Misc.scss'
import { showCatagoryContext } from '../App'
import { RxCross1 } from "react-icons/rx";

const Button = ({ Icon, text, clickEvent, showX, animation }) => {

  const { showCatagory } = useContext(showCatagoryContext)

  return (
    <div className={animation ? 'btnBorderAnimation' : ''}>
      <button className={`Button ${localStorage.getItem('lightMode')==='true' && 'LightBtn'}`} onClick={clickEvent}>
        {
          showX ? (
            <div className={`btnCont ${showCatagory ? 'open' : 'close'}`}>
              <div className="txt"><p>{text}</p></div>
              <div className="icon"><RxCross1 /><p>Close</p></div>
            </div>
          )
            : (
              <>
                {Icon && <Icon />}
                {text && <p className={animation ? 'btnAnimation' : ''}>{text}</p>}
              </>
            )
        }
      </button>
    </div>
  )
}

export default Button