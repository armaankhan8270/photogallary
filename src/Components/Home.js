import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import Out from "../Images/pexels-sangeet-rao-10983361.jpg";
const Home = () => {
  return (
    <div>
      <div
        style={{
          border: "none ",
          borderRadius: "2vh",
          boxShadow: "22px 22px 22px pink  ",
          backgroundImage: `url(${Out})`,
          backgroundRepeat: "no-repeat",
          height: "1000px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // opacity:'0.7',
          color: "black",
        }}
        className="Home d-flex"
      >
        <div className="innerhome font-sans item-center text-white">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text">
            Photo Gallary
          </h1>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text">
            By Armaan Khan{" "}
          </h1>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text">
            And Altamash
          </h1>

          <div className="">
            <button className="">
              <Link className="text-light" to="/Nav">
                Start
              </Link>
              {/* Start <SendIcon style={{ color: "black", fontSize: "75px" }}/> */}
            </button>
          </div>
        </div>
        <div className="img1">
          <img src="./bg21.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
