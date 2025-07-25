import React from 'react'
import campus from '../assets/rmkcampus.jpg'
import rmklogo from  '../assets/rmklogo.png'
import cclogo from '../assets/cclogo.png'

function Header() {
     
  return (
  
    <div>
        <header className='header flex items-center gap-32'>
            
      <img  className="header__img" src={rmklogo} alt="" />
      <div className='flex  px-10 py-5 bg-green-800 text-white font-extrabold text-3xl border-none rounded-xl '>
       <h1>R.M.K Engineering College (An AUTONOMOUS INSTUTION) </h1>
     
      </div>

  
      </header>
      <h1 className='bg-white inline absolute right-[20px] px-5 py-1 rounded-xl top-[120px]'>CampusConnect Powered by RMK Students</h1>
    </div>
  )
}

export default Header
