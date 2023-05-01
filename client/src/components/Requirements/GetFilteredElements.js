import React from 'react'
import { useState, useEffect } from 'react';
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import ElementContext from '../../Context/Element/ElementContext'
import ElementItem from './ElementItem';
import './getfilter.css'

const GetFilteredElements = () => {
    const context = useContext(ElementContext);
    const { filele, getfiltele } = context;
    const [cate, setcate] = useState("Headphones");
    useEffect(() => {
        getfiltele(cate)
    }, [cate])
    const handlesubmit = () => {
        var e = document.getElementById("category");
        var strUser = e.options[e.selectedIndex].value;
        console.log("clicked")
        console.log(strUser);
        setcate(strUser);
    }
    return (
        <>
            <div>
                <br />
                <select onChange={handlesubmit} name='category' id="category" >
                    <option value="Clothes">Clothes</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Mobiles">Mobiles</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Headphones">Headphones</option>
                    <option value="Food">Food</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Books">Books</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Vehicle">Vehicle</option>
                    <option value="Sports">Sports</option>
                    <option value="Watch">Watch</option>
                    <option value="others">others</option>
                </select>

                <h3>
                    Your Filtered Results
                </h3>
                <div className="container mx-2">
                    {filele.length === 0 && "No Elements to Display 🥺🥺🥺"}
                </div>
                <div className='container'>
                    {filele.map((ele) => {
                        return <ElementItem key={ele._id} element={ele} />
                    })}
                </div>
            </div>
        </>
    )
}


export default GetFilteredElements;