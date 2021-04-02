import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {

    const{name,price,_id,imageURL} = props.product;
    // console.log(props)

    const productStyle ={

        border: '1px solid black',
        margin: '5px',
        borderRadius:'5px',
        padding: '2px',
        width:'190px',
        height:'230px'

    }
    const btnStyle={

        marginLeft:'70px'
    }

    return (
        <div style={productStyle} className="productStyle">
            <img src={imageURL} alt=""></img>
            <h3>{name}<br/>{price}</h3>
            

            <Link to={`/checkout/from/${name}`} style={btnStyle}><button>Buy Now</button></Link>

        </div>
    );
};

export default Product;