
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
  let navigate = useNavigate();
  const [credientials, setcredientials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credientials;
    const response = await fetch('https://thanks.onrender.com/api/v1/creategiver', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);

    // save the token and redirect. 
    if (json.success) {
      localStorage.setItem('authtoken', json.Authtoken);
      navigate("/login");
    }

  }
  const onchange = (e) => {
    setcredientials({ ...credientials, [e.target.name]: e.target.value })
  }
  return (
    <>
    <div className='signuppage'>
    <h3>SignUp with Givers</h3>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' id="name" onChange={onchange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" onChange={onchange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' id="password" minLength={5} onChange={onchange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name='cpassword' id="cpassword" minLength={5} onChange={onchange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </>
  )
}

export default SignUp