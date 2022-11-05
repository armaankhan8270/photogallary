import React from "react";
import "./Photo.css";
import axios from "axios";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  border,
  borderRadius,
  flexbox,
  height,
  margin,
  width,
} from "@mui/system";

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
    <div
      style={{
        // border: "2px solid black ",
        // opacity:'0.7',

        borderRadius: "2vh",
        // backgroundImage: `url(${Out})`,
        backgroundRepeat: "no-repeat",
        height: "100%",
        backgroundPosition: "center",
        backgroundColor: "whitesmoke",
        backgroundSize: "cover",
        color: "black",
      }}
    >
      <div className="start">
        armaan
        <div className="innerstart">
          armaan
          <div className="inner2start">
            <h1>Armaan Gallary</h1>
            <p>this is our sem 4 mini project</p>

            <div className="d-flex">
              <button onClick={getapi} className="inp1 ">
                <SearchIcon style={{ color: "black", fontSize: "40px" }} />
              </button>
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
                <SearchIcon
                  style={{
                    height: "55px",
                    color: "White",
                    fontSize: "60px",
                    border: "1px solid white",
                    borderRadius: "20px",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{}} className="d-flex flex-wrap">
        {image.map((value, index) => {
          return (
            <div
              style={{
                //  backgroundImage: `url(${Out})`,
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "center",
                // backgroundSize: "cover",
                display: "flex-row",
              }}
              key={index}
            >
              {/* <UrlImageDownloader   imageUrl={value.urls.small} /> */}
              {/* <SearchIcon style={{ color: "black", fontSize: "70px" }} /> */}
              <div class="container shadow-white shadow-md m-2">
                <div
                  style={{
                    width: "450px",
                    height: "400px",
                    borderRadius: "20px",
                  }}
                  className="shadow-md shadow-white "
                >
                  <img
                    src={value.urls.small}
                    className="shadow-md "
                    alt="request is over"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      opacity: "1.0",
                      // boxShadow: "22px 22px 22px ",
                    }}
                  />
                  {/* <DownloadIcon style={{marginLeft:'30%',border:'2px solid black',borderRadius:'20px', color: "black", fontSize: "40px" }} /> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
