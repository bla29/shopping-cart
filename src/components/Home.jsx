import { Link } from "react-router";

function Home() {
    return (
        <>
            <h1>Grand Rapids Fly & Tackle Shop</h1>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
            <Link to="cart">Cart</Link>
        </>
    )
}

export default Home;