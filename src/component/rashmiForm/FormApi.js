import React, { useState, useEffect } from "react";
import axios from "axios";

const FormApi = () => {
  const [newRegistration, setnewRegistration] = useState({
    userId: "",
    title: "",
    body: "",
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

    // setnewRegistration({ fullname: "", email: "", phone: "", passwd: "" });
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
    <div className="flex justify-center items-center bg-blue-700 h-screen text-white text-lg fontse">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fname">userId Name</label>
        <input
          type="text"
          onChange={handleInput}
          autoComplete="off"
          value={newRegistration.userId}
          name="userId"
          id="userId"
        />

        <label htmlFor="phone">title</label>
        <input
          type="text"
          value={newRegistration.title}
          onChange={handleInput}
          name="title"
          id="title"
        />

        <label htmlFor="password">body</label>
        <input
          type="text"
          value={newRegistration.body}
          onChange={handleInput}
          name="body"
          id="body"
        />
        <button type="submit">Submit</button>
      </form>

      <div></div>
    </div>
  );
};

export default FormApi;
