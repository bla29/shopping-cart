import productImage from "../assets/react.svg";
import { useState, useEffect } from 'react';
import './Products.css'

function Products({ cartProducts, setCartProducts }) {
    const [catalogProducts, setCatalogProducts] = useState([]);
    const [inputProducts, setInputProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const promises = [];

            for (let i = 1; i <= 12; i++) {
                promises.push(
                    fetch(`https://fakestoreapi.com/products/${i}`)
                        .then(res => res.json())
                        .then(data => {
                            data.id = data.id - 1;
                            return data;
                        })
                );
            }

            const products = await Promise.all(promises);
            setCatalogProducts(products);
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        console.log(cartProducts);
    }, [cartProducts]);

    function findProductCatalog(key) {
        return catalogProducts.findIndex(product => product.id === key);
    }

    function inputProductCount(key) {
        let counter = 0;
        for (let i = 0; i < inputProducts.length; i++) {
            if (inputProducts[i].id == key) {
                counter++;
            }
        }
        return counter;
    }

    function findInputProduct(key) {
        return inputProducts.findIndex(product => product.id === key);
    }

    function addProduct(key) {
        if (findProductCatalog(key) != -1) {
            let newProduct = catalogProducts[findProductCatalog(key)];
            setInputProducts(prev => [...prev, newProduct]);
        }
    }

    function deleteProduct(key) {
        if (findInputProduct(key) != -1) {
            let newInputArr = [...inputProducts];
            let deleteIndex = findInputProduct(key);
            newInputArr.splice(deleteIndex, 1);
            setInputProducts(newInputArr);
        }
    }

    function setCart() {
        setCartProducts(inputProducts);
    }

    function productsList() {
        return catalogProducts.map((product) => {
            return (
                <div className="item-outline" key={product.id}>
                    <img className="item-photo" src={product.image}></img>
                    <h3 className="item-text">{product.title}</h3>
                    <h3 className="item-text">${product.price}</h3>
                    <div>
                        <input type="number" name="input1" value={inputProductCount(product.id)}></input>
                        <button onClick={() => deleteProduct(product.id)}>-</button>
                        <button onClick={() => addProduct(product.id)}>+</button>
                    </div>
                    <button onClick={() => setCart()}>Add to Cart</button>
                </div>
            )
        })
    }

    return (
        <div className="page-outline">
            {productsList()}
        </div>
    )
}

export default Products;