import React from "react";

const ReportList = ({ reports, deleteReport }) => (
  <ul>
    {reports.map((report, index) => (
      <li key={index}>
        <h2>{report.reporter}</h2>
        <p>{report.date}</p>
        <p>{report.description}</p>
        <p>Severity: {report.severity}</p>
        <button className="delete" onClick={() => deleteReport(index)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ReportList;
