import React, { useState } from "react";

const ReportForm = ({ addReport }) => {
  const [report, setReport] = useState({
    reporter: "",
    date: "",
    description: "",
    severity: "",
  });

  const handleChange = (e) => {
    setReport({
      ...report,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReport(report);
    setReport({ reporter: "", date: "", description: "", severity: "" });
  };

  return (
    <div>
      <form className="report-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          className="name"
          name="reporter"
          value={report.reporter}
          onChange={handleChange}
          placeholder="Enter the reporter's name"
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={report.description}
          onChange={handleChange}
          placeholder="Describe the incident"
          required
        />

        <label>Severity</label>
        <select
          name="severity"
          value={report.severity}
          onChange={handleChange}
          required
        >
          <option value="">Select severity</option>
          <option value="minor">Minor</option>
          <option value="major">Major</option>
          <option value="critical">Critical</option>
        </select>

        <label>Date of the Incident</label>
        <input
          className="date"
          type="date"
          name="date"
          value={report.date}
          onChange={handleChange}
          required
        />
        <button className="submit" type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportForm;
