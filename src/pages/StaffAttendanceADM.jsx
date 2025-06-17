import React, { useState } from "react";
import Nav2 from "../components/Nav2";
import Dir from "../components/Dir";
import { adminNavItems } from "../data/navItems";
import "./StaffAttendanceADM.css";

function StaffAttendanceADM() {
  // Mock data for staff attendance
  const [staffAttendance, setStaffAttendance] = useState([
    { id: 1, name: "John Doe", status: "Present" },
    { id: 2, name: "Jane Smith", status: "Absent" },
    { id: 3, name: "Michael Johnson", status: "Present" },
    { id: 4, name: "Emily Davis", status: "Present" },
  ]);


  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]); // Default to today's date

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    // Logic to fetch attendance data for the selected date can be added here 
    // don't forget!!!
  };

  return (
    <div className="staff-attendance-sheet">
      <Nav2 navItems={adminNavItems} subtitle="Admin Panel" />
      <div className="attend-container">
        <Dir />
        <h1 className="attendance-heading">Staff Attendance Sheet</h1>
        <div className="date-picker">
          <label htmlFor="attendance-date">Select Date:</label>
          <input
            type="date"
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
            </tr>
          </thead>
          <tbody>
            {staffAttendance.map((staff) => (
              <tr key={staff.id}>
                <td>{staff.id}</td>
                <td>{staff.name}</td>
                <td className={`status ${staff.status.toLowerCase()}`}>
                  {staff.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffAttendanceADM;