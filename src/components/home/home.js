import React from 'react'
import './home.css';
import Dashbord from '../dashbord/dashbord';

function Home() {

  const menuItems = [
    {name:"Dashboard", component:'Dashboard',icon:"fa-solid fa-table-columns"},
    {name:"Perks",component:'Perks',icon:"fa-solid fa-hand-holding-heart"},
    {name:"Addons",component:'Addons',icon:"fa-solid fa-puzzle-piece"},
    {name:"FAQ",component:'FAQ',icon:"fa-solid fa-clipboard-question"},
    {name:"Support",component:'Support',icon:"fa-solid fa-comment-dots"}
]

  return (
    <div className='main'>
       <div className='header'>
          <div className='logo'><h1 className=''>P</h1></div>
          <div className='dropdown'><span className='dropdown-span'>Hello Rifaque </span> 
          <select className='dropdown-button'>
            <option value=""></option>
             <option value="">Logout</option>
           </select>
          </div>
      </div>
       <div className='section' >
       <div className='nav'>
        <div className='profile'>
          <img src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1694978049~exp=1694978649~hmac=e2b59807653860ac4e268280582e2f924b5f037df601375fd26ee826449fe5af' alt=''></img>
           <h3 className='profile-name'>Rifaque</h3>
           <p>hello@gmail.com</p>
         </div>
         <div className='menuItems'>
            {menuItems.map((menu, key)=>(
              <div className='menu' key={key}>
                <i className={` menuicon ${menu.icon}`}></i>
                <p className='menu-name'>{menu.name}</p>
              </div>
            ))}
         </div>
         <div className='logout'>
                <p>Logout</p>
                <i className="fa-solid fa-power-off"></i>
              </div>
       </div>
       <div className='section1'>
          <Dashbord/>
       </div>
       <div className='rigth-navbar'>
            <span className='notification'><i class="fa-solid fa-bell"></i></span>
            <div className='emptydiv'></div>
            <span className='plus-icon'><i class="fa-solid fa-plus"></i></span> 
       </div>
       </div>
      
    </div>
  )
}

export default Home
