import React, { memo, useContext } from 'react'
import '../Styles/Button.scss'
import '../Styles/Misc.scss'
import { showCatagoryContext } from '../App';
import { ThemeContext } from '../App'
import { RxCross1 } from "react-icons/rx";

const Button = memo(({ text, clickEvent }) => {

  const { darkMode } = useContext(ThemeContext)
  const { catagory } = useContext(showCatagoryContext)

  return (
    <div>
      <button className={`Button ${!darkMode && 'LightBtn'} ${catagory && 'slideLeft'}`} onClick={clickEvent}>
            <div className={`btnCont ${ catagory ? 'open' : 'close'}`}>
              <div className="txt"><p>{text}</p></div>
              <div className="icon"><RxCross1 /><p>Close</p></div>
            </div>
      </button>
    </div>
  )
})

export default Button