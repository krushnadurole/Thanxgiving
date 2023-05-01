import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import ElementContext from '../Context/Element/ElementContext'

import "./Navbar.css"
const Navbar = () => {
    const context = useContext(ElementContext);
    const { login,setlogin } = context;
    return (
        <>
            <nav class="navbar navbar-dark bg-dark">
                <div class="">
                    <h1 style={{ 'color': "white" ,"text-align":"center"}}>Givers</h1>
                    <ul >
                        {!login ?
                            <>
                                <Link className="btn btn-primary mx-1 button" to="/login" role="button">Login</Link>
                                <Link className="btn btn-primary mx-1 button" to="/signup" role="button">Sign Up</Link>
                            </>
                            :
                            <>
                                <Link className="btn btn-primary mx-1 button" to="/" role="button">DashBoard</Link>
                                <Link className="btn btn-primary mx-1 button" to="/allele" role="button">All Requirement</Link>
                                <Link className="btn btn-primary mx-1 button" to="/addreq" role="button">Add Requirement</Link>
                                <Link className="btn btn-primary mx-1 button" to="/getfiltered" role="button">Filtered</Link>
                            </>
                        }

                    </ul>
                    <form class="d-flex">

                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar



/*
 <ul >
                        {!localStorage.getItem('authtoken') ?
                            <>
                                <Link className="btn btn-primary mx-1 button" to="/login" role="button">Login</Link>
                                <Link className="btn btn-primary mx-1 button" to="/signup" role="button">Sign Up</Link>
                            </>
                            :
                            <>
                                <Link className="btn btn-primary mx-1 button" to="/" role="button">DashBoard</Link>
                                <Link className="btn btn-primary mx-1 button" to="/allele" role="button">All Requirement</Link>
                                <Link className="btn btn-primary mx-1 button" to="/addreq" role="button">Add Requirement</Link>
                                <Link className="btn btn-primary mx-1 button" to="/getfiltered" role="button">Filtered</Link>
                            </>
                        }

                    </ul>

*/