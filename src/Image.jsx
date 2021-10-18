import React, { useState } from 'react';
import './images.scss';
import { FaHeart } from "react-icons/fa";


const Image = ({ server, id, secret, onClick, liked}) => {

    const [display, setDisplay] = useState(liked ? "Displayed" : "NotDisplayed");

    const toggleHeart = () => {
        liked  ? setDisplay("NotDisplayed") : setDisplay("Displayed")
    }
    return (
        <div onClick={onClick} className="Image">
            <img  className="Image" src={`https://live.staticflickr.com/${server}/${id}_${secret}_z.jpg`} alt="" />

            <FaHeart className={liked ? "Displayed" : "NotDisplayed"}/>
        </div>
    )
};

export default Image;
 