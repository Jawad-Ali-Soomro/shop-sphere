import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Home.css";
import { BsDot } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex col">
      <Header />
      <div className="container flex">
        <div className="left flex col">
          <h1>
            cha<span>n</span>ge <br />t<span>h</span>e Tre<span>n</span>d.
          </h1>
        </div>
      </div>
      <div className="categories flex col">
        <div className="wrapper flex">
          <div className="card">
            <div className="content flex">
              <div className="card-main flex col">
                <div className="imgs flex">
                  <img
                    src="https://cdn.sanity.io/images/w8f1ak3c/production/ff380ebfee344ff98d24d4156ded6b9dc22a2a2a-5000x5000.png/Change-The-Course-Cookbook-Two-Good-Co.png?w=320&h=320&auto=format"
                    alt=""
                  />
                  <img
                    src="https://cdn.sanity.io/images/w8f1ak3c/production/adb77436d60e62d2b5b0574016abcc864b8e65b0-4498x2999.png/DSC0078_Dexter%20Kim.png?rect=470,108,3458,2760&fp-x=0.4888698630136987&fp-y=0.49614340367765025&w=320&h=255&fit=crop&crop=focalpoint&auto=format"
                    alt=""
                  />
                </div>
                <button>SHop Now</button>
              </div>
              <p className="flex" style={{ fontSize: "1.3rem" }}>
                <BsDot />
              </p>
              <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>SHOP</p>
              <p>PANTRY</p>
              <p className="flex" style={{ fontSize: ".6rem" }}>
                <FaAngleRight />
              </p>
            </div>
            <img
              src="https://cdn.sanity.io/images/w8f1ak3c/production/9032e317a6741221ae543fdae5d05160819f9a44-1500x2250.jpg/DSC0079_Dexter%20Kim.jpg?rect=0,0,1500,2008&fp-x=0.47794117647058826&fp-y=0.4461323529411765&w=640&h=1067&fit=crop&crop=focalpoint&auto=format"
              alt=""
            />
          </div>
          <div className="card">
            <div className="content flex">
              <div className="card-main flex col">
                <div className="imgs flex">
                  <img
                    src="https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=320&h=320&auto=format"
                    alt=""
                  />
                  <img
                    src="https://cdn.sanity.io/images/w8f1ak3c/production/d38a94692dcb9250bb49632883f8e31c4a11e123-1408x1408.png/Two%20Hugs%20Candle%20Two%20Good%20Co.png?w=320&h=320&auto=format"
                    alt=""
                  />
                </div>
                <button>SHop Now</button>
              </div>
              <p className="flex" style={{ fontSize: "1.3rem" }}>
                <BsDot />
              </p>
              <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>SHOP</p>
              <p>HOME</p>
              <p className="flex" style={{ fontSize: ".6rem" }}>
                <FaAngleRight />
              </p>
            </div>
            <img
              src="https://cdn.sanity.io/images/w8f1ak3c/production/138e191deead80c5c8e9a982c20987f8f83c1f27-5504x8256.jpg/JTG_2919%20copy.jpg?rect=276,0,4952,8256&w=640&h=1067&fit=min&auto=format"
              alt=""
            />
          </div>
          <div className="card">
            <div className="content flex">
              <div className="card-main flex col">
                <div className="imgs flex">
                  <img
                    src="https://cdn.sanity.io/images/w8f1ak3c/production/63474079ab0c7723b75bd63b24d8bbc652349640-1408x1408.png/Cleanse%20&%20Nourish%20Hand%20Wash%20Two%20Good%20Co.png?w=320&h=320&auto=format"
                    alt=""
                  />
                  <img
                    src="https://cdn.sanity.io/images/w8f1ak3c/production/99866b12faf44f7490e6037dc197947334ce0a72-1408x1408.png/Nourish%20&%20Soothe%20Hand%20Lotion%20Two%20Good%20Co.png?w=320&h=320&auto=format"
                    alt=""
                  />
                </div>
                <button>SHop Now</button>
              </div>
              <p className="flex" style={{ fontSize: "1.3rem" }}>
                <BsDot />
              </p>
              <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>SHOP</p>
              <p>BATH</p>
              <p className="flex" style={{ fontSize: ".6rem" }}>
                <FaAngleRight />
              </p>
            </div>
            <img
              src="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
              alt=""
            />
          </div>
        </div>
        <div className="design flex"></div>
      </div>
      <div className="products flex col">
        <h1>
          We <span>believe</span> in people, <br /> until they believe in{" "}
          <span>them</span>selves.
        </h1>
        <div className="wrapper flex">
          <div className="card flex col" onClick={() => navigate(`/product/1`)}>
            <img
              src="https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=1024&h=1024&auto=format"
              alt=""
            />
            <p>JAC + JACK BUY 1, GIVE 1 BLANKET - GREY/RUST</p>
            <p>$180</p>
          </div>
          <div className="card flex col" onClick={() => navigate(`/product/2`)}>
            <img
              src="https://cdn.sanity.io/images/w8f1ak3c/production/7d180ca25ade6277a215b634318056d551de9da8-5000x5000.png/Website%20Products%20(5).png?w=1024&h=1024&auto=format"
              alt=""
            />
            <p>TWO GOOD HOODIE</p>
            <p>$1000</p>
          </div>
          <div className="card flex col" onClick={() => navigate(`/product/3`)}>
            <img
              src="https://cdn.sanity.io/images/w8f1ak3c/production/5ff174456e7f3a000b5bcdd6768155d29570c39b-5000x5000.png/Good-Nights-Sleep-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format"
              alt=""
            />
            <p>THE GOOD {"NIGHT'S"} SLEEP CARE PACK</p>
            <p>$80</p>
          </div>
          <div className="card flex col" onClick={() => navigate(`/product/4`)}>
            <img
              src="https://cdn.sanity.io/images/w8f1ak3c/production/806a2f5e4cbbee3b6a94e5560e7f69e5f5e7983d-1408x1408.png/Cleanse%20&%20Hydrate%20Shampoo%205L%20Two%20Good%20Co.png?w=640&h=640&auto=format"
              alt=""
            />
            <p>CLEANSE & HYDRATE SHAMPOO (5L)</p>
            <p>$100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
