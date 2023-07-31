import React from 'react'
import './Css/First.css'
import math from '../math.avif'
import physics from '../physics.png'
import it from '../it.jpg'
import englis from '../englis.jpg'
import draw from '../draw.jpg'
import work from '../work.jpg'
import { Link } from 'react-router-dom'
export default function First() {
  return (
    <div>
     <div className="container">
      <div className="row my-4">
        <div className="box mb-4 col-md-4 text-center ">
           <Link to='/math'className='link'>  
             <img src={math} alt='img' className='w-100'/>
             <h1 className='text-white'>رياضيات</h1>
           </Link>
        </div>
       <div className="box mb-4 col-md-4 text-center ">
           <Link to='/physics'className='link'>
             <img src={physics} alt='img' className='physics w-100'/>
             <h1 className='text-white'>فيزياء</h1>
           </Link>
        </div>
      <div className="box mb-4 col-md-4 text-center ">
           <Link to='/it' className='link'> 
             <img src={it} alt='img' className='it w-100'/>
             <h1 className='text-white'>تكنولوجيا المعلومات </h1>
          </Link>
        </div>
      <div className="box mb-4 col-md-4 text-center ">
          <Link to='/englis'className='link'> 
             <img src={englis} alt='img' className='englis w-100'/>
             <h1 className='text-white'>انجليزى</h1>
          </Link>
        </div>
        <div className="box mb-4 col-md-4 text-center ">
          <Link to='/draw'className='link'>
             <img src={draw} alt='img' className=' w-100'/>
             <h1 className='text-white'>رسم فنى</h1>
          </Link>
        </div>
       <div className="box mb-4 col-md-4 text-center ">
          <Link to='/work'className='link'>
             <img src={work} alt='img' className='work w-100'/>
             <h1 className='text-white'>اساسيات ورش</h1>
          </Link>
        </div>

        
       
       
        
      </div>
     </div> 
     
     

    </div>
  )
}
