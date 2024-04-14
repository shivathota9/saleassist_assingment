import { CiBookmark } from "react-icons/ci"
import { MdOutlineCurrencyRupee } from "react-icons/md"
import { TbShoppingBagPlus } from "react-icons/tb"
import { useState, useEffect } from "react";
import axios from 'axios'
import './index.css'

const Products = () => {

    const [ProductDetails, SetProductDetails] = useState([])

    useEffect(() => {
        data()
    }, [])

    const data = async () => {
        try {
            const response = await axios.get("https://my-json-server.typicode.com/shivathota9/tanntrimapi/Productdetails")
            if(response.status === 200){
                SetProductDetails(response?.data)
                console.log(response?.data)
            }
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <div className="Product-container">
            {ProductDetails.map((items, index) => 
                <div key={index} className="Product-card">
                    <div style={{backgroundImage: `url(${items.url})`}} className="card-background">
                        <CiBookmark className="bookmark-icon" />
                    </div>
                    <div className="Card-details">
                        <h1 className="product-name">{items.name}</h1>
                        <div className="price-details-container">
                            <div className="price-details">
                                <MdOutlineCurrencyRupee className="Rupee" />
                                <h1 className="price">{Math.round(items.price * 0.5)}  <span className="actual-price">{items.price}</span> <span className="discount">{`(50% Off)`}</span></h1>
                            </div>
                            <TbShoppingBagPlus className="bag-icon" />
                        </div>
                    </div> 
                </div>
            )}
        </div>

    )

}
export default Products