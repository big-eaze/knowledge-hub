import React, { useState } from "react";
import "./Academics.css";
import { Link } from "react-router-dom";
import Nav2 from "../../components/Nav2";
import Dir from "../../components/Dir";
import { adminNavItems } from "../../data/navItems";


function Academics() {

  const [courses, setCourses] = useState([
    { name: "JSS1", students: 120 },
    { name: "JSS2", students: 100 },
    { name: "JSS3", students: 80 },
    { name: "SS1", students: 370 },
    { name: "SS2", students: 190 },
    { name: "SS3", students: 280 }
  ]);

  //const events = [
  //{ title: 'Term Start', date: '2025-06-01' },
  //{ title: 'Midterm Exams', date: '2025-07-15' }
  //]



  const [newCourse, setNewCourse] = useState("");
  const [numberOfStudents, setNumberOfStudents] = useState(0);

  const handleAddCourse = () => {
    if (newCourse.trim() !== "" && (numberOfStudents > 0 || numberOfStudents !== "")) {
      setCourses([...courses, { name: newCourse, students: numberOfStudents }]);
      setNewCourse("");
    }
  };


  return (
    <div className="overall">
      <Nav2 navItems={adminNavItems} subtitle="Admin Panel" />
      <div className="academic-container" >
        <Dir />
        <h1>Academics Overview</h1>

        {/* Courses Section */}
        <div className="hd-sec-container">
          <div className="courses-section">
            <h2>Classes</h2>
            <ul>
              {courses.map((course, index) => (
                <li key={index} className="course-item">
                  <span className="course-name">{course.name}</span>
                  <span className="course-students">{course.students} students</span>
                </li>
              ))}
            </ul>
            <div className="add-course-section">
              <input
                type="text"
                placeholder="Enter class"
                value={newCourse}
                onChange={(e) => setNewCourse(e.target.value)}
                className="add-course-input"
              />
              <input
                type="number"
                placeholder="Number of Students"
                value={numberOfStudents}
                onChange={(e) => setNumberOfStudents(e.target.value)}
                className="add-course-input"
              />
              <button className="add-course-btn" onClick={handleAddCourse}>
                update
              </button>
            </div>
            <div className="hd-secd">
            {/* Class Schedule Section */}
            <div className="schedule-section">
              <h2>Class Schedule</h2>
              <p>Coming soon...</p>
            </div>

            {/* Exams and Results Section */}
            <div className="exams-section">
              <h2>Exams and Results</h2>
              <p>Manage upcoming exams and upload results here.</p>
              <div className="pop-up">
                <ul>
                  <Link to="exam-schedule"><li >Exam Schedule</li></Link>
                  <Link to="upload-result"><li>Upload Results</li></Link>
                  <Link to="view-results"><li>View Results</li></Link>
                </ul>
              </div>
            </div>

            {/* Academic Calendar Section */}
            <div className="calendar-section">
              <h2>Academic Calendar</h2>
              <p>View important academic dates and events.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academics;