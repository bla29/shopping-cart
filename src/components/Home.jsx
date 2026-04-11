import { Link } from "react-router";
import "./Home.css";
import homePhoto from "../assets/homePhoto.jpg"

function Home() {
    return (
        <div className="home-body">
            <div className="header">
                <h1>Grand Rapids Fly & Tackle Shop</h1>
                <div className="page-tabs">
                    <Link to="/" className="header-tab">Home</Link>
                    <Link to="/shop" className="header-tab">Shop</Link>
                    <Link to="/cart" className="header-tab">Cart</Link>
                </div>
            </div>
            <div className="main-section">
                <img src={homePhoto} className="cover-photo"></img>
                <h2>Pursue your passion.</h2>
                <Link to="/shop" className="shop-link-btn">Shop supplies</Link>
            </div>
        </div>
    )
}

export default Home;