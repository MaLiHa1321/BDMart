import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";

const Offer = () => {
    const [offer, setOffer] = useState([]);

    useEffect(() => {
        fetch('offer.json')
        .then(res => res.json())
        .then(data => setOffer(data))
        .catch(error => console.error('Error fetching offer data:', error));
    }, []);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="bg-white">
            <div className="text-center">
                <h2>~~ Special Product ~~</h2>
                <h2>Weekly Offers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eius.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 w-10/12 mx-auto mt-5">
                {offer?.map((product, idx) => (
                    <div
                        key={idx}
                        className="border-2 border-black rounded relative"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img src={product?.image} alt="" className="w-[200px] h-[200px] bg-white mx-auto" />
                        <h2>{product?.name}</h2>
                        <h2>{product?.price}</h2>
                        <h2>{product?.rating}</h2>
                        {hoveredIndex === idx && (
                            <div className="absolute top-0 right-0 p-2 bg-pink-400">
                                <button><BsCart4></BsCart4></button> <br /> <hr />
                                <button><AiFillHeart></AiFillHeart></button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offer;
