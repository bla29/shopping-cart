import { Link } from "react-router";
import Products from "./Products";

function Shop() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
            <h1>Products</h1>
            <Products />
        </>
    )
}

export default Shop;