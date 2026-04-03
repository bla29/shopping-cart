import { Link } from "react-router";

function Cart() {
    return (
        <>
            <h1>Check Out</h1>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
        </>
    )
}

export default Cart;