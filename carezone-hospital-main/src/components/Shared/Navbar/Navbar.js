import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/favicon.png'
const Navbar = () => {
    const { logOut, user } = useAuth();
    console.log(user);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="d-flex">
                        <Link to="/home">
                        <img src={logo} style={{ height: '80px', width: '80px' }} alt="" />
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">

                            <Link to="/home" className="nav-link">Home</Link>
                            <Link to="/service" className="nav-link">About us</Link>
                            <Link to="/Our-Doctors" className="nav-link">Our Doctors</Link>
                            <Link to="/Booking-appointment" className="nav-link">Booking Appointment</Link>

                            <Link to="/contact" className="nav-link">Contact</Link>
                            {user.email ?
                                <Link to="/login">
                                    <button onClick={logOut} className="btn btn-warning me-2" >Log-out</button>
                                </Link>
                                :
                                <Link to="/login">
                                    <button className="btn btn-warning me-2" >Log In</button>
                                </Link>

                            }
                            <nav>
                                <div className=" ">
                                {user.email && <span style={{ color: 'black' }}>Logged In as: {user.displayName} </span>}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;