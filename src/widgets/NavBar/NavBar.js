import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-2" >
            <Link className="navbar-brand ml-5" to={"/"}>Courses</Link>
            {/* <Link className="navbar-brand ml-5" to="/home">Home</Link> */}
            <Link className="navbar-brand ml-5" to="/about">About</Link>
            </nav>
           
        </div>
    )
}

export default NavBar
