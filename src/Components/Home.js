import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="Home d-flex">
        home
        <div className="innerhome">
          <h1 className="display-1 fw-bolder heading">Photo Gallary</h1>
          <h1 className="display-4 fw-bolder heading1">By Armaan Khan </h1>
          <h1 className="display-4 fw-bolder heading2">And Altamash</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            laudantium quia neque tenetur, ipsa dolores, perspiciatis, magni
            vero dolor modi doloribus voluptate aperiam odio tempore ratione
            inus voluptate at, asperiores repellat
            
          </p>
        <div className="btndd"><button className=" fs- btn-primary"> <a href="/Nav"></a>Get Started </button></div>
        </div>
        <div className="img1">
          
          <img src="./bg21.jpg" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
