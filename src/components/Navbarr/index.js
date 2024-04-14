import {IoIosSearch} from "react-icons/io"
import {CiBookmark} from "react-icons/ci"
import {CiUser} from "react-icons/ci"
import {AiOutlineShopping} from "react-icons/ai"
import "./index.css"


const Navbarr = () => {
    return(
        <div className="headercontainer">
            <div className="header1">
                <h1 className="tanntrim">TANN TRIM</h1>
                <div className="icons">
                    <IoIosSearch />
                    <CiUser/>
                    <CiBookmark/>
                    <AiOutlineShopping/>
                </div>
            </div>
            <ul className="header2">
             <li>Bags</li>
             <li>Travel</li>
             <li>Accesories</li>
             <li>Gifting</li>
             <li>Jewellery</li>
            </ul>
        </div>
    )
}
export default Navbarr