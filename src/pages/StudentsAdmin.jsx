import { useState } from "react";
import { Link } from "react-router-dom";
import Dir from "../components/Dir";
import studInfo from "../data/students";
import './StudentsAdmin.css';
import Nav2 from "../components/Nav2";
import { adminNavItems } from "../data/navItems";

function StudentsAdmin() {

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [className, setClassName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");


  const [student, setStudent] = useState(false);
  const [studDetails, setStudDetails] = useState(studInfo);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;


  

  const indexOfLastRow = currentPage * rowsPerPage; //1 * 10
  const indexOfFirstRow = indexOfLastRow - rowsPerPage //10 - 10 
  const currentRows = studDetails.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(studDetails.length / rowsPerPage);

  console.log(studDetails)
  
  function handleClick(idx) {
    const updatedInfo = studDetails.filter((_, i) => i !== idx);
    setStudDetails(updatedInfo);
  }


  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Staff Added!");
  }

  return (
    <div className="overall">
      <Nav2 navItems={adminNavItems} subtitle="Admin Panel"/>
      <div className="students-container">
        <Dir />
        <div className="sub-stud-container">
          <div className="students-header">
            <div className={`announcement-stud ${student ? '' : 'active-announce'}`} onClick={() => setStudent(false)}><img className="folder" src="folder.png" /><Link>All Students</Link></div>
            <div className={`announcement-stud ${student ? 'active-announce' : ''}`} onClick={() => setStudent(true)}><img className="folder" src="folder.png" /><Link>Add students</Link></div>
          </div>
          <div className={`staff-count ${student ? 'inactive-staff' : 'stud-count'}`}>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}> 🡄  </button>
            <h3>{currentPage}</h3>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}> 🡆 </button>
          </div>
          <div>
            <div className={student ? 'inactive-staff' : 'stud-info'}>
              <table className="stud-table">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Admission No.</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Parent-ContactNo.</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((data, idx) => (
                    <tr key={idx}>
                      <td>{data.id}</td>
                      <td>{data.admissionNo}</td>
                      <td>{data.name}</td>
                      <td>{data.class}</td>
                      <td>{data.gender}</td>
                      <td>{data.age}</td>
                      <td>{data.parentNo}</td>
                      <td>
                        <button onClick={() => handleClick(idx)}>Delete</button>
                      </td>
                    </tr>
                  )
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className={student ? 'active-staff' : 'inactive-staff'}>
            <form className="add-staff-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Admission No"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="add-staff-input"
              />
              <input
                type="text"
                placeholder="Name"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="add-staff-input"
              />
              <input
                type="text"
                placeholder="Class"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="add-staff-input"
              />

              <input
                type="text"
                placeholder="Age"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="add-staff-input"
              />
              <input
                type="text"
                placeholder="Parent's contact"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="add-staff-input"
              />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="add-staff-select"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <button type="submit" className="add-staff-btn">
                Add Staff
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentsAdmin;
// This file is for the Students Admin page, which will display a list of students and their details.
// It will include functionalities such as adding, editing, and deleting student records.
