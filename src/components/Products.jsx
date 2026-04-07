import productImage from "../assets/react.svg";
import { useState, useEffect } from 'react';
import './Products.css'

function Products() {
    const [cartProducts, setCartProducts] = useState([]);
    const [catalogProducts, setCatalogProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const promises = [];

            for (let i = 1; i <= 12; i++) {
                promises.push(
                    fetch(`https://fakestoreapi.com/products/${i}`)
                        .then(res => res.json())
                );
            }

            const products = await Promise.all(promises);
            setCatalogProducts(products);
        };

        fetchProducts();
    }, []);

    //add selected product to cartProducts array as an object
    function addProduct() {

    }

    //delete selected product object from cartProducts array
    function deleteProduct() {

    }

    function productsList() {
        return catalogProducts.map((product) => {
            return (
                <div className="item-outline" key={product.id}>
                    <img className="item-photo" src={product.image}></img>
                    <h3>{product.title}</h3>
                    <h3>${product.price}</h3>
                    <div>
                        <input type="number" name="input1" value={1}></input>
                        <button>-</button>
                        <button>+</button>
                    </div>
                    <button>Add to Cart</button>
                </div>
            )
        })
    }

    return (
        <>
            {productsList()}
        </>
    )
}

export default Products;