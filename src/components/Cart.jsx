import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import cartPicture from "../assets/react.svg"
import './Cart.css';

function Cart() {
    const location = useLocation();
    const [cartProducts, setCartProducts] = useState(location.state);
    const header = cartProducts.length > 0 ? '(' + cartNumber() + ')' : '';

    let tax = subTotal() * 0.10;
    tax = Math.round((tax + Number.EPSILON) * 100) / 100
    let total = subTotal() + tax;
    total = total.toFixed(2);

    function cartNumber() {
        let count = 0;
        for (let product of cartProducts) {
            count = product.quantity + count;
        }
        return count;
    }


    function addProduct(key) {
        let tempArr = [...cartProducts];

        let tempArrIndex = tempArr.findIndex(product => product.id == key);
        tempArr[tempArrIndex].quantity++;

        setCartProducts(tempArr);
    }

    function deleteProduct(key) {
        let tempArr = [...cartProducts];

        let tempArrIndex = tempArr.findIndex(product => product.id == key);
        tempArr[tempArrIndex].quantity--;

        if (tempArr[tempArrIndex].quantity == 0) {
            tempArr.splice(tempArrIndex, 1)
        }

        setCartProducts(tempArr);
    }

    function deleteAllProduct(key) {
        let tempArr = [...cartProducts];
        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i].id == key) {
                tempArr.splice(i, 1);
            }
        }
        setCartProducts(tempArr);
    }

    function subTotal() {
        let total = 0;
        for (let product of cartProducts) {
            let itemPrice = product.price * product.quantity;
            total += itemPrice;
        }

        total = Math.round((total + Number.EPSILON) * 100) / 100
        return total;
    }

    function productsList() {
        return cartProducts.map((product) => {
            return (
                <li className="cart-item-style" key={product.id}>
                    <img src={product.image} className="cart-picture"></img>
                    <div className="cart-item-info">
                        <h4>{product.title}</h4>
                        <h4 className="item-price">${product.price * product.quantity}</h4>
                        <div className="input-style">
                            <input type="number" name="input" value={product.quantity}></input>
                            <button onClick={() => deleteProduct(product.id)}>-</button>
                            <button onClick={() => addProduct(product.id)}>+</button>
                        </div>
                        <button className="remove-btn" onClick={() => deleteAllProduct(product.id)}>Remove</button>
                    </div>
                </li>
            )
        })
    }

    return (
        <div className="main-section">
            <div className="header">
                <h2>Grand Rapids Fly & Tackle Shop</h2>
                <div className="page-tabs">
                    <Link to="/" className="header-tab" state={cartProducts}>Home</Link>
                    <Link to="/shop" className="header-tab" state={cartProducts}>Shop</Link>
                    <Link to="/cart" className="header-tab">Cart{header}</Link>
                </div>
            </div>
            <h2 className="cart-title">Shopping Cart</h2>
            <div className="cart-body">
                <ol className="cart-items">
                    {productsList()}
                </ol>
                <div className="order-summary-body">
                    <h2 className="order-summary-title">Order Summary</h2>
                    <div className="price-format-text">
                        <h2>Subtotal:</h2>
                        <h2>${subTotal()}</h2>
                    </div>
                    <div className="price-format-text">
                        <h2>Tax (10%):</h2>
                        <h2>${tax}</h2>
                    </div>
                    <div className="total-price-section">
                        <h2 className="total-price-text">Total:</h2>
                        <h2 className="total-price-text">${total}</h2>
                    </div>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;