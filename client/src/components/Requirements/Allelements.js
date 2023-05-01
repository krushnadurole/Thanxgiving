import React from 'react'
import { useState, useEffect } from 'react';
import { useContext } from 'react'
import ElementContext from '../../Context/Element/ElementContext'
import ElementItem from './ElementItem';
import './Allelements.css'
import { Navigate, useNavigate } from 'react-router-dom';
const Allelements = () => {
    const context = useContext(ElementContext);
    const navigate = useNavigate();
    const { eles, getallelement } = context;
    useEffect(() => {
        if(localStorage.getItem('authtoken')!=null){
            getallelement()
        }else {
            navigate('/login')
        }   
    }, [])
    return (
        <>
            <h2>
                All  Requirements
            </h2>
            <div className="container mx-2">
                {eles.length === 0 && "No Requirements to Display 🥺🥺🥺"}
            </div>
            <div className='container mainn'>
                {eles.map((ele)=>{
                    return <ElementItem key = {ele._id} element={ele} />
                })}
            </div>
        </>
    )
}


export default Allelements;