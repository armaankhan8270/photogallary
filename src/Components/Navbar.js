import React from 'react'
import './Navbar.css'

import HomeIcon from '@mui/icons-material/Home';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

        <div className="mnavs">
    <nav className="navbar bgnav navbar-expand-lg  rounded-pill   navbar-light ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link class="navbar-brand fw-bold" to="/Nav"><CollectionsBookmarkIcon style={{ color: "black", fontSize: "55px" }}/>PHOTOHUB </Link>
      <ul class="navbar-nav naval me-auto mb-2 mb-lg-0">
        
        <li class="  my-mar nav-item">
          <Link class="nav-link active" to="/Home"><HomeIcon style={{ color: "black", fontSize: "55px" }}/>Home</Link>
        </li>
        <li class=" nav-item">
          <Link class="nav-link active" to="/Contact"> <ContactsIcon style={{ color: "black", fontSize: "55px" }}/>Contact</Link>
        </li>
        <li class=" nav-item">
          <Link class="nav-link active" to="/About"><InfoIcon style={{ color: "black", fontSize: "55px" }}/>About</Link>
        </li>
        <li class=" nav-item">
          <Link class="nav-link active" to="/Ma"><InfoIcon style={{ color: "black", fontSize: "55px" }}/>Start</Link>
        </li>
        <li class=" nav-item">
          {/* <Link class="nav-link active ">ABOUT</Link> */}
        </li>
        <li class=" nav-item ">
          {/* <Link class="nav-link active ">CONTACT</Link> */}
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    </div>

  
    </div>
  )
}

export default Navbar