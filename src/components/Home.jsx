import { Link, useLocation } from "react-router";
import { useState } from "react";
import "./Home.css";
import homePhoto from "../assets/homePhoto.jpg"

function Home() {
    const location = useLocation();
    const [cartProducts, setCartProducts] = useState(location.state);
    const header = cartProducts ? cartProducts.length : '';

    return (
        <div className="home-body">
            <div className="header">
                <h1>Grand Rapids Fly & Tackle Shop</h1>
                <div className="page-tabs">
                    <Link to="/" className="header-tab">Home</Link>
                    <Link to="/shop" className="header-tab" state={cartProducts}>Shop</Link>
                    <Link to="/cart" className="header-tab" state={cartProducts}>Cart</Link>
                    <h3 className="header-tab">{header}</h3>
                </div>
            </div>
            <div className="main-section">
                <img src={homePhoto} className="cover-photo"></img>
                <h2>Pursue your passion.</h2>
                <Link to="/shop" className="shop-link-btn" state={cartProducts}>Shop supplies</Link>
            </div>
        </div>
    )
}

export default Home;