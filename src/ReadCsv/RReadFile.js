import React, { useState } from "react";
import Papa from "papaparse";

const allowedExtensions = ["csv"];

const RReadFile = () => {
  // This state will store the parsed data
  const [data, setData] = useState([]);

  const [error, setError] = useState("");

  const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    setError("");

    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      const fileExtension = inputFile?.type.split("/")[1];

      setFile(inputFile);
    }
  };
  const handleParse = () => {
    if (!file) return setError("Enter a valid file");

    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;

      const columns = Object.keys(parsedData[0]);

      console.log(columns, "hhhha");

      setData(columns);

      const columns1 = Object.values(parsedData);
      //  var dateRegex = /^\d{2}\/\d{2}\/\d{4}\s\d{2}\:\d{2}\:\d{2}  ?[AaPp][Mm]$/;

      var dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}\s\d{1,2}\:\d{1,2}/;
      let txt = "";
      let txt1 = "";
      // for (let x in columns1)
      for (let i = 0; i < columns1.length - 1; i++) {
        txt += columns1[i].Documentdate + " ";
        txt1 += columns1[i].ActualPickupdate + " ";
        // txt += columns1[x].Documentdate + " ";
        // let ok = "10/02/2020 12:14";
        const removeWhite = txt.trim();
        const removeWhite1 = txt1.trim();

        let result = dateRegex.test(removeWhite);
        let result1 = dateRegex.test(removeWhite1);
        // let result = dateRegex.test(ok);
        txt = "";
        txt1 = "";
        console.log("regex result", removeWhite, result);
        console.log("regex result1", removeWhite1, result1);

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
        // console.log(subtractDays(new Date(removeWhitef)), "mmmmmmmmm ");
      } //for loop
    }; //render.onload
    reader.readAsText(file);
  }; //ahndel parse

  // check date +5

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

    "Supplier own Billing Account number",

    "Rate Code",

    "Rental Agreement Number",
  ];
  const compare = () => {
    for (let a = 0; a < headers.length; a++) {
      for (let b = 0; b < data.length; b++) {
        if (headers[a] === data[b]) {
          // console.log(headers[a], "not match", data[a]);

          console.log("data match");
        } else {
          console.log("data not match");
        }
      }
    }
  };

  // date
  ///var regex=new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");

  const printDate = () => {
    const z = "0";
    let day = new Date().getDay().toString();
    day = day < 10 ? z + day : day;
    let month = new Date().getMonth().toString();
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

      <div>
        <button onClick={handleParse}>Parse</button>

        <br />
        <button onClick={compare}>Compare</button>

        <br />
        <button onClick={printDate}>Date</button>
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
    </div>
  );
};

export default RReadFile;

// import React, { useState } from "react";
// import Papa from "papaparse";

// const allowedExtensions = ["csv"];

//   export default  ReadFile = () => {

//   const [data, setData] = useState([]);
//   const [data1, setData1] = useState([]);

//   const [error, setError] = useState("");

//   const [file, setFile] = useState("");

// const headers = [

// "Billing Account ID",

// "RFP ID",

// "Transaction Type",

// "Indicator of Part billing",

// "Booking Reference",

// "Booking Version Number",

// "Document Number/ Supplier Reference",

// "Document date",

// "Gross amount",

// "Commission amount",

// "Net Amount",

// "VAT amount",

// "VAT rate %",

// "Net Amount (Prepaid) Extra Items",

// "VAT Amount (Prepaid) Extras",

// "VAT rate % (Prepaid) Extras",

// "Total to pay",

// "Currency",

// "Car Identifier",

// "SIPP code",

// "Actual Pick up date",

// "Actual Drop off date",

// "Duration Days",

// "Pick Up Country",

// "Pick Up Location",

// "Drop Off Location",

// "Supplier own Billing Account number",

// "Rate Code",

// "Rental Agreement Number",

// ];

//   const handleFileChange = (e) => {
//     setError("");

//     if (e.target.files.length) {
//       const inputFile = e.target.files[0];

//       const fileExtension = inputFile?.type.split("/")[1];
//       if (!allowedExtensions.includes(fileExtension)) {
//         setError("Please input a csv file");
//         return;
//       }

//       setFile(inputFile);
//     }
//   };
//   const handleParse = () => {

//     if (!file) return setError("Enter a valid file");

//     const reader = new FileReader();

//     reader.onload = async ({ target }) => {
//       const csv = Papa.parse(target.result, { header: true });
//       const parsedData = csv?.data;
//       const columns = Object.keys(parsedData[0]);
//       // setData([...data, [columns]]);
//       setData(columns);
//     };
//     reader.readAsText(file);
//   };

//   // const handleParse1 = () => {

//   //   if (!file) return setError("Enter a valid file");

//   //   const reader = new FileReader();

//   //   reader.onload = async ({ target }) => {
//   //     const csv = Papa.parse(target.result, { header: true });
//   //     const parsedData = csv?.data;
//   //     const columns = Object.keys(parsedData[0]);
//   //     setData1(columns);
//   //   };
//   //   reader.readAsText(file);
//   // };

// // }

//   const compare = () => {
//     for (let a = 0; a < headers.length; a++) {
//       for (let b = 0; b < data.length; b++) {
//         if (headers[a] != data[b]) {
//           console.log(headers[a], "not match", data[a]);
//         } else {
//           console.log("data match");
//         }
//       }

//   // const compare = () => {
//   //   for (let a = 0; a < data.length; a++)
//   //     { {
//   //     if (data[a] !== data1[a]) {
//   //       console.log(data[a], "data not match", data1[a]);
//   //     } else {
//   //       console.log("data match");
//   //     }
//   //   }

//     // header[0].every((value)=>headers.some((val)=> val === val))

// // console.log(array.some(even));
// // const data = await file.arrayBuffer[];
// // const workbook = read(data);
// // const sheet1 = workook.Sheets[workbook.SheetNames[0]];
// // const headerArr: string[] =util.sheet_to_json(sheet1, {header:1});

//   };

//   return (
//     <div>
//       <label htmlFor="csvInput" style={{ display: "block" }}>
//         Enter CSV File
//       </label>
//       <input
//         onChange={handleFileChange}
//         id="csvInput"
//         name="file"
//         type="File"
//       />
//       <input
//         onChange={handleFileChange}
//         id="csvInput"
//         name="file"
//         type="File"
//       />
//       <div>
//         <button onClick={handleParse}>Parse</button>
//         {/* <button onClick={handleParse1}>Parse1</button> */}
//         <br />
//         <button onClick={compare}>Compare</button>
//       </div>
//       <div style={{ marginTop: "3rem" }}>
//         {error
//           ? error
//           : data.map((col, idx) => (
//               <div key={idx}>
//                 {col},{idx}
//               </div>
//             ))}
//       </div>
//       <div style={{ marginTop: "3rem" }}>
//         {error
//           ? error
//           : data1.map((col, idx) => (
//               <div key={idx}>
//                 {col},{idx}
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// };
// // export default ReadFile;
