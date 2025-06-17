import { useState } from "react"
import Dir from "../components/Dir"
import { Link } from "react-router-dom"
import staffsInfo from "../data/staff"
import Nav2 from "../components/Nav2"
import { adminNavItems } from "../data/navItems"
import './Staffs.css'


function Staffs() {

  const [staff, setStaff] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [staffDetails, setStaffDetails] = useState(staffsInfo);



  // State variables for the form inputs 
  // These will hold the values entered by the user
  // and will be used to create a new staff member
  // when the form is submitted



  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [className, setClassName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");



  const rowsPerPage = 10;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = staffDetails.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(staffDetails.length / rowsPerPage);




  //this calculates the data of the current page!


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  function handleClick(idx) {
    const updatedInfo = staffDetails.filter((_, i) => i !== idx);
    setStaffDetails(updatedInfo);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Staff Added!");
  };

  return (
    <div className="overall">
      <Nav2 navItems={adminNavItems} subtitle="Admin Panel" />
      <div className="sub-staff-container">
        <Dir />
        <div className="sub-ff-container">
          <div className="parents-header">
            <div className={`announcement-stud ${staff ? '' : 'active-announce'}`} onClick={() => setStaff(false)}><img className="folder" src="folder.png" /><Link>All Staffs</Link></div>
            <div className={`announcement-stud ${staff ? 'active-announce' : ''}`} onClick={() => setStaff(true)}><img className="folder" src="folder.png" /><Link>Add staff</Link></div>
          </div>
          <div className={`${staff ? 'inactive-staff' : 'active-staff'}`}>
            <div className="filter-container">
              <select defaultValue={""}>
                <option value="" disabled hidden >Add filter</option>
                <option value="JSS1">JSS1</option>
                <option value="JSS2">JSS2</option>
                <option value="JSS3">JSS3</option>
                <option value="SS1">SS1</option>
                <option value="SS2">SS2</option>
                <option value="SS3">SS3</option>
              </select>
              <div className="staff-count">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}> 🡄  </button>
                <h3>{currentPage}</h3>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}> 🡆 </button>
              </div>
            </div>
            <div className="staff-info">
              <table className="staff-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Class</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((data, idx) => (
                    <tr key={idx}>
                      <td>{data.name}</td>
                      <td>{data.subject}</td>
                      <td>{data.class}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.gender}</td>
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
          <div className={staff ? 'active-staff' : 'inactive-staff'}>
            <form className="add-staff-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="add-staff-input"
              />
              <input
                type="text"
                placeholder="Subject"
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
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="add-staff-input"
              />
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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


export default Staffs;