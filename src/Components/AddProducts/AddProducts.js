import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const[imageURL,setImageURL] = useState(null)
    const onSubmit = data =>{

        const productData ={

            name: data.name,
            price: data.price,
            imageURL:imageURL

        };
        const url = `http://localhost:5055/addProduct`;


        console.log(productData)
        fetch(url,{

            method: 'POST',
            headers: { 
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
    }

    const handleImageUpload = event => {

        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'db4bee58890f5c90f2408edbe5b35507')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData
        )
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" placeholder="name" ref={register} />

                <br />
                <input name="price" placeholder="price" ref={register} /> 

                <br/>

                <input name="exampleRequired" type="file" onChange={handleImageUpload} />

                {errors.exampleRequired && <span>This field is required</span>}

                <br />

                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProducts;