import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';


const Checkout = () => {

    const{id}= useParams();
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const [products, setProducts] = useState([]);
    const{productId} = useParams();
    useEffect(() => {

        fetch(`https://tranquil-shelf-05104.herokuapp.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])



    // console.log(data);
   
    
    return (
        <div>
            <h3>Here</h3>

           {
               products.map(pd => <li>{pd.name}</li>)
           }
        </div>
    );
};

export default Checkout;