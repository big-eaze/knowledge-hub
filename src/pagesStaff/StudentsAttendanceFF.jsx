import React, { useState } from "react";
import Nav2 from "../components/Nav2";
import Dir from "../components/Dir";
import { StaffNavItems } from "../data/navItems";
import "./StudentsAttendanceFF.css";

function StudentsAttendanceFF() {
  // Mock data for students
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", status: "Absent" },
    { id: 2, name: "Jane Smith", status: "Absent" },
    { id: 3, name: "Michael Johnson", status: "Absent" },
    { id: 4, name: "Emily Davis", status: "Absent" },
  ]);

  // State for selected date
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]); // Default to today's date

  // Handle status change
  const handleStatusChange = (id, status) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  // Handle date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="students-attendance">
      <Nav2 navItems={StaffNavItems} subtitle="Staff Panel" />
      <div className="attendance-container">
        <Dir />
        <h1 className="attendance-heading">Students Attendance</h1>
        <div className="date-picker">
          <label htmlFor="attendance-date">Select Date:</label>
          <input
            type="date"
            id="attendance-date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <table className="attendance-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.status}</td>
                <td>
                  <button
                    className={`status-button present ${
                      student.status === "Present" ? "active" : ""
                    }`}
                    onClick={() => handleStatusChange(student.id, "Present")}
                  >
                    Present
                  </button>
                  <button
                    className={`status-button absent ${
                      student.status === "Absent" ? "active" : ""
                    }`}
                    onClick={() => handleStatusChange(student.id, "Absent")}
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentsAttendanceFF;