import React, { useContext } from 'react'
import '../Styles/Button.scss'
import '../Styles/Misc.scss'
import { showCatagoryContext } from '../App'
import { RxCross1 } from "react-icons/rx";

const Button = ({ Icon, text, clickEvent, showX }) => {

  const { showCatagory } = useContext(showCatagoryContext)

  return (
    <button className={`Button LightBtn`} onClick={clickEvent}>
      {
        showX ? (
          // showCatagory ? (
          //   <><RxCross1 /> Close</>
          // ) : (
          //   <p>{text}</p>
          // )
          <div className={`btnCont ${showCatagory ? 'open' : 'close'}`}>
            <div className="txt"><p>{text}</p></div>
            <div className="icon"><RxCross1 /><p>Close</p></div>
          </div>
        )
          : (
            <>
              {Icon && <Icon />}
              {text && <p>{text}</p>}
            </>
          )
      }
    </button>
  )
}

export default Button