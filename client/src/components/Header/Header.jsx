import { BiCart, BiHeart } from "react-icons/bi";
import "./Header.css";

const Header = () => {
  return (
    <div className="header flex bw">
      <div className="logo">
        <img src="/img/logo.png" alt="" />
      </div>
      <div className="navs flex">
        <ul className="flex">
          <div className="icons flex">
            <div className="icon flex" data-info="shopping" data-count="5">
              <BiCart />
            </div>
            <div className="icon flex" data-info="favourite" data-count="1">
              <BiHeart />
            </div>
          </div>
          <div className="bars flex col">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
