import React from "react";

import "./App.css";
import "./styles/index.scss";
import Head from "./components/head";
import Siderbar from "./components/siderbar";

function App() {
  return (
    <div>
      <div className="row">
        <div>row</div>
        <div>column</div>
      </div>
      <Head
        title="콘텐츠 목록"
        btnText="콘텐츠 목록"
        onClick={() => alert("콘텐츠 목록")}
      />
      <Siderbar />
    </div>
  );
}

export default App;
