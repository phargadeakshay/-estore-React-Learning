import React, { useState } from "react";
import Papa from "papaparse";

// Allowed extensions for input file
const allowedExtensions = ["csv", "js"];

const ReadFile = () => {
  // This state will store the parsed data
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  // correct file extension is not used
  const [error, setError] = useState("");

  // It will store the file uploaded by the user
  const [file, setFile] = useState("");

  // This function will be called when
  // the file input changes
  const handleFileChange = (e) => {
    setError("");

    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];
      // console.log(inputFile, "olll");

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split("/")[1];
      const fileExtension1 = inputFile?.type.split("/")[1];

      if (
        !allowedExtensions.includes(fileExtension) ||
        !allowedExtensions.includes(fileExtension1)
      ) {
        setError("Please input a csv file");
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
    }
  };
  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      // console.log(parsedData, "pppp");
      const columns = Object.keys(parsedData[0]);
      // const columns1 = Object.values(parsedData[2]);
      console.log(columns, "hhhha");
      // console.log(columns1, "hhhha");
      // setData([...data, [columns]]);
      setData(columns);
    };
    reader.readAsText(file);
  };

  const handleParse1 = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      const columns = Object.keys(parsedData[0]);
      const columns1 = Object.values(parsedData);
      setData1(columns);
      // console.log(columns1[0].Age, "am i right");
      // console.log(columns1, "am i right");

      var dateRegex = /^\d{2}\/\d{2}\/\d{4}\s\d{2}\:\d{2}\:\d{2}$/;
      // var dateRegex1 = /^\d{2}\/\d{2}\/\d{4}$/;

      let txt = "";
      for (let x in columns1) {
        txt += columns1[x].Year + " ";
        // let ok = "10/02/2020 12:14:20";
        // let ok1 = "10/02/2020";
        // let ok2 = "10/03/2020";
        // let result1 = dateRegex1.test(ok1);
        const re = txt.trim();
        let result = dateRegex.test(re);
        // console.log("regex result", result);
        // console.log(re, "am i right");

        txt = "";

        // let matchDate = txt.match(/^\d{2}\/\d{2}\/\d{4}/);

        function subtractDays(date = new Date()) {
          const z = "0";
          let day = new Date().getDate().toString();
          day = day < 10 ? z + day : day;
          let month = new Date().getMonth() + 1;
          month = month < 10 ? z + month : month;
          let year = new Date().getFullYear().toString();
          let hours = new Date().getHours().toString();
          hours = hours < 10 ? z + hours : hours;
          let minutes = new Date().getMinutes().toString();
          let seconds = new Date().getSeconds().toString();
          seconds = seconds < 10 ? z + seconds : seconds;

          let currInNum = month + "/" + day + "/" + year;

          let currDate = new Date(currInNum);
          console.log("ajachi date aahe", currDate, "fgfdsg", currInNum);
          var date1 = new Date("06/20/2020");
          var date2 = new Date("06/25/2020");
          let Difference_In_Time = currDate.getTime() - date.getTime();
          var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

          if (Difference_In_Days <= 5) {
            // console.log(Difference_In_Days, "console");
            return "valid date file accepted";
            // return ` date is valid beCoz it is ${Difference_In_Days} old only`;
          } else {
            // console.log(Difference_In_Days, "console1");
            // return ` date is invalid beCoz it is too old ${Difference_In_Days}`;
            return "invalid date file rejected";
          }
        }
        // var ttt = "06/22/2022";
        console.log(subtractDays(new Date(re)), "mmmmmmmmm ");
      }
    };
    reader.readAsText(file);
  }; //handlepasrse

  const compare = () => {
    for (let a = 0; a < data.length; a++) {
      if (data[a] != data1[a]) {
        console.log(data[a], "not match", data1[a]);
      } else {
        console.log("data match");
      }
    }
  };
  const printDate = () => {
    const z = "0";
    let day = new Date().getDate().toString();
    day = day < 10 ? z + day : day;
    let month = new Date().getMonth() + 1;
    month = month < 10 ? z + month : month;
    let year = new Date().getFullYear().toString();
    let hours = new Date().getHours().toString();
    hours = hours < 10 ? z + hours : hours;
    let minutes = new Date().getMinutes().toString();
    let seconds = new Date().getSeconds().toString();
    seconds = seconds < 10 ? z + seconds : seconds;
    console.log(
      "Date is :" +
        year +
        "/" +
        month +
        "/" +
        day +
        "  " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
    );
    let yy = day + "/" + month + "/" + year;
    console.log("ajachi date aahe", yy);
  };
  const headers = [
    "Billing Account ID",

    "RFP ID",

    "Transaction Type",

    "Indicator of Part billing",

    "Booking Reference",

    "Booking Version Number",

    "Document Number/ Supplier Reference",

    "Document date",

    "Gross amount",

    "Commission amount",

    "Net Amount",

    "VAT amount",

    "VAT rate %",

    "Net Amount (Prepaid) Extra Items",

    "VAT Amount (Prepaid) Extras",

    "VAT rate % (Prepaid) Extras",

    "Total to pay",

    "Currency",

    "Car Identifier",

    "SIPP code",

    "Actual Pick up date",

    "Actual Drop off date",

    "Duration Days",

    "Pick Up Country",

    "Pick Up Location",

    "Drop Off Location",

    "Name",

    "Supplier own Billing Account number",

    "Rate Code",

    "Rental Agreement Number",
  ];
  const compare1 = () => {
    for (let a = 0; a < headers.length; a++) {
      for (let b = 0; b < data.length; b++) {
        if (headers[a] != data[b]) {
          console.log(headers[a], "not match", data[a]);
        } else {
          console.log("data match");
        }
      }
    }
  };

  return (
    <div>
      <label htmlFor="csvInput" style={{ display: "block" }}>
        Enter CSV File
      </label>
      <input
        onChange={handleFileChange}
        id="csvInput"
        name="file"
        type="File"
      />
      {/* <input
        onChange={handleFileChange}
        id="csvInput"
        name="file"
        type="File"
      /> */}
      <div>
        <button onClick={handleParse}>Parse</button>
        <button onClick={handleParse1}>Parse1</button>
        <br />
        {/* <button onClick={compare}>Compare</button> */}
        <br />
        <button onClick={compare1}>Compare1</button>
      </div>
      <div style={{ marginTop: "3rem" }}>
        {error
          ? error
          : data.map((col, idx) => (
              <div key={idx}>
                {col},{idx}
              </div>
            ))}
      </div>
      <div style={{ marginTop: "3rem" }}>
        {error
          ? error
          : data1.map((col, idx) => (
              <div key={idx}>
                {col},{idx}
              </div>
            ))}
      </div>
      <button onClick={printDate}>Date</button>
    </div>
  );
};

export default ReadFile;

// const columns1 = Object.values(parsedData);
// var dateRegex = /^\d{2}\/\d{2}\/\d{4}\s\d{2}\:\d{2}\:\d{2}$/;
// let txt = "";
// for (let x in columns1) {
//   txt += columns1[x].Year + " ";
//   let ok = "10/02/2020 12:14:20";
//   const removeWhite = txt.trim();
//   let result = dateRegex.test(removeWhite);
//   console.log("regex result", result);
//   txt = "";
// }
