import React, { useContext, useState } from 'react'
import ElementContext from '../../Context/Element/ElementContext'
import './AddReq.css'

// component to add the requirmenets. 

const AddRequirement = () => {

  const context = useContext(ElementContext);
  const [req, setreq] = useState({ title: "", description: "", category: "",user:"",email:"" })
  const { addelement } = context;
  const handleclick = (e) => {
    e.preventDefault();
    addelement(req.title, req.description, req.category,req.user,req.email);
    setreq({ title: "", description: "", category: "",user:"",email:"" });
  }
  const onchange = (e) => {
    setreq({ ...req, [e.target.name]: e.target.value });
  }

  return (
    <div className='container'>
      <div>
        <div className='my-3 f'>
          <h1>Add Your Requirement</h1>
          <form className='my-3 f'>
            <div className="my-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={req.title} onChange={onchange} minLength={5} required />
            </div>

            <div className="my-3">
              <label htmlFor="description" className="form-label">description</label>
              <input type="text" className="form-control" id="description" name='description' value={req.description} onChange={onchange} minLength={5} required />
            </div>

    

            <div className="my-3">
              <label htmlFor="description" className="form-label">Email</label>
              <input type="text" className="form-control" id="email" name='email' value={req.email} onChange={onchange} minLength={5} required />
            </div>

            <br />
            <label htmlFor="category">Choose Category :   &nbsp;&nbsp;     </label>
            {/* <select name='category' id="category" value={req.category} onchange={onchange}  required> */}
            <select name='category' id="category" value={req.category} onChange={onchange}>
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
            {/* <button onClick={handleclick}>Add My reqeloper Profile</button> */}
            <br />
            <br />
            <button type="button" onClick={handleclick} class="btn btn-outline-success">Submit</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default AddRequirement