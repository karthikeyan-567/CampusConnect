import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Sidebar  from '../components/Sidebar'
import LostFound from './LostFound'
function Home() {
  return (
    <div>
      <Header></Header>
      <hr className='w-[80%] h-[2px] bg-white relative left-[15%] ' />
       <Navbar> </Navbar>
       <Sidebar></Sidebar>
       <LostFound></LostFound>
    </div>
  )
}

export default Home
