import React from "react";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [Data, setData] = useState({
    fname: "",
    email: "",
    phone: "",
    Message: "",
  });
  let name, value;
  const Postdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...Data, [name]: value });
  };
  const Submit = async (e) => {
    e.preventDefault();
    const { fname, email, phone, Message } = Data;
    const response = fetch("https://armaan-b8d4a-default-rtdb.firebaseio.com/data.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            email,
            phone,
            Message,
          }),
        }
      );
      if (response!=null) {
        alert("data added")
        ;
      } else {
        alert("data not added");
      }

      // const jsonData=await data.json();
      // console.log(jsonData);
    };

  return (
    <div>
      <form method="post" onSubmit={Submit} action="https://miniproject-photo-gallary-default-rtdb.firebaseio.com/userdata">
      <div className="first ">
        <div className="second">
          <h1 className="display-1">Contact Us</h1>

          <div className="form border-rounder">
            <div className="name fs-1 ">
              Name
              <input
                value={Data.fname}
                onChange={Postdata}
                className="inp form-control text-dark a1234 name border-rounded"
                type="text"
                name="fname"
                id=""
              />
            </div>
            <div className="email fs-1 ">
              Email
              <input
                value={Data.email}
                onChange={Postdata}
                className="inp a1234 form-control text-dark "
                type="text"
                name="email"
                id=""
              />
            </div>
            <div className="email fs-1 ">
              Phone
              <input
                value={Data.phone}
                onChange={Postdata}
                className="inp a1234 form-control text-dark "
                type="Number"
                name="phone"
                id=""
              />
            </div>
            <div className="messeage fs-1">
              Issue
              <textarea
                value={Data.Message}
                onChange={Postdata}

                className="inp a1234 form-control text-dark "
                type="text"
                name="Message"
                row="20"
                cols="50"
                id=""
              />
              {/* <span className="d-flex">
            <a className="fs-1">
              <svg style={{ size: "25rem" }}  fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="66" className="w-5 display-1  h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" ></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span> */}
              <button
                onClick={Submit}
                className="display-1 border-rounded text-center contact-btn text-end  text-light fw-bolder"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      </form>
              <button OnClick={Submit}>get</button>
    </div>
  );
};

export default Contact;
