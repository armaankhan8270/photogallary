import React from "react";
import "./Nav.css";
import axios from "axios";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";

const Nav = () => {
  const [image, setimage] = useState([]);
  const [search, setsearch] = useState([]);
  const api = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=WbHbsT0exIa_rIiZlu2i92iQufzyRmy7eXKMFooTYms`;

  const getapi = () => {
    axios.get(api).then((value) => {
      console.log(value);
      setimage(value.data.results);
    });
  };
  return (
    <div>
      <div className="start">
        armaan
        <div className="innerstart">
          armaan
          <div className="inner2start">
            <h1>Armaan Gallary</h1>
            <p>this is our sem 4 mini project</p>


            <div className="border-1 f12 d-flex">
              {/* <button onClick={getapi} className="inp1 ">
                <SearchIcon style={{ color: "black", fontSize: "px" }} />
              </button> */}
              <input
                type="text"
                name=""
                placeholder="Search"
                className="fs-3 border-0 form-control text-dark"
                id="inp"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
              <button onClick={getapi} className="inp1 ">
                <SearchIcon style={{ color: "black", fontSize: "70px" }} />
              </button>

              </div>
            
            {/* <div className="inp my-5 d-flex">

              <button onClick={getapi} className="inp1 ">
                <SearchIcon style={{ color: "black", fontSize: "55px" }} />
              </button>
             
 <div className="inp">
                <CenterFocusStrongIcon
                  style={{ color: "black", fontSize: "55px" }}
                />
              </div>
              <input
                type="text"
                name=""
                placeholder="Search"
                className="fs-5 text-dark"
                id="inp"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
             

            </div> */}
          </div>
        </div>
      </div>

      
      <div className="row d-flex flex-row">
        {/* {image.map((value, index) => {
        return (
          <div class="container d-flex flex-row ">
          <div key={index} class="card  flex card0 ">
             <img
        src={value.urls.small}
        className="  "
        alt="request is over"
      /> 

            <div class="border">
              <h2>{search}</h2>
              </div>
            </div>
            <div class="card card1">
              <div class="border">
                <h2>Ben Stiller</h2>
              </div>
            </div>
            <div class="card card2">
              <div class="border">
                <h2>Patrick Stewart</h2>
              </div>
            </div>
          </div>
        );
      })} */}

        {image.map((value, index) => {
          return (
            <div className="col-6 my-5   ">
              {/* <div
                className="card box  bg-dark border-0"
                style={{ width: "25rem" }}
              >
                <img
                  src={value.urls.small}
                  className="card-img-top rounded-circle "
                  alt="request is over"
                />

                <a
                  href={value.links.download}
                  class="btn btn-light bg-dark text-light fw-bolder down fs-1 "
                  rel="noreferrer"
                  target="_blank"
                >
                  Download
                </a>
              </div> */}
              <div class="container">
        <div class="card card0">
                {/* <h1 className="text">{search}</h1> */}
          <img
                  src={value.urls.small}
                  className="card-img-top  "
                  alt="request is over"
                />
          <div class="border">
            <div class="icons">
              <i class="fa fa-codepen" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <i class="fa fa-dribbble" aria-hidden="true"></i>
              <i class="fa fa-twitter" aria-hidden="true"></i>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        
            <h2>Link <a href={value.links.download_location}></a>Download</h2>
        
      </div>
            </div>
          );
        })}
      </div>

      
    </div>
  );
};

export default Nav;
