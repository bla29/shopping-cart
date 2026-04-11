import { Link } from "react-router";
import { useState } from "react";
import Products from "./Products";
import "./Shop.css"

function Shop() {
    const [cartProducts, setCartProducts] = useState([]);
    return (
        <>
            <div className="header">
                <h2>Grand Rapids Fly & Tackle Shop</h2>
                <div className="page-tabs">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart" state={cartProducts}>Cart</Link>
                </div>
            </div>
            <h2 className="shop-title">Products</h2>
            <Products
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
            />
        </>
    )
}

export default Shop;