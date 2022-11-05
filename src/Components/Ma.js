import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useState, useEffect } from "react";

const Ma = () => {
  const [image, setimage] = useState([]);
  const [search, setsearch] = useState("cloud");
  const api = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=WbHbsT0exIa_rIiZlu2i92iQufzyRmy7eXKMFooTYms`;
  const getapi = async () => {
    await axios.get(api).then((value) => {
      console.log(value);
      setimage(value.data.results);
    });
  };
  useEffect(() => {
    const getapi = async () => {
      await axios.get(api).then((value) => {
        console.log(value);
        setimage(value.data.results);
      });
    };
    getapi();
  }, []);
  return (
    <div className="bg-white">
      <div className="text-center my-5  color-white">
        {/* <div className="types">
        <ul className="d-flex fs-1  ">
          <li  className="types1"> <a href=""></a>  armaan</li>
          <li className="types1">armaan</li>
          <li className="types1">armaan</li>
          <li className="types1">armaan</li>
          <li className="types1">armaan</li>
          <li className="types1">armaan</li>
          <li className="types1">armaan</li>
          <li className="types1">armaan</li>
        </ul>
        </div> */}
        <h1 className="d "> PHOTO GALLARY </h1>
        <hr />
      </div>
      <div className="">
        <div className="flex mx-12">
          <input
            className="w-full p-2 shadow-md focus:outline-none "
            type="text"
            placeholder="serach"
            name="psw"
            value={search}
            id="borderdemo"
            onChange={(e) => setsearch(e.target.value)}
            required
          />

          <button
            onClick={getapi}
            className="fs-1 borderdemo rounded-lg  bg-dark"
          >
            <SearchIcon
              style={{ width: "90px", height: "60px", color: "white" }}
            />
          </button>
        </div>
      </div>
      <div className="  ">
        <div className="flex flex-wrap flex-row gap-5 mt-1 px-32">
          {/* <a href={value.links.html} target="_blank" download="image"> */}

          {image.map((value, index) => {
            return (
              <div className="shadow-lg p-1 rounded-lg flex flex-row">
                <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                  <div class="w-full h-64 -300 bg-center bg-cover rounded-lg shadow-md">
                    <img
                      src={value.urls.small_s3}
                      className="w-64 shadow-lg   h-64"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ma;
