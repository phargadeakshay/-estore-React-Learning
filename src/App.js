import React from "react";
import FormApi from "./component/rashmi2/FormApi";
// import FormApi from "./component/rashmi2/FormApi";

import FormR from "./component/rashmiForm/FormR";
import CompareHeaders from "./ReadCsv/CompareHeaders";
import ReadFile from "./ReadCsv/ReadFile";
import ReadXlsxCsv from "./ReadCsv/ReadXlsxCsv";
import RReadFile from "./ReadCsv/RReadFile";
import XlsxRead from "./ReadCsv/XlsxRead";
import LoginPage from "./component/SignIn/LoginPage"
const App = () => {
  return (
    <div>
      {/* <FormR /> */}
      {/* <FormApi /> */}
      {/* <FormApi /> */}
      {/* <ReadFile /> */}
      {/* <RReadFile /> */}
      {/* <CompareHeaders /> */}
      {/* <ReadXlsxCsv /> */}
      {/* <XlsxRead /> */}
      <LoginPage/>
    </div>
  );
};

export default App;
