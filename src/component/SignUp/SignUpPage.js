import React from "react";
import css from "./SignUpPage.css";
import { useState } from "react";

const SignUpPage = () => {
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    pwd: "",
    confirmPwd: "",
  });
  const [records, setrecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setdata({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setrecords([...records, data]);
    console.log("User Data : --", records);

    // setdata({
    //   fname: "",
    //   lname: "",
    //   phone: "",
    //   email: "",
    //   pwd: "",
    //   confirmPwd: "",
    // });
  };
  return (
    <div className="rootDiv">
      <form className="rootChild">
        <h1>Form</h1>
        <div className="mainDiv">
          <div className="leftSideField">
            <div className="fieldDiv">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="LmarginLeft"
                placeholder="First Name"
                onChange={handleInput}
                value={data.fname}
                name="fname"
              />
            </div>
            <div className="fieldDiv">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="LmarginLeft"
                placeholder="Email Address"
                onChange={handleInput}
                value={data.email}
                name="email"
              />
            </div>
            <div className="fieldDiv">
              <label htmlFor="">Password</label>
              <input
                type="text"
                placeholder="Password"
                onChange={handleInput}
                value={data.pwd}
                name="pwd"
              />
            </div>
          </div>
          <div className="rightSideField">
            <div className="fieldDiv">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                onChange={handleInput}
                value={data.lname}
                name="lname"
              />
            </div>
            <div className="fieldDiv">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                onChange={handleInput}
                value={data.phone}
                name="phone"
              />
            </div>

            <div className="fieldDiv">
              <label htmlFor="">Confirm Password</label>
              <input
                type="text"
                className="LmarginLeft"
                placeholder="Confirm Password"
                onChange={handleInput}
                value={data.confirmPwd}
                name="confirmPwd"
              />
            </div>
          </div>
        </div>
        <div className="btnDiv">
          <button className="btn1" onClick={handleSubmit}>
            PrintData
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
