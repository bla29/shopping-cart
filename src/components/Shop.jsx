import { Link } from "react-router";
import { useState } from "react";
import Products from "./Products";

function Shop() {
    const [cartProducts, setCartProducts] = useState([]);
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart" state={cartProducts}>Cart</Link>
            <h1>Products</h1>
            <Products
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
            />
        </>
    )
}

export default Shop;