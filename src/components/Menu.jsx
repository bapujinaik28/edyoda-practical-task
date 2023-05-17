import React from "react";
import { NavLink } from "react-router-dom";

function Menu(props){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-white">
            <div className="container">
                <NavLink to={'/'} className = "navbar-brand"><img src="./images/EDYODA.jpg" alt="" /></NavLink>

                <button className="navbar-toggler" data-bs-toggle = "collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon bg-dark"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="menu">
                    <ul className="navbar-nav align-item-center gap-2">
                        <li className="nav-item d-flex">
                            <NavLink to={'/'} className = "nav-link text-dark pt-2"><h6>Courses</h6></NavLink>
                            <select name="courses" id="courses" className="border-0"></select>
                        </li>
                        <li className="nav-item d-flex">
                            <NavLink to={'/'} className = "nav-link text-dark  pt-2"><h6>Programs</h6></NavLink>
                            <select name="courses" id="courses" className="border-0"></select>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <i className="bi bi-search"></i>
                        <NavLink to={'/'} className = "nav-link text-dark me-5 pt-2"><h6>Login</h6></NavLink>
                        <button className="nav-link badge text-bg-primary border-0 rounded-pill p-2 px-4 mt-2">JOIN NOW</button>
                    </div>
                   
                </div>
            </div>

        </nav>
    )
}
export default Menu