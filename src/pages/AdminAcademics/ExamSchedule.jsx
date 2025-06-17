import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Import the home icon
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./ExamSchedule.css";



function ExamSchedule() {


  const navigate = useNavigate();
  const [timetable, setTimetable] = useState([
    { subject: "Mathematics", date: "2025-07-15", startTime: "10:00 AM", endTime: "12:00 PM" },
    { subject: "Science", date: "2025-07-16", startTime: "12:00 PM", endTime: "2:00 PM" },
    { subject: "History", date: "2025-07-17", startTime: "2:00 PM", endTime: "4:00 PM" },
  ]);

  
  const [newSubject, setNewSubject] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newStartTime, setNewStartTime] = useState("");
  const [newEndTime, setNewEndTime] = useState("");

  const handleAddExam = () => {
    if (newSubject.trim() !== "" && newDate.trim() !== "" && newStartTime.trim() !== "" && newEndTime.trim() !== "") {
      setTimetable([...timetable, { subject: newSubject, date: newDate, startTime: `${newStartTime} PM`, endTime: `${newEndTime} PM` }]);
      setNewSubject("");
      setNewDate("");
      setNewStartTime("");
      setNewEndTime("");
    }
  };

  const handleDeleteExam = (index) => {
    const updatedTimetable = timetable.filter((_, i) => i !== index);
    setTimetable(updatedTimetable);
  };


  const handleSendTimetable = () => {
    // Simulate sending the timetable (e.g., via an API)
    console.log("Sending timetable to staff and students:", timetable);
    alert("Timetable has been sent successfully!");
  };

  return (
    <div className="exam-timetable-container">
      <div className="back-to-home" onClick={() => navigate("/ad-academics")}>
        <FaArrowLeft className="left" size={30} />
      </div>
      <h2>Exam Timetable</h2>
      <table className="exam-timetable">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Start</th>
            <th>End</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((exam, index) => (
            <tr key={index}>
              <td>{exam.subject}</td>
              <td>{exam.date}</td>
              <td>{exam.startTime}</td>
              <td>{exam.endTime}</td>
              <td>
                <button
                  className="delete-exam-btn"
                  onClick={() => handleDeleteExam(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-exam-section">
        <input
          type="text"
          placeholder="Subject"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          className="add-exam-input"
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="add-exam-input"
        />
        <input
          type="time"
          value={newStartTime}
          onChange={(e) => setNewStartTime(e.target.value)}
          className="add-exam-input"
        />
        <input
          type="time"
          value={newEndTime}
          onChange={(e) => setNewEndTime(e.target.value)}
          className="add-exam-input"
        />
        <button className="add-exam-btn" onClick={handleAddExam}>
          Add Exam
        </button>
      </div>
      <button className="send-timetable-btn" onClick={handleSendTimetable}>
        Send Timetable
      </button>
    </div>
  );
}

export default ExamSchedule;