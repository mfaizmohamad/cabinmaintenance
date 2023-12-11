import React from "react";
import "./table.css"

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr className="table__header">
          <th>Name</th>
          <th>Defect</th>
          <th>Mel</th>
          <th>Cat</th>
          <th>Interval</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <th>{item.name}</th>
            <th>{item.defect}</th>
            <th>{item.mel}</th>
            <th>{item.cat}</th>
            <th>{item.interval}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
