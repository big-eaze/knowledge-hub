import React from "react";
import Nav2 from "../components/Nav2";
import Dir from "../components/Dir";
import { studentNavItems } from "../data/navItems";
import "./StudentExams.css";

function StudentExams() {
  const exams = [
    {
      id: 1,
      subject: "Mathematics",
      date: "2025-06-25",
      time: "10:00 AM",
      venue: "Room 101",
    },
    {
      id: 2,
      subject: "Physics",
      date: "2025-06-26",
      time: "1:00 PM",
      venue: "Room 202",
    },
    {
      id: 3,
      subject: "History",
      date: "2025-06-27",
      time: "9:00 AM",
      venue: "Room 303",
    },
  ];

  return (
    <div className="student-exams">
      <Nav2 navItems={studentNavItems} subtitle="Student Panel" />
      <div className="exams-container">
        <Dir />
        <h1 className="exams-heading">Upcoming Exams</h1>
        <ul className="exams-list">
          {exams.map((exam) => (
            <li key={exam.id} className="exam-item">
              <h2 className="exam-subject">{exam.subject}</h2>
              <p className="exam-date">Date: {exam.date}</p>
              <p className="exam-time">Time: {exam.time}</p>
              <p className="exam-venue">Venue: {exam.venue}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentExams;