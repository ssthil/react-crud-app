import React from "react";

const tableTitle = ["Name", "Role", "Group", "Action"];

const TableHeader = () => (
  <thead>
    <tr>
      {tableTitle.map((title, i) => (
        <td key={i}>{title}</td>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
