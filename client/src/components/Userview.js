import React, { useContext, useState } from 'react'
import ElementContext from '../Context/Element/ElementContext'

const Userview = (props) => {
  const context = useContext(ElementContext);
  const { addelement } = context;

  const [element, setelement] = useState({ name: '', description: '', category: '', Giver: '' });
  const handleclick = (e) => {
    addelement(element.name, element.description, element.category, element.Giver);
    setelement({ name: "", descriptino: "", category: "", element: "" });

  }
  const onchange = (e) => {
    setelement({ ...element, [e.target.name]: e.target.value });
  }
  return (
    <>
      <h1>Add a Element</h1>
      <h1>{context.name}</h1>
      {/* <h1>{state.name}</h1> */}
      <form>
        {/* <h1>{state.name}</h1> */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label" >Title</label>
          <input type="text" className="form-control" minLength={3} required id="name" name="name" value={element.name} aria-describedby="emailHelp" onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label"  >Description</label>
          <input type="text" className="form-control" minLength={10} required id="description" name="description"value={element.description} onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label"  >Givers</label>
          <input type="text" className="form-control" id="Giver" name="Giver" value={element.Giver} onChange={onchange} />
        </div>
        <div>
          <select name='category' id="category" value={element.category} onChange={onchange}>
            <option value="Electronics">Electronics</option>
            <option value="Cameras"></option>
            <option value="Accessories">Accessories</option>
            <option value="Laptops">Laptops</option>
            <option value="Headphones">Headphones</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleclick}>Add a Note</button>
      </form>
    </>
  )
}

export default Userview

