import { Link } from "react-router";

function Shop() {
    return (
        <>
            <h1>Products</h1>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
        </>
    )
}

export default Shop;