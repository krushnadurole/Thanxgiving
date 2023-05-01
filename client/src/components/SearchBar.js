import React from 'react'
import { useState, useEffect } from 'react';
import { useContext } from 'react'
import ElementContext from '../Context/Element/ElementContext'
import ElementItem from './ElementItem';
import './Allelements.css'
const Search = () => {
    const context = useContext(ElementContext);
    const { eles, getallelement } = context;
    useEffect(() => {
        getallelement()
    }, [])

    const [searchResult,setSearchResult] = useState([""]);
    const [input,setinput] = useState("");

    const handleSubmit = (e)=>{
       e.preventDefault();
       const result = eles.filter((data) => data.title.toLowerCase().includes(input.toLowerCase()));
       console.log(result);
      }
    return (
        <>
            <h2>
                Your Notes
            </h2>
            <div className="container mx-2">
                {eles.length === 0 && "No Requirements to Display 🥺🥺🥺"}
            </div>
            <div className='container'>
                {eles.map((ele)=>{
                    return <ElementItem key = {ele._id} element={ele} />
                })}
            </div>
            <button onClick={handleSubmit}> Get the Filtered Results</button>
        </>
    )
}


export default  Search;
