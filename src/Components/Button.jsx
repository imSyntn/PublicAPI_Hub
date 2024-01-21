import React, { memo, useContext } from 'react'
import '../Styles/Button.scss'
import '../Styles/Misc.scss'
import { showCatagoryContext } from '../App'
import { ThemeContext } from '../App'
import { RxCross1 } from "react-icons/rx";

const Button = ({ Icon, text, clickEvent, showX, animation }) => {

  const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
  const { showCatagory } = useContext(showCatagoryContext)

  return (
    <div className={animation && 'btnBorderAnimation'}>
      <button className={`Button ${currentTheme.lightMode && 'LightBtn'} ${showX && showCatagory && 'slideLeft'}`} onClick={clickEvent}>
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
                {text && <p className={animation && 'btnAnimation'}>{text}</p>}
              </>
            )
        }
      </button>
    </div>
  )
}

export default memo(Button)