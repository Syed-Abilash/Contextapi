import React, { useContext, useState } from "react";
import { cartContext } from "../App";
import { Link } from "react-router-dom";
const CartPage = () => {
  const { cart, setCart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  
  const removeItems = (id) => {
    setCart(cart.filter((item) => item.id !== id));
 }

  const totalPrice = cart.reduce(
    (total, cart) => total + cart.price * (cart.quantity || 1),
    0
  );

  const totalQuantity = cart.reduce(
    (total, cart) => total + (cart.quantity || 1),
    0
  );
  const handleIncrease = (id, quantity) => {
    setCart((pData) => {
      return pData.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 || quantity + 1 };
        }
        return item;
      });
    });
  };
  const handleDecrease = (id, quantity) => {
    setCart((pData) => {
      return pData.map((item) => {
        if (item.id === id && (item.quantity || quantity) > 0) {
          return { ...item, quantity: item.quantity - 1 || quantity - 1 };
        }
        return item;
      });
    });
  };
  return (
    <div>
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cart.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <div className="container">
                    <div
                      className="col container"
                      style={{
                        boxShadow:
                          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
                      }}
                    >
                      <div className="card h-100">
                        <div className="card-body">
                          <h4
                            className="card-title"
                            style={{
                              textAlign: "center",
                              color: "black",
                              fontFamily: "serif",
                            }}
                          >
                            {item.title}
                          </h4>

                          <p
                            className="card-text"
                            style={{ textAlign: "center" }}
                          >
                            {item.description}
                          </p>
                          <div style={{ textAlign: "center" }}>
                            <button
                              style={{
                                backgroundColor: "white",
                                border: "none",
                                display: "inline",
                                alignItems: "center",
                                marginRight: "10px",
                              }}
                              onClick={() =>
                                handleIncrease(item.id, item.quantity || 1)
                              }
                            >
                              +
                            </button>
                            {item.quantity || 1}
                            <button
                              style={{
                                backgroundColor: "white",
                                border: "none",
                                display: "inline",
                                alignItems: "center",
                                marginLeft: "10px",
                              }}
                              onClick={() =>
                                handleDecrease(item.id, item.quantity || 0)
                              }
                            >
                              -
                            </button>
                            <img
                              src={item.images}
                              className="card-img-top"
                            //   width={"30px"}
                            //   height={"350px"}
                              style={{ marginTop: "20px" }}
                            />
                            <h6 style={{ textAlign: "center", color: "red" }}>
                                <br />
                            {`Rs: ${item.price}`}
                          </h6>
                            <button
                              onClick={() => {
                                removeItems(item.id);
                              }}
                              style={{
                                color: "white",
                                backgroundColor: "red",
                                border: "none",
                                borderRadius: "5px",
                                padding: "5px 10px",
                                marginTop:"20px"
                              }}
                            >
                              Remove From Cart
                            </button>
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      ;{/* Total price page */}
      <h2
        style={{ textAlign: "center", fontWeight: "bold", marginTop: "10px" }}
      >
        <i> Total Price Rs: {totalPrice}</i>{" "}
        <div>
          <div>
            <button
              type="button"
              class="btn text-info-emphasis"
              style={{ marginTop: "25px" }}
            >
              Total Quantity: {totalQuantity}
            </button>
          </div>
        </div>
        <br />
        <button
          type="button"
          class="btn btn-dark"
          style={{ marginTop: "25px" }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Continue Shopping
          </Link>
        </button>
      </h2>
    </div>
  );
};

export default CartPage;