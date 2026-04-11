import { Link, useLocation } from "react-router";
import { useState } from "react";
import './Cart.css';

function Cart() {
    const location = useLocation();
    const [cartProducts, setCartProducts] = useState(location.state);

    return (
        <>
            <div className="header">
                <h2>Grand Rapids Fly & Tackle Shop</h2>
                <div className="page-tabs">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart">Cart</Link>
                </div>
            </div>
            <h2 className="cart-title">Shopping Cart</h2>
            <div className="cart-body">
                <ol>
                    <li>cart item</li>
                    <li>cart item</li>
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