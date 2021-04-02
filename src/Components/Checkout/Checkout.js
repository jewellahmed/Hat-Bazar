import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Checkout = () => {



    const [products, setProducts] = useState([]);
    
    useEffect(() => {

        fetch('http://localhost:5055/products')
            .then(res => res.json())
        .then(data => {
            setProducts(data)
        })

    }, [products])
    // const currentRide = products.find()
    // console.log(products)
    // const { goods } = useParams();
    // const currentProduct = products.find(products => products.name === goods);
    // console.log(currentProduct)

   
    // console.log(goods);
   
    
    return (
        <div>
            <h3>Here</h3>

           {/* <h3>{currentProduct.name}</h3>
           <h3>{currentProduct.price}</h3> */}
        </div>
    );
};

export default Checkout;