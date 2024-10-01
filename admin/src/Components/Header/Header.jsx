import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [sidetoggle, setSideToggle] = useState(false)
// const navigate = useNavigate()
  const handletoggleBtn = () => {
    setSideToggle(!sidetoggle)
  }

  const logout = () => {
    sessionStorage.clear()
    window.location.href ="/login"
  }
  return (
    <>
      <header>
        <div className="top-head">
          <div className="right">
            <h2>RADHE KRISHNA Admin Panel</h2>
            <div className="bar" onClick={handletoggleBtn}>
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="left">
            <a href="https://kanusrkgroup.in/" target="_blank">
              <i class="fa-solid fa-globe"></i>
              Go To Website
            </a>

            {/* <div className="logout">
              Log Out <i class="fa-solid fa-right-from-bracket"></i>
            </div> */}
          </div>

        </div>

        <div className={`rightNav ${sidetoggle ? "active" : ""} `}>
          <ul>
            <li><Link to="/dashboard" onClick={handletoggleBtn}> <i class="fa-solid fa-gauge"></i> Dashboard</Link></li>
            <li><Link to="/all-events" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Manage Events</Link></li>
            <li><Link to="/all-gallery" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Manage Galary</Link></li>
            <li><Link to="/all-dress" onClick={handletoggleBtn}> <i class="fa-solid fa-tag"></i> Manage Dress</Link></li>
            <li><Link to="/all-vedio" onClick={handletoggleBtn}> <i class="fa-regular fa-images"></i> Manage Vedio</Link></li>
            <li><Link to="/all-feedback" onClick={handletoggleBtn}> <i class="fa-regular fa-images"></i> Manage FeedBack</Link></li>
            <li><Link to="/all-registation" onClick={handletoggleBtn}> <i class="fa-regular fa-images"></i> Manage Registations</Link></li>
            <li><Link to="/all-donate" onClick={handletoggleBtn}> <i class="fa-regular fa-images"></i> Manage Donate</Link></li>
            <li><Link to="/all-query" onClick={handletoggleBtn}> <i class="fa-regular fa-images"></i> Manage Querys</Link></li>
            <button className='logout mb-5' onClick={logout}>Log Out <i class="fa-solid fa-right-from-bracket"></i></button>

          </ul>
        </div>

      </header>
    </>
  )
}

export default Header