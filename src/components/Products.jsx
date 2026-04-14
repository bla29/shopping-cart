import productImage from "../assets/react.svg";
import { useState, useEffect } from 'react';
import './Products.css'

function Products({ cartProducts, setCartProducts, cartState }) {
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
        if (cartState) {
            setInputProducts(cartState);
        }
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
                if (inputProducts[i].quantity) {
                    counter = 0;
                    counter += inputProducts[i].quantity;
                } else {
                    counter++;
                }
            }
        }
        return counter;
    }

    function findInputProduct(key) {
        return inputProducts.findIndex(product => product.id === key);
    }

    function addProduct(key) {
        if (findInputProduct(key) == -1 || !inputProducts[findInputProduct(key)].quantity) {
            let newProduct = catalogProducts[findProductCatalog(key)];
            setInputProducts(prev => [...prev, newProduct]);
        } else {
            let tempArr = [...inputProducts];

            let tempArrIndex = tempArr.findIndex(product => product.id == key);
            tempArr[tempArrIndex].quantity++;

            setInputProducts(tempArr);
        }
    }

    function deleteProduct(key) {
        if (inputProducts[findInputProduct(key)].quantity) {
            let tempArr = [...inputProducts];

            let tempArrIndex = tempArr.findIndex(product => product.id == key);
            tempArr[tempArrIndex].quantity--;

            if (tempArr[tempArrIndex].quantity == 0) {
                tempArr.splice(tempArrIndex, 1)
            }

            setInputProducts(tempArr);
        } else {
            let newInputArr = [...inputProducts];
            let deleteIndex = findInputProduct(key);
            newInputArr.splice(deleteIndex, 1);
            setInputProducts(newInputArr);
        }
    }

    function setCart() {
        const grouped = groupProducts(inputProducts);
        console.log(grouped)
        setCartProducts(grouped);
    }

    function groupProducts(products) {
        const map = {};

        products.forEach((product) => {
            if (!map[product.id]) {
                map[product.id] = {
                    ...product,
                    quantity: 1,
                };
            } else {
                map[product.id].quantity += 1;
            }
        });

        return Object.values(map);
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