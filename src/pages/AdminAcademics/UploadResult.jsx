import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./UploadResult.css";

function UploadResult() {
  const navigate = useNavigate();

  const [results, setResults] = useState([]);
  const [subject, setSubject] = useState("");
  const [score, setScore] = useState("");


  const [inputStudentName, setInputStudentName] = useState(false);

  const handleUploadResult = () => {
    if (subject.trim() !== "" && score.trim() !== "") {
      setResults([...results, { subject, score }]);
      setSubject("");
      setScore("");
    }
  };

  const handleDeleteResult = (index) => {
    const updatedResults = results.filter((_, i) => i !== index);
    setResults(updatedResults);
  };

  return (
    <>
      <div className={`${inputStudentName ? "beHidden" : "centralize"}`}>
        <div className={` ${inputStudentName ? "beHidden" : "student-name-container"}`}>
          <h2>Enter student's name </h2>
          <div className="student-name-inputs">
            <input
              type="text"
              placeholder="Enter student name"
              className="input1"
            />
            <input
              type="text"
              placeholder="Enter student class"
              className="input1"
            />
            <button onClick={() => setInputStudentName(true)}>Enter</button>
          </div>

        </div>
      </div>
      <div className={`upload-result-container ${inputStudentName ? '' : 'beHidden'}`}>
        <div className="back-to-home" onClick={() => navigate("/ad-academics")}>
          <FaArrowLeft className="arrow-left" size={30} />
        </div>
        <h2>Upload Results</h2>
        <h1>James Johnson -</h1>
        <table className="result-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.subject}</td>
                <td>{result.score}</td>
                <td>
                  <button
                    className="delete-result-btn"
                    onClick={() => handleDeleteResult(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="upload-result-form">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="upload-result-input"
          />
          <input
            type="number"
            placeholder="Score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="upload-result-input"
          />
          <button className="upload-result-btn" onClick={handleUploadResult}>
            Send
          </button>
        </div>
        <div className="senD-container">
          <button className="senD">Upload Result</button>
        </div>
      </div>
    </>
  );
}

export default UploadResult;