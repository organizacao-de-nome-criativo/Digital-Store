import { Link } from "react-router-dom";
import "./colection.css"
export const ColectionButton = ({route, addStyle, icon, buttonPosition}) => {
  return (
    <>
      <div className={buttonPosition}>
        <Link to={`/button/${route}`}>
          <button className={"icon-button " + addStyle}>
            <img src={icon} alt="" />
          </button>
        </Link>
      </div>
    </>
  );
};
