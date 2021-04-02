import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {

   
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('https://tranquil-shelf-05104.herokuapp.com/products')
            .then(res => res.json())
            .then(products => setProducts(products))

    }, [])


    const homeStyle = {

        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gridGap:"irem"

    }




    return (
        <div>
             
                
            
            <div style={homeStyle}>
            {
                products.map(product => <Product product={product}></Product>)

            }
           
            </div>
             




        </div>
    );
};

export default Home;