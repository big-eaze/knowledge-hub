// components/ExamsResults.jsx
import React from "react";
import "./ExamResults.css";


function ExamsResults() {
  
  const exams = [
    { subject: "Mathematics", date: "2025-06-10", time: "10:00 AM" },
    { subject: "English", date: "2025-06-12", time: "12:00 PM" },
    { subject: "Physics", date: "2025-06-14", time: "9:00 AM" },
  ];
  
  const results = [
    { subject: "Mathematics", score: 87, grade: "A" },
    { subject: "English", score: 75, grade: "B" },
    { subject: "Physics", score: 92, grade: "A+" },
  ];
 
  return (
    <div className="container">
      {/* Exam Timetable */}
      <div className="card">
        <h2 className="cardTitle">📅 Exam Timetable</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, idx) => (
              <tr key={idx}>
                <td>{exam.subject}</td>
                <td>{exam.date}</td>
                <td>{exam.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Results Table */}
      <div className="card">
        <h2 className="cardTitle">📊 Results</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Score</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, idx) => (
              <tr key={idx}>
                <td>{result.subject}</td>
                <td>{result.score}</td>
                <td>{result.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ExamsResults;