import React, { useState } from "react";
import Nav2 from "../components/Nav2";
import Dir from "../components/Dir";
import { studentNavItems } from "../data/navItems";
import "./StudentResults.css";

function StudentResults() {
  const [selectedSession, setSelectedSession] = useState("2024/2025"); 

  // Mock data for results
  const resultsData = {
    "2024/2025": [
      { subject: "Mathematics", grade: "A" },
      { subject: "Physics", grade: "B+" },
      { subject: "History", grade: "A-" },
    ],
    "2023/2024": [
      { subject: "Mathematics", grade: "B" },
      { subject: "Physics", grade: "A" },
      { subject: "History", grade: "B+" },
    ],
    "2022/2023": [
      { subject: "Mathematics", grade: "A-" },
      { subject: "Physics", grade: "B" },
      { subject: "History", grade: "A" },
    ],
  };

  // Handle session selection
  const handleSessionChange = (event) => {
    setSelectedSession(event.target.value);
  };

  return (
    <div className="student-results">
      <Nav2 navItems={studentNavItems} subtitle="Student Panel" />
      <div className="results-container">
        <Dir />
        <h1 className="results-heading">View Results</h1>
        <div className="session-selector">
          <label htmlFor="session">Select Session:</label>
          <select
            id="session"
            value={selectedSession}
            onChange={handleSessionChange}
          >
            {Object.keys(resultsData).map((session) => (
              <option key={session} value={session}>
                {session}
              </option>
            ))}
          </select>
        </div>
        <div className="results-table">
          <h2>Results for {selectedSession} Session</h2>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {resultsData[selectedSession].map((result, index) => (
                <tr key={index}>
                  <td>{result.subject}</td>
                  <td>{result.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentResults;