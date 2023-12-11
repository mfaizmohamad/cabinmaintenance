import React, { useState } from "react";
import "./Mel.css";
import { FaCheck } from "react-icons/fa";
import { Data } from "./data";
import Table from "./table";

const Mel = () => {
  const[query, setQuery] = useState("");

  const keys = ["name","defect","mel","cat","interval"]

  const search = (data) => {
    return data.filter(
    (item) => 
        keys.some(key => item[key].toLowerCase().includes(query))
     );    
  };

  return (
    <section id="mel" className="container mel__container">
      <h5>Defer Defect</h5>
      <h2>Mel</h2>

      <div className="mel__box">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />

        <article className="mel">
          <div className="mel__head">
            <h3>Reference</h3>
          </div>

          <div className="mel__list">
            <Table data={search(Data)}/>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Mel;
