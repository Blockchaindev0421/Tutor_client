import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png';
const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid w-75">
                    <a class="navbar-brand" href="#">
                        <img src={logo} style={{maxWidth: "50px"}} alt=""/>
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav mb-2 mb-lg-0 w-75 justify-content-around">
                            <li class="nav-item">
                                <Link to="/" className="nav-link active">
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Features
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Courses
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Contact
                                </a>
                            </li>
                            <li class="nav-item">
                                <Link to="/dashboard" className="nav-link active">
                                    Dashboard
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login">
                                    <button className="btn btn-brand">Login</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
