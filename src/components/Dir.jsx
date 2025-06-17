import { FiMenu } from 'react-icons/fi';
import './Dir.css';
import { useContext } from 'react';
import { MenuContext } from '../Utils/MenuContext';



function Dir() {

  const { displayMenu, setDisplayMenu } = useContext(MenuContext);


  return (
    <>
      {/* Overlay */}
      {displayMenu && (
        <div
          className="overlay"
          onClick={() => setDisplayMenu(false)} // Close menu when overlay is clicked
        ></div>
      )}


      <div className='top-container'>
        <div className="first-section">
          <div className='input-menu-con'>
            <div className='menu-container' onClick={() => setDisplayMenu(true)}>
              <FiMenu className='fiMenu' size={20} />
            </div>
            <input className="search-input" placeholder="search" type="search" />
          </div>
          <h3>Welcome Sir!</h3>
        </div>
        <div className="second-section">Home ➤ <strong> Dashboard </strong></div>
      </div>
    </>

  )
}

export default Dir;