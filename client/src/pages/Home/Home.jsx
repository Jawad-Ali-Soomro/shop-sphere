import { BsDot } from "react-icons/bs";
import Header from "../../components/Header/Header";
import "./Home.css";
import { CgArrowLongDown } from "react-icons/cg";
const Home = () => {
  return (
    <div className="flex col">
      <Header />
      <div className="container flex">
        <div className="scroll-down flex">
          <p>SCROLL DOWN</p>
          <div className="icon flex">
            <CgArrowLongDown />
          </div>
        </div>
        <div className="left flex col">
          <h1>
            Discover. <br /> Shop & Enjoy!
          </h1>
          <button>
            <BsDot
              style={{ fontSize: "3rem", color: "rgba(255,255,255,.5)" }}
            />
            Explore
            <BsDot
              style={{ fontSize: "3rem", color: "rgba(255,255,255,.5)" }}
            />
          </button>
        </div>
      </div>
      <div className="categories flex col">
        <div className="wrapper flex">
          <div className="card flex col">
            <img src="/img/features/f1.png" alt="" />
            <h2>Fast Delievery</h2>
          </div>
          <div className="card flex col">
            <img src="/img/features/f2.png" alt="" />
            <h2>Fast Delievery</h2>
          </div>
          <div className="card flex col">
            <img src="/img/features/f3.png" alt="" />
            <h2>Fast Delievery</h2>
          </div>
          <div className="card flex col">
            <img src="/img/features/f4.png" alt="" />
            <h2>Fast Delievery</h2>
          </div>
          <div className="card flex col">
            <img src="/img/features/f5.png" alt="" />
            <h2>Fast Delievery</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
