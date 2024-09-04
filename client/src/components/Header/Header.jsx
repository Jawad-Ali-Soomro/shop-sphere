import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="header flex bw">
      <div
        className="main-menu flex"
        style={{ height: `${showMenu ? "100vh" : "0px"}` }}
      >
        <div className="flex main-navs col">
          <ul>
            <li>sale</li>
            <li>Shop</li>
            <li>about</li>
            <li>offers</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="flex col">
          <p>CONNECT US</p>
          <section className="links flex col">
            <Link className="link">Facebook</Link>
            <Link className="link">Instagram</Link>
            <Link className="link">LinkedIn</Link>
            <Link className="link">Facebook</Link>
            <Link className="link">YouTube</Link>
          </section>
        </div>
        <div className="flex col">
          <p>GET STARTED</p>
          <section className="links flex col">
            <Link className="link">{"FAQ's"}</Link>
            <Link className="link">jobs</Link>
            <Link className="link">login</Link>
            <Link className="link">Help center</Link>
            <Link className="link">cart</Link>
          </section>
        </div>
      </div>
      <div className="logo">
        <div className="top flex">
          <div className="rect"></div>
          <div className="rect"></div>
        </div>
        <div className="bottom flex">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
      <div className="navs flex">
        <div className="bars flex col" onClick={() => setShowMenu(!showMenu)}>
          <div
            className="bar"
            style={{
              transform: `rotate(${showMenu ? "45deg" : "0"})`,
              position: `${showMenu ? "absolute" : "relative"}`,
            }}
          ></div>
          <div
            className="bar"
            style={{ maxWidth: `${showMenu ? "0" : "25px"}` }}
          ></div>
          <div
            className="bar"
            style={{
              transform: `rotate(${showMenu ? "-45deg" : "0"})`,
              position: `${showMenu ? "absolute" : "relative"}`,
            }}
          ></div>
        </div>
        <div className="icon flex">
          <FiShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Header;
