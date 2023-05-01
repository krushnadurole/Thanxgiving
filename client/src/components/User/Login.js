import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ElementContext from '../../Context/Element/ElementContext'
import './Login.css'
const Login = () => {

    const context = useContext(ElementContext);
    const { login,setlogin } = context;

    const [credientials, setcredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const [flag,setflag] = useState(true);

    const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://thanks.onrender.com/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credientials.email, password: credientials.password })
        })
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('authtoken', json.authtoken);
            setlogin(true);
            navigate('/allele'); 
            setflag(false);
        }
    }
    const onchange = (e) => {
        setcredentials({ ...credientials, [e.target.name]: e.target.value });
    }
    return (
        <>
            {
                flag && 
                <div className="container mt-3 login">
                <p className='mb-3 main'>Log In to Givers</p>
                <form onSubmit={handlesubmit}>
                    <div className="form-floating mb-3">
                        <label htmlFor="email">Email address</label>
                        <br></br>
                        <br></br>
                        <input type="email" className="form-control" id="email" name='email' value={credientials.email} onChange={onchange} placeholder="" required />
                    </div>
                    <div className="form-floating">
                        <label htmlFor="password">Password</label>
                        <br></br>
                        <br></br>
                        <input type="password" className="form-control" id="password" value={credientials.password} onChange={onchange} name='password' placeholder="" required />
                    </div>
                    <button type="submit" className="btn btn-primary my-5 sub" >Submit</button>
                </form>
            </div>
            }
        </>
    )
}

export default Login