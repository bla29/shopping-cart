import { Link, useLocation } from "react-router";
import { useState } from "react";
import cartPicture from "../assets/react.svg"
import './Cart.css';

function Cart() {
    const location = useLocation();
    const [cartProducts, setCartProducts] = useState(location.state);

    return (
        <>
            <div className="header">
                <h2>Grand Rapids Fly & Tackle Shop</h2>
                <div className="page-tabs">
                    <Link to="/" className="header-tab">Home</Link>
                    <Link to="/shop" className="header-tab" state={cartProducts}>Shop</Link>
                    <Link to="/cart" className="header-tab">Cart</Link>
                    <h3 className="header-tab">{cartProducts.length}</h3>
                </div>
            </div>
            <h2 className="cart-title">Shopping Cart</h2>
            <div className="cart-body">
                <ol className="cart-items">
                    <li className="cart-item-style">
                        <img src={cartPicture} className="cart-picture"></img>
                        <div className="cart-item-info">
                            <h4>Parachute Adams Fly</h4>
                            <h4 className="item-price">$2.99</h4>
                            <div className="input-style">
                                <input type="number" name="input" value={3}></input>
                                <button>-</button>
                                <button>+</button>
                            </div>
                            <button className="remove-btn">Remove</button>
                        </div>
                    </li>
                    <li className="cart-item-style">
                        <img src={cartPicture} className="cart-picture"></img>
                        <div className="cart-item-info">
                            <h4>Parachute Adams Fly</h4>
                            <h4 className="item-price">$2.99</h4>
                            <div className="input-style">
                                <input type="number" name="input" value={3}></input>
                                <button>-</button>
                                <button>+</button>
                            </div>
                            <button className="remove-btn">Remove</button>
                        </div>
                    </li>
                    <li className="cart-item-style">
                        <img src={cartPicture} className="cart-picture"></img>
                        <div className="cart-item-info">
                            <h4>Parachute Adams Fly</h4>
                            <h4 className="item-price">$2.99</h4>
                            <div className="input-style">
                                <input type="number" name="input" value={3}></input>
                                <button>-</button>
                                <button>+</button>
                            </div>
                            <button className="remove-btn">Remove</button>
                        </div>
                    </li>
                </ol>
                <div className="order-summary-body">
                    <h2 className="order-summary-title">Order Summary</h2>
                    <div className="price-format-text">
                        <h2>Subtotal:</h2>
                        <h2>$100</h2>
                    </div>
                    <div className="price-format-text">
                        <h2>Tax (10%):</h2>
                        <h2>$10</h2>
                    </div>
                    <div className="total-price-section">
                        <h2 className="total-price-text">Total:</h2>
                        <h2 className="total-price-text">$110</h2>
                    </div>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </>
    )
}

export default Cart;