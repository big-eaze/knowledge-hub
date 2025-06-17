import React from "react";
import Nav2 from "../components/Nav2";
import Dir from "../components/Dir";
import { StaffNavItems } from "../data/navItems";
import "./StaffAnnouncement.css";

function StaffAnnouncement() {
  const announcements = [
    {
      id: 1,
      title: "Staff Meeting Scheduled",
      date: "2025-06-20",
      description: "A staff meeting has been scheduled for June 20, 2025, at 10:00 AM in the conference room.",
    },
    {
      id: 2,
      title: "New Course Materials",
      date: "2025-06-18",
      description: "New course materials for the upcoming semester are now available in the academics section.",
    },
    {
      id: 3,
      title: "Policy Update",
      date: "2025-06-15",
      description: "Please review the updated staff policies in the HR portal.",
    },
  ];

  return (
    <div className="staff-announcements">
      <Nav2 navItems={StaffNavItems} subtitle="Staff Panel" />
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

export default StaffAnnouncement;