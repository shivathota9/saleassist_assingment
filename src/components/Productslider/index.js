import React, { useState, useEffect } from "react";
import { LuShare } from "react-icons/lu";
import { BsDot } from "react-icons/bs";
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './index.css';

const Productslider = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/shivathota9/tanntrimapi/productslist")
            .then(function (response) {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(function (error) {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to ensure the effect runs only once

    const settings = {
        dots: false,
        slidesToScroll: 1,
        infinite: false,
        slidesToShow: 7.9,
        centerPadding: '10px',
        prevArrow: <></>,
        nextArrow: <></>, 
      }

    return (
        <>
            <div className="maincontainer">
                <Slider {...settings}>
                    {products.map(item => 
                        <div className="baglist-container" key={item.id}>
                            <img src={item.url} className="bag-img" alt={item.name} />
                            <p className="bag-name">{item.name}</p>
                        </div>
                    )}
                </Slider>
            </div>

            <div className="details-container">
                <h1 className="backpacks-heading">Bags 
                    <span className="center-icon">
                        <BsDot className="span" />
                    </span> 
                    Backpacks
                </h1>
                <div className="backpacks-products">
                    <h1 className="products-heading">{products.length} products</h1>
                    <LuShare size="20" color="#E5DFD9" />
                </div>
            </div>
        </>
    );
}

export default Productslider;
