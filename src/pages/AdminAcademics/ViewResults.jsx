import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Import the home icon
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./ViewResults.css";

function ViewResults() {

  const navigate = useNavigate();

  const [results] = useState([
    {
      studentName: "John Doe",
      subjects: [
        { name: "Mathematics", score: 85 },
        { name: "Science", score: 90 },
        { name: "History", score: 78 },
        { name: "English", score: 88 },
        { name: "Geography", score: 92 },
        { name: "Physics", score: 80 },
        { name: "Chemistry", score: 89 },
        { name: "Biology", score: 84 },
        { name: "Economics", score: 76 },
        { name: "Literature", score: 91 },
      ],
    },
    {
      studentName: "Jane Smith",
      subjects: [
        { name: "Mathematics", score: 95 },
        { name: "Science", score: 85 },
        { name: "History", score: 88 },
        { name: "English", score: 90 },
        { name: "Geography", score: 89 },
        { name: "Physics", score: 92 },
        { name: "Chemistry", score: 87 },
        { name: "Biology", score: 86 },
        { name: "Economics", score: 80 },
        { name: "Literature", score: 93 },
      ],
    },
  ]);

  return (
    <div className="view-results-container">
      <div className="back-to-home" onClick={() => navigate("/ad-academics")}>
        <FaArrowLeft className="fa-arrow" size={30} />
      </div>
      <h2>View Results</h2>
      <div className="results-grid">
        {results.map((student, index) => (
          <div key={index} className="student-card">
            <h3>{student.studentName}</h3>
            <table className="subjects-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {student.subjects.map((subject, subIndex) => (
                  <tr key={subIndex}>
                    <td>{subject.name}</td>
                    <td>{subject.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewResults;