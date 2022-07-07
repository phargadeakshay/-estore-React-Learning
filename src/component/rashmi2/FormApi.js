import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FormApi.css";

const FormApi = () => {
  const [newRegistration, setnewRegistration] = useState({
    userId: "",
    name: "",
    surname: "",
  });
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setnewRegistration({ ...newRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const StoreId = { ...newRegistration, id: new Date().getTime().toString() };
    setRecords([...records, StoreId]);
    console.log(records, "before");
    postDataToServer(records);
    // setFormErrors(validate(records));

    // setnewRegistration({ fullname: "", email: "", phone: "", passwd: "" });
  };
  const onBlr = () => {
    setFormErrors(validate(records.email));
  };
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const postDataToServer = (data) => {
    console.log(data, "axios");
    axios.post("http://localhost:5000/dbdata", data).then(
      (response) => {
        console.log(response);
        console.log("sucess");
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  return (
    // <div className="flex justify-center items-center bg-blue-700 h-screen text-white text-lg fontse">
    <body>
      <div>
        <div className="mainDiv2">
          <form action="" onSubmit={handleSubmit} className="formm">
            <h1 className="heading">Login Form</h1>
            <div>
              {/* <label htmlFor="fname"> Name</label> */}
              <input
                type="text"
                onChange={handleInput}
                autoComplete="off"
                value={newRegistration.userId}
                name="userId"
                id="userId"
                placeholder="Name"
              />
            </div>
            <p>{formErrors.username} </p>
            <br></br> <br></br>
            <div>
              {/* <label htmlFor="phone">Email</label> */}
              <input
                type="text"
                value={newRegistration.title}
                onChange={handleInput}
                name="title"
                id="title"
                placeholder="Email"
                onBlur={onBlr}
              />
            </div>
            <p>{formErrors.email} </p>
            <br></br>
            <br></br>
            <div>
              {/* <label htmlFor="phone">Password</label>  */}
              <input
                type="text"
                value={newRegistration.body}
                onChange={handleInput}
                name="body"
                id="body"
                placeholder="Password"
              />
            </div>
            <p>{formErrors.password} </p>
            <br></br> <br></br>
            {/*         
        <label htmlFor="password">Phone no</label>
        <input
          type="text"
          value={newRegistration.body}
          onChange={handleInput}
          name="body"
          id="body"
        /> */}
            <br></br>
            <div>
              <button type="submit" className="SignInBtn">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div></div>

        <div></div>
      </div>
    </body>
  );
};

export default FormApi;
