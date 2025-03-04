// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
export class Navbar extends Component {
  //   static propTypes = {}


  render() {  
    return (
      <>
        {/* <nav className="navbar fixed-top navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/">NewsMonkey</Link >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-white" aria-current="page" to="/">Home</Link >
                </li>
                <li className="nav-item"><Link className="nav-link text-white" to="/bussiness">Bussiness</Link ></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/Entertainment">Entertainment</Link ></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/general">General</Link ></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/health">Health</Link ></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/science">Science</Link ></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/sports">Sports</Link ></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/technology">Technology</Link ></li>
              </ul>
            </div>
          </div>
        </nav> */}


        <nav className="navbar fixed-top navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/">NewsMonkey</Link>
            <button className="navbar-toggler border  bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel" to="/">NewsMonkey</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 gap-5 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/business">Business</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/Entertainment">Entertainment</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/general">General</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/Health">Health</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/Science">Science</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/Sports">Sports</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/Technology">Technology</Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar