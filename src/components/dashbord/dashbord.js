import React from 'react'
import './dashboard.css'

function Dashbord() {

  const plans = [
    {name:"Basic", rate:89.99, offerRate:9.99, users:25, storage:25,color:'#deb046'},
    {name:"Standard", rate:189.99, offerRate:99.99, users:50, storage:60,color:'#f06767'},
    {name:"Premium", rate:389.99, offerRate:199.99, users:75, storage:100,color:'#eb44d2'},
]

  
  return (
    <div className='dashboard-main'>
      <h2>Choose a plan that just rigth for you! </h2>
      <div className='dashboard-section1'>
        {plans.map((item,key)=>(
          <div className='card1' key={key}>
          <h3 >{item.name}</h3>
          <p className='strikeP'>$ {item.rate}/mo</p>
          <h3>$ {item.offerRate}/mo</h3>
          <button style={{backgroundColor:item.color, border:'none', padding:'5px'}}>Get Started <i class="fa-solid fa-arrow-right"></i></button>
          <hr/>
          <p>What you will get</p>
          <div className='plan-feutures-main'>
            <div className='plan-feutures'><i class="fa-solid fa-user"></i><p>Up to {item.users} Users</p></div>
            <div className='plan-feutures'><i class="fa-solid fa-cloud"></i><p>Up to {item.storage}gb storage</p></div>
            <div className='plan-feutures'><i class="fa-solid fa-envelope"></i><p>Email Support</p></div>
          </div>
       </div>

        ))}
       
       
    </div>
      <div className='dashboard-section2'>
      <div className='card2'>
          <div>
          <p>Lets Connect</p>
          <h2>Free Starter</h2>
           <p>sghi;jinjgsbnjigjhjhjnnjijhxjxkvjbf</p>
           <button>Get Started <i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div>
          <p>What you will get:</p>
           <div className='card2-feautures'>
             <div className='plan-feutures'><i class="fa-solid fa-user"></i><p>Up to 25 Users</p></div>
             <div className='plan-feutures'><i class="fa-solid fa-cloud"></i><p>Up to 25gb storage</p></div>
             <div className='plan-feutures'><i class="fa-solid fa-envelope"></i><p>Email Support</p></div>
          </div>
          </div>
        </div>
        <div className='card2'>
          <div>
          <p>Lets Connect</p>
          <h2>Free Starter</h2>
           <p>sghi;jinjgsbnjigjhjhjnnjijhxjxkvjbf</p>
           <button>Get Started <i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div>
          <p>What you will get:</p>
           <div className='card2-feautures'>
             <div className='plan-feutures'><i class="fa-solid fa-user"></i><p>Up to 25 Users</p></div>
             <div className='plan-feutures'><i class="fa-solid fa-cloud"></i><p>Up to 25gb storage</p></div>
             <div className='plan-feutures'><i class="fa-solid fa-envelope"></i><p>Email Support</p></div>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Dashbord
