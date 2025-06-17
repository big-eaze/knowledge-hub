import React from "react";
import Nav2 from "../components/Nav2";
import Dir from "../components/Dir";
import { studentNavItems } from "../data/navItems";
import "./StudentAnnouncements.css";

function StudentAnnouncements() {
  const announcements = [
    {
      id: 1,
      title: "Exam Schedule Released",
      date: "2025-06-15",
      description: "The exam schedule for the upcoming semester has been released. Please check the academics section for details.",
    },
    {
      id: 2,
      title: "Assignment Deadline Extended",
      date: "2025-06-12",
      description: "The deadline for the Math assignment has been extended to June 20, 2025.",
    },
    {
      id: 3,
      title: "New Course Materials Available",
      date: "2025-06-10",
      description: "New course materials for Physics 101 are now available in the resources section.",
    },
  ];

  return (
    <div className="student-announcements">
      <Nav2 navItems={studentNavItems} subtitle="Student Panel" />
      <div className="announcements-container">
        <Dir />
        <h1 className="announcements-heading">Announcements</h1>
        <ul className="announcements-list">
          {announcements.map((announcement) => (
            <li key={announcement.id} className="announcement-item">
              <h2 className="announcement-title">{announcement.title}</h2>
              <p className="announcement-date">{announcement.date}</p>
              <p className="announcement-description">{announcement.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentAnnouncements;