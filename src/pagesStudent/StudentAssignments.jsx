import React from "react";
import Nav2 from "../components/Nav2";
import Dir from "../components/Dir";
import { studentNavItems } from "../data/navItems";
import "./StudentAssignments.css";

function StudentAssignments() {
  const assignments = [
    {
      id: 1,
      title: "Math Assignment 1",
      dueDate: "2025-06-20",
      description: "Complete the exercises on pages 45-50 of the textbook.",
    },
    {
      id: 2,
      title: "Physics Lab Report",
      dueDate: "2025-06-18",
      description: "Submit the lab report for Experiment 3.",
    },
    {
      id: 3,
      title: "History Essay",
      dueDate: "2025-06-25",
      description: "Write a 1000-word essay on the Industrial Revolution.",
    },
  ];

  return (
    <div className="student-assignments">
      <Nav2 navItems={studentNavItems} subtitle="Student Panel" />
      <div className="assignments-container">
        <Dir />
        <h1 className="assignments-heading">Assignments</h1>
        <ul className="assignments-list">
          {assignments.map((assignment) => (
            <li key={assignment.id} className="assignment-item">
              <h2 className="assignment-title">{assignment.title}</h2>
              <p className="assignment-due-date">Due Date: {assignment.dueDate}</p>
              <p className="assignment-description">{assignment.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentAssignments;