import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { BiShoppingBag } from "react-icons/bi";
import { MdSunny } from "react-icons/md";
import { BiSolidMoon } from "react-icons/bi";

import AppContext from "../../context/AppContext";

import "./index.css";

const Header = () => {

  return(
  <AppContext.Consumer>
    {
      value => {
        const {lightTheme, changeAppTheme} = value
        const txtColor = lightTheme ? "text-dark" : null;

        const onToggleAppTheme = () => {
          changeAppTheme();
        }

        return (
            <div className="header-bg">
              <div className="d-flex justify-content-between align-items-center">
                <p className={`app-logo ${txtColor}`}>TANN TRIM</p>
                <div className={`header-icon-container ${txtColor}`}>
                  <button type="button" className={`theme-toggle-btn`} onClick={onToggleAppTheme}>
                    {
                      lightTheme ? <BiSolidMoon /> : <MdSunny /> 
                    }                  
                  </button>
                  <FiSearch size={25} />
                  <FaRegUser size={25} />
                  <FaRegBookmark size={25} />
                  <BiShoppingBag size={25} />
                </div>
              </div>
              <ul className={`menu-list ${txtColor}`}>
                <li className="menu-list-item">Bags</li>
                <li className="menu-list-item">Travel</li>
                <li className="menu-list-item">Accessories</li>
                <li className="menu-list-item">Gifting</li>
                <li className="menu-list-item">Jewelery</li>
              </ul>
            </div>
        );
      }
    }
  </AppContext.Consumer>
  );
  
};

export default Header;
