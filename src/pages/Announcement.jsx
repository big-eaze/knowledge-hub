import { useRef, useState } from "react";
import Dir from "../components/Dir";
import "./Announcement.css"
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import Nav2 from "../components/Nav2";
import { adminNavItems } from "../data/navItems";

function Announcement() {

  const buttonref = useRef(null);


  

  function handleClick() {
    setStudentAddAnn(true);
  }

  const [studentAddAnn, setStudentAddAnn] = useState(false);
  const [staffAddAnn, setStaffAddAnn] = useState(false);
  const [studStaff, setStudStaff] = useState(false);

  const studentAnnouncements = [
    {
      title: "Mid-Term Break",
      date: "12/10/2023",
      time: "10:10 AM",
      content: "There will be a mid-term break from 12th to 16th October, 2023."
    },
    {
      title: "School Resumption",
      date: "20/10/2023",
      time: "09:00 AM",
      content: "School will resume on 20th October, 2023. All students are expected to be present."
    },
    {

      title: "Sports Day",
      date: "25/10/2023",
      time: "08:00 AM",
      content: "The annual sports day will take place on 25th October, 2023. All students are encouraged to participate."
    },
    {
      title: "Parent-Teacher Meeting",
      date: "30/10/2023",
      time: "05:00 PM",
      content: "A parent-teacher meeting will be held on 30th October, 2023. Parents are encouraged to attend. "
    },
    {
      title: "School Resumption",
      date: "20/10/2023",
      time: "09:00 AM",
      content: "School will resume on 20th October, 2023. All students are expected to be present. School will resume on 20th October, 2023. All students are expected to be present School will resume on 20th October, 2023. All students are expected to be present School will resume on 20th October, 2023. All students are expected to be present School will resume on 20th October, 2023. All students are expected to be present School will resume on 20th October, 2023. All students are expected to be present School will resume on 20th October, 2023. All students are expected to be present School will resume on 20th October, 2023. All students are expected to be present School will resume on 20th October, 2023. All students are expected to be present School will resume on 20th October, 2023. All students are expected to be present School will resume on 20th October, 2023. All students are expected to be present"
    }
  ]

  const staffAnnouncements = [
    {

      title: "Mid-Term Break",
      date: "12/10/2023",
      time: "10:10 AM",
      content: "There will be a mid-term break from 12th to 16th October, 2023."
    },
    {
      title: "School Resumption",
      date: "20/10/2023",
      time: "09:00 AM",
      content: "School will resume on 20th October, 2023. All students are expected to be present."
    },
    {
      title: "Sports Day",
      date: "25/10/2023",
      time: "08:00 AM",
      content: "The annual sports day will take place on 25th October, 2023. All students are encouraged to participate."
    },
    {
      title: "Teacher Meeting",
      date: "30/10/2023",
      time: "05:00 PM",
      content: "A teacher's meeting will be held after school closes. Teachers are encouraged to attend. "
    },
  ]


  return (
    <div className="overall" >
      <Nav2 navItems={adminNavItems} subtitle="Admin Panel"/>
      <div className="sub-ann-container" >
        <Dir />
        <div className="parents-header">
          <div className={`announcement-stud ${studStaff ? '' : 'active-announce'}`} onClick={() => setStudStaff(false)}><img className="folder" src="folder.png" /><Link>To Students</Link></div>
          <div className={`announcement-stud ${studStaff ? 'active-announce' : ''}`} onClick={() => setStudStaff(true)}><img className="folder" src="folder.png" /><Link>To staffs</Link></div>
        </div>
        <div className={studStaff ? 'inactive-staff-announce' : 'active-staff-announce'}>
          <div className="announcement-container">
            <div className="announcement-header">
              <h3>Announcement</h3>
            </div>
            <div className={`announcement-content ${studentAddAnn ? 'hide' : 'show'}`}>
              <div className="announcement-info">
                {
                  studentAnnouncements.map((info) => (
                    <ul key={crypto.randomUUID()}>
                      <li className="announcement-title"><strong>{info.title}</strong></li>
                      <li className="announcement-text">{info.date} - {info.time}</li>
                      <li className="announcement-text">{info.content}</li>
                    </ul>
                  ))
                }
              </div>
            </div>
            <button ref={buttonref} onClick={handleClick} className={`add-announcement ${studentAddAnn ? 'hide' : 'show'}`}><FaPlus className="plus-icon" size={20} /></button>
          </div>
          <div className={`announcement-form ${studentAddAnn ? 'show' : 'hide'}`}>
            <form>
              <div className="top">
                <input className="subject" placeholder="subject:" />
                <div>
                  <label className="to">to:</label>
                  <select defaultValue="">
                    <option value="" hidden disabled></option>
                    <option value="students">students</option>
                    <option value="staffs" >staffs</option>
                    <option value="students and staffs">Both</option>
                  </select>
                </div>
              </div>
              <div className="text-btn">
                <textarea className="announcement-textarea" placeholder="Write your announcement here..."></textarea>
                <button

                  className="submit-announcement"
                  onClick={() => setStudentAddAnn(false)}

                >Submit Announcement</button>
              </div>
            </form>
          </div>
        </div>

        <div className={studStaff ? 'active-staff-announce' : 'inactive-staff-announce'} >
          <div className="announcement-container">
            <div className="announcement-header">
              <h3>Announcement</h3>
            </div>
            <div className={`announcement-content ${staffAddAnn ? 'hide' : 'show'}`}>
              <div className="announcement-info">
                {
                  staffAnnouncements.map((info) => (
                    <ul key={crypto.randomUUID()}>
                      <li className="announcement-title"><strong>{info.title}</strong></li>
                      <li className="announcement-text">{info.date} - {info.time}</li>
                      <li className="announcement-text">{info.content}</li>
                    </ul>
                  ))
                }
              </div>

            </div>
            <button onClick={() => setStaffAddAnn(true)} className={`add-announcement ${staffAddAnn ? 'hide' : 'show'}`}><FaPlus className="plus-icon" size={20} /></button>
          </div>
          <div className={`announcement-form ${staffAddAnn ? 'show' : 'hide'}`}>
            <form>
              <div className="top">
                <input className="subject" placeholder="subject:" />
                <div>
                  <label className="to">to:</label>
                  <select defaultValue="">
                    <option value="" hidden disabled></option>
                    <option value="students">students</option>
                    <option value="staffs" >staffs</option>
                    <option value="students and staffs">Both</option>
                  </select>
                </div>
              </div>
              <div className="text-btn">
                <textarea className="announcement-textarea" placeholder="Write your announcement here..."></textarea>
                <button className="submit-announcement" onClick={() => setStaffAddAnn(false)}>Submit Announcement</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )

}

export default Announcement;