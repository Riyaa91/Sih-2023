import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleRoof, faBusinessTime, faSignHanging, faPersonHiking, faNotesMedical, faGlobe, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import Logo from '../Navbar/1.jpg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor:"#0c233b"}}>
      <div className="container py-2"> {/* Added justify-content-between */}
      <NavLink className="navbar-brand non-selectable" to="/"><img src={Logo} className="rounded-circle" style={{height:"40px",width:"auto"}}/> LegalHub</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" style={{borderLeft:"1px solid white"}}>
              <NavLink className="nav-link" to="/stationery">
                &nbsp;&nbsp;Family & Personal matters &nbsp;<FontAwesomeIcon icon={faPeopleRoof} />
              </NavLink>
            </li>
            <li className="nav-item" style={{borderLeft:"1px solid white"}}>
              <NavLink className="nav-link" to="/stationery">
                &nbsp;&nbsp;Business &nbsp;<FontAwesomeIcon icon={faBusinessTime} />
              </NavLink>
            </li>
            <li className="nav-item" style={{borderLeft:"1px solid white"}}>
              <NavLink className="nav-link" to="/stationery">
                &nbsp;&nbsp;Real Estate &nbsp;<FontAwesomeIcon icon={faSignHanging} />
              </NavLink>
            </li>
            <li className="nav-item" style={{borderLeft:"1px solid white"}}>
              <NavLink className="nav-link" to="/stationery">
                &nbsp;&nbsp;Estate Planning &nbsp;<FontAwesomeIcon icon={faPersonHiking} />
              </NavLink>
            </li>
            <li className="nav-item" style={{borderLeft:"1px solid white"}}>
              <NavLink className="nav-link" to="/stationery">
                &nbsp;&nbsp;Healthcare &nbsp;<FontAwesomeIcon icon={faNotesMedical} />
              </NavLink>
            </li>
            <li className="nav-item" style={{borderLeft:"1px solid white"}}>
              <NavLink className="nav-link" to="/stationery">
                &nbsp;&nbsp;All Products &nbsp;<FontAwesomeIcon icon={faGlobe} />
              </NavLink>
            </li>
            <li className="nav-item" style={{borderLeft:"1px solid white"}}>
              <NavLink className="nav-link" to="/login">
                &nbsp;&nbsp;Login &nbsp;<FontAwesomeIcon icon={faRightToBracket} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
