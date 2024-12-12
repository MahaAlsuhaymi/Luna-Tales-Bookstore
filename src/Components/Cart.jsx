import { useContext } from "react";
import BookStoreContext from "../Context/BookStoreContext";
import MainLayout from "../Layouts/MainLayout";
import { Link} from "react-router-dom";

const Cart = () => {
    const { cartInfo, removeFromCart, addToCart } = useContext(BookStoreContext);

  return (
    <>
    <MainLayout>
    <div className="cart mt-5">
      <h1 className="cart-title mt-3">Your Shopping Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartInfo.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-img"
              />
              <div className="cart-item-info">
                <div>
                  <div className="cart-item-book-title text-start">
                    <b>Title: </b>
                    {item.title}
                  </div>
                  <div className="cart-item-author text-start">
                    <b>Author: </b>
                    {item.author}
                  </div>
                </div>
                <div>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => addToCart(item, 1)}
                      className="bi bi-plus-lg"
                    ></button>
                    <b>{item.quantity}</b>
                    <button
                      disabled={item.quantity <= 1}
                      onClick={() => addToCart(item, - 1)}
                      className="bi bi-dash-lg"></button>
                  </div>
                  <div className="cart-item-price">
                    ${(item.price * parseInt(item.quantity)).toFixed(2)}
                  </div>
                  <i
                    onClick={() => removeFromCart(item.id)}
                    className="bi bi-trash-fill"
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-order-summary">
          <h5 className="order-summary-title">ORDER SUMMARY</h5>
          <div className="order-summary-item">
            <span>Subtotal</span>
            <span>
              $
              {cartInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
          </div>
          <div className="order-summary-item">
            <span>Shipping Cost</span>
            <span>$20</span>
          </div>
          <div className="order-summary-item">
            <span>Discount</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <strong>Total</strong>
            <span>
              $
              {cartInfo.reduce((acc, cur) => 20 + acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
          </div>
          <Link to={`/checkout?total=${(cartInfo.reduce((acc, cur) => 20 + acc + cur.price * cur.quantity, 0)).toFixed(2)}`}>
          <button className="btn btn-outline-dark flex-shrink-0 btn-lg mb-2" id="addbutton" type="button">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
            </MainLayout>
        </>
    );
}

export default Cart;