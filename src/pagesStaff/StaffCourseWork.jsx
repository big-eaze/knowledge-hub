import React, { useState } from "react";
import Nav2 from "../components/Nav2";
import Dir from "../components/Dir";
import { StaffNavItems } from "../data/navItems";
import "./StaffCourseWork.css";

function StaffCourseWork() {
  // State for assignments
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAssignment((prev) => ({ ...prev, [name]: value }));
  };

  // Handle assignment submission
  const handleAddAssignment = (event) => {
    event.preventDefault();
    if (newAssignment.title && newAssignment.description && newAssignment.dueDate) {
      setAssignments((prev) => [...prev, { ...newAssignment, id: Date.now() }]);
      setNewAssignment({ title: "", description: "", dueDate: "" }); // Reset form
    }
  };

  return (
    <div className="course-work">
      <Nav2 navItems={StaffNavItems} subtitle="Staff Panel" />
      <div className="course-work-container">
        <Dir />
        <h1 className="course-work-heading">Course Work</h1>
        <form className="assignment-form" onSubmit={handleAddAssignment}>
          <h2>Assign a New Task</h2>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newAssignment.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={newAssignment.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={newAssignment.dueDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Add Assignment
          </button>
        </form>
        <div className="assignments-list">
          <h2>Assigned Tasks</h2>
          {assignments.length === 0 ? (
            <p>No assignments added yet.</p>
          ) : (
            <ul>
              {assignments.map((assignment) => (
                <li key={assignment.id} className="assignment-item">
                  <h3>{assignment.title}</h3>
                  <p>{assignment.description}</p>
                  <p>Due Date: {assignment.dueDate}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default StaffCourseWork;