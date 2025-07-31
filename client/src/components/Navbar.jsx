import React from 'react'

function Navbar() {
  return (
    <>
      <nav className='navbar w-[80%] relative left-[200px] p-3 top-[10px] bg-white flex ' >
        <ul className='flex gap-10  text-l navbar__list relative left-28 p-0 ' >
            <li>Home</li>
            <li>Announcements</li>
            <li>Events</li>
            <li>Emergecncy</li>
           
        </ul>
        <div className='navbar__btn relative left-[380px] flex gap-6'>
            <button>Login </button>
        <button>Register</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
