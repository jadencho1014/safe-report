import React, { useState, useEffect } from "react";
import "./App.css";
import ReportForm from "./components/ReportForm";
import ReportList from "./components/ReportList";

const severityLevels = {
  minor: 1,
  major: 2,
  critical: 3,
};

const App = () => {
  const [reports, setReports] = useState([]);

  const addReport = (report) => {
    setReports((prevReports) => [report, ...prevReports]);
  };

  const deleteReport = (index) => {
    setReports((prevReports) => prevReports.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setReports((prevReports) =>
      [...prevReports].sort(
        (a, b) => severityLevels[b.severity] - severityLevels[a.severity]
      )
    );
  }, [reports]);

  return (
    <div>
      <h1>Safe-Report</h1>
      <h2>Incident reporting system</h2>
      <ReportForm addReport={addReport} />
      <ReportList reports={reports} deleteReport={deleteReport} />
    </div>
  );
};

export default App;
