import React, { useState } from "react";
import Nav2 from "../components/Nav2";
import Dir from "../components/Dir";
import { StaffNavItems } from "../data/navItems";
import "./StaffAttendance.css";

function StaffAttendance() {
  // State for attendance status
  const [attendanceStatus, setAttendanceStatus] = useState("Not Marked");

  // State for selected date
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]); // Default to today's date

  // Handle attendance marking
  const markAttendance = (status) => {
    setAttendanceStatus(status);
  };

  return (
    <div className="my-attendance">
      <Nav2 navItems={StaffNavItems} subtitle="Staff Panel" />
      <div className="attendance-container">
        <Dir />
        <h1 className="attendance-heading">My Attendance</h1>
        <div className="date-picker">
          <label htmlFor="attendance-date">Date:</label>
          <input
            type="date"
            id="attendance-date"
            value={selectedDate}
            readOnly
          />
        </div>
        <div className="attendance-status">
          <h2>Attendance Status: {attendanceStatus}</h2>
        </div>
        <div className="attendance-actions">
          <button
            className={`status-button present ${
              attendanceStatus === "Present" ? "active" : ""
            }`}
            onClick={() => markAttendance("Present")}
          >
            Mark Present
          </button>
          <button
            className={`status-button absent ${
              attendanceStatus === "Absent" ? "active" : ""
            }`}
            onClick={() => markAttendance("Absent")}
          >
            Mark Absent
          </button>
        </div>
      </div>
    </div>
  );
}

export default StaffAttendance;