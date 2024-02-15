import React, { memo, useContext } from "react";
import "../Styles/ResultCards.scss";
import "../Styles/Misc.scss";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeContext } from "../App";
import { MdOutlineVpnKey } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { TbShare } from "react-icons/tb";
import { GrLinkNext } from "react-icons/gr";

const ResultCards = memo(({ name, auth, Cors, desc, https, link }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true }}
      className={`ResultCards ${!darkMode ? "cardInLight" : "cardInDark"}`}
    >
      <div className="logoImg">
        {name ? (
          <img
            src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${link}&size=128`}
            alt=""
          />
        ) : (
          <Skeleton
            style={{
              width: "45px",
              height: "45px",
              marginRight: "10px",
            }}
          />
        )}
        <h2>
          {name || (
            <Skeleton
              style={{
                width: "210px",
                height: "30px",
              }}
            />
          )}
        </h2>
      </div>
      <p>{desc || <Skeleton count={2} />}</p>
      <div className="options">
        <div className="auth cardSvgDiv">
          {name ? (
            <>
              <MdOutlineVpnKey /> <span>{auth}</span>
            </>
          ) : (
            <Skeleton
              style={{
                width: "50px",
                marginLeft: "0px",
              }}
            />
          )}
          <p className="tooltip">Authentication</p>
        </div>
        <div className="cors cardSvgDiv">
          {name ? (
            <>
              <TbShare /> <span>{Cors}</span>
            </>
          ) : (
            <Skeleton
              style={{
                width: "50px",
              }}
            />
          )}
          <p className="tooltip">CORS</p>
        </div>
        <div className="https cardSvgDiv">
          {name ? (
            <div className="security">
              {https ? (
                <>
                  <FaLock /> <span>HTTPS</span>
                </>
              ) : (
                <>
                  <FaLockOpen /> <span>HTTP</span>
                </>
              )}
            </div>
          ) : (
            <Skeleton
              style={{
                width: "50px",
              }}
            />
          )}
          <p className="tooltip">HTTPS</p>
        </div>
        <a href={link} target="_blank" className="link cardSvgDiv">
          {name ? (
            <>
              <p>Link </p>
              <GrLinkNext />
            </>
          ) : (
            <Skeleton
              style={{
                width: "50px",
              }}
            />
          )}
        </a>
      </div>
    </motion.div>
  );
});

export default ResultCards;
