import { NavLink, useLocation } from "react-router-dom";
import './btn.css';
import { IconContext } from "react-icons";

const Btn = ({ to = null, children, location, icon = null, highlight = false, type = 'button', handleClick = null}) => {
  highlight ? highlight : highlight = useLocation().pathname === to ? true : null;

  return (
    <NavLink to={to}>
      <button
        type={type}
        className={`btn btn-${location} ${highlight ? "btn-highlight" : ""}`}
        onClick={handleClick}
      >
        <IconContext.Provider
          value={highlight ? { size: "35px" } : { size: "45px" }}
        >
          {icon}
        </IconContext.Provider>
        {!highlight && location == "footer" ? null : children}
      </button>
    </NavLink>
  );
};

export default Btn;
