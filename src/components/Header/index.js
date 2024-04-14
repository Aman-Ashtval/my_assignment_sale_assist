import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { BiShoppingBag } from "react-icons/bi";

import "./index.css";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="d-flex justify-content-between align-items-center">
        <p className="app-logo">TANN TRIM</p>
        <div className="header-icon-container">
          <FiSearch size={22} />
          <FaRegUser size={22} />
          <FaRegBookmark size={22} />
          <BiShoppingBag size={22} />
        </div>
      </div>
      <ul className="menu-list">
        <li className="menu-list-item">Bags</li>
        <li className="menu-list-item">Travel</li>
        <li className="menu-list-item">Accessories</li>
        <li className="menu-list-item">Gifting</li>
        <li className="menu-list-item">Jewelery</li>
      </ul>
    </div>
  );
};

export default Header;
