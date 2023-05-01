import React from "react";
import { useState } from "react";
// const host = "http://localhost:5000"
import ElementContext from '../Element/ElementContext'

const Elementstate = (props) => {
  // const host = "http://localhost:5000"
  const intialState = []
  
  const [eles, seteles] = useState(intialState)
  const [login,setlogin] = useState(false);
  const [user,setuser] = useState("");

  const addelement = async (title, description,category,email) => {
    const response = await fetch("https://thanks.onrender.com/api/v1/addelement", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('authtoken')

      },
      body: JSON.stringify({ title, description ,category,email})
    });
    const json  = await response.json();
    console.log(json);
    console.log("Adding a Note")
    seteles(eles.concat(json))
  } 
  
  // Add Note
  const getallelement = async()=>{
    const response = await fetch("https://thanks.onrender.com/api/v1/getelements",{
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('authtoken')
    }
    });
    const json = await response.json();
    seteles(json);
    console.log("all eleements state is working fine.")
    console.log(json);
  }
  const [filele,setfilele] = useState([]);

  const getfiltele = async(title)=>{
    const response = await fetch(`https://thanks.onrender.com/api/v1/getfiltered/${title}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('authtoken')

      }
    });
    const json = await response.json();
    setfilele(json);
    console.log("Elementstate-got the filtered elements");
  }

  const deleteelement = async (id) => {
    const response = await fetch(`https://thanks.onrender.com/api/v1/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('authtoken')
      },
    });
    const json = await response.json();
    console.log(json);
    const newele = eles.filter((ele) => { return ele._id !== id });
    seteles(newele)
  }


  const updateelement = async (id,title, description,category,Giver,email) => {
    const response = await fetch(`https://thanks.onrender.com/api/v1/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authtoken': localStorage.getItem('authtoken')
      },

      body: JSON.stringify({ title, description,category,Giver,email })
    });

    const json = await response.json();
    let neweles = JSON.parse(JSON.stringify(eles))

    for (let index = 0; index < neweles.length; index++) {
      const element = neweles[index];
      if (element._id === id) {
        neweles[index].title = title;
        neweles[index].description = description;
        break;
      }
    }
    seteles(neweles)
  }


  const getuserinfo = async()=>{
    const response = await fetch('https://thanks.onrender.com/api/auth/getuser',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'authtoken':localStorage.getItem('authtoken')
      }
    });
    const json = await response.json();
    console.log(json);
    setuser(json);
  }

  return (
    <ElementContext.Provider value={{login,setlogin,eles,addelement,getallelement,seteles,getfiltele,setfilele,filele,updateelement,deleteelement,getuserinfo}}>
      {props.children}
    </ElementContext.Provider>
  )

}
export default Elementstate
