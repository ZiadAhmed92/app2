import React from 'react'
import '../Css/First.css'
import math2 from './img2/math2.jpg'
import engines from './img2/engines.jpg'
import englis2 from './img2/englis2.jpg'
import hydrolic from './img2/hydrolic.jpg'
import safety from './img2/safety.jpg'
import electronic from './img2/electronic.jpg'
import { Link } from 'react-router-dom'
export default function Second() {
  return (
    <div>
     <div className="container">
      <div className="row my-4">
        <div className="box mb-4 col-md-4 text-center ">
           <Link to='/Math2'className='link'>  
             <img src={math2} alt='img' className='w-100'/>
             <h1 className='text-white'>math 2</h1>
           </Link>
        </div>
       <div className="box mb-4 col-md-4 text-center ">
           <Link to='/Electric'className='link'>
             <img src={electronic} alt='img' className='physics w-100'/>
             <h1 className='text-white'>Electricity</h1>
           </Link>
        </div>
      <div className="box mb-4 col-md-4 text-center ">
           <Link to='/Engines' className='link'> 
             <img src={engines} alt='img' className='it w-100'/>
             <h1 className='text-white'> Engines </h1>
          </Link>
        </div>
      <div className="box mb-4 col-md-4 text-center ">
          <Link to='/English2'className='link'> 
             <img src={englis2} alt='img' className='englis w-100'/>
             <h1 className='text-white'>English 2</h1>
          </Link>
        </div>
        <div className="box mb-4 col-md-4 text-center ">
          <Link to='/Safety'className='link'>
             <img src={safety} alt='img' className='safety w-100'/>
             <h1 className='text-white'>Safety </h1>
          </Link>
        </div>
       <div className="box mb-4 col-md-4 text-center ">
          <Link to='/Hydraulics'className='link'>
             <img src={hydrolic} alt='img' className='work w-100'/>
             <h1 className='text-white'> Hydraulics</h1>
          </Link>
        </div>

        
       
       
        
      </div>
     </div> 
     
     

    </div>
  )
}
