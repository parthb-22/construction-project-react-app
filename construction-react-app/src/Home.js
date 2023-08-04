import React from 'react'
import logo from './images/logo3.png'
import user from './images/user.png'
import logout from './images/logout-fotor-20230731125431.png'
import contact from './images/phonebook.png'
function Home() {
  return (
    <div className="home">
      <img src={logo} alt="" id='logo'/>
      <ul>
        <li>
            <img src={user} alt="" />
            Projects
        </li>
        <li>
            <img src={contact} alt="" />
            Contacts
        </li>
        <li>
            <img src={logout} alt="" />
            Logout
        </li>
      </ul>
    </div>
  )
}

export default Home
