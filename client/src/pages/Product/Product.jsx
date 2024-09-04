import "./Product.css";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { BiCart } from "react-icons/bi";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="main-product flex">
      <Header />
      <div className="wrapper bw">
        <div className="left-info flex col">
          <h1>JAC + JACK BUY 1, GIVE 1 BLANKET - GREY/RUST</h1>
          <div className="btn flex">
            <div className="plus-minus flex">
              <button
                className="minus"
                onClick={quantity <= 0 ? this : () => setQuantity(quantity - 1)}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className="plus"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <p className="price">${quantity * 100}</p>
            <div className="cart flex">
              <BiCart />
            </div>
          </div>
        </div>
        <div className="img-sect flex">
          <img
            src="https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=1024&h=1024&auto=format"
            alt=""
          />
        </div>
        <div className="right-info flex col">
          <p>
            Subtle rust stitching against a classic pale grey base, this Jac +
            Jack x Two Good blanket has been made with love in an artesan
            workshop in Jaipur, India, with an extra special feature; for every
            blanket sold, another will be gifted to a {"women's"} shelter. Large
            enough to comfort without being overwhelming, it offers a multitude
            of purposes - draped at the end of your bed or armchair, cuddled up
            on the couch, or wrapped around your shoulders to enjoy the crisp
            outdoors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
