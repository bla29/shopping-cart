import { Link, useLocation } from "react-router";
import { useState } from "react";
import Products from "./Products";
import "./Shop.css"

function Shop() {
    const location = useLocation();
    const [cartProducts, setCartProducts] = useState(location.state);
    let header;
    if (cartProducts) {
        header = cartProducts.length > 0 ? '(' + cartNumber() + ')' : '';
    }

    function cartNumber() {
        let count = 0;
        for (let product of cartProducts) {
            count = product.quantity + count;
        }
        return count;
    }

    return (
        <div className="main-section">
            <div className="header">
                <h2>Grand Rapids Fly & Tackle Shop</h2>
                <div className="page-tabs">
                    <Link to="/" className="header-tab" state={cartProducts}>Home</Link>
                    <Link to="/shop" className="header-tab">Shop</Link>
                    <Link to="/cart" className="header-tab" state={cartProducts}>Cart{header}</Link>
                </div>
            </div>
            <h2 className="shop-title">Products</h2>
            <Products
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                cartState={location.state}
            />
        </div>
    )
}

export default Shop;