import { Link} from 'react-router-dom'

import audi from '../../src/assets/img/audi 1.png'
import  user from '../../src/assets/img/user.png'
import frame from '../../src/assets/img/frame.png'
import doors from '../../src/assets/img/doors.png'
import air from '../../src/assets/img/air.png'


const Details = ()=>{



    return(
        <div>
              <ul>
                <li><Link to={"/"} className='text-blue-400  absolute top-10 left-24 font-black text-3xl underline'>Home</Link></li>
            </ul>
<div>

<div className='flex  gap-40 mt-40'>
<div className='baba'>
    <img src={audi} alt="" className='audi' />
</div>
<div className='flex flex-col'>
   <div className=' border-2 border-blue-500  w-max px-4 py-1 mb-2  text-center text-blue-600 rounded-lg'>WHY CHOOSE US</div>
  <h1 className='font-serif text-3xl mb-5'>We offer the best experience with our  rentalcars</h1>
  <div className='flex flex-col gap-3'>
  <div className='flex'> <img src={user} alt="user" />  <p className='font-serif text-xl text-gray-500'>2 passanger</p> </div>
  <div className='flex'> <img src={frame} alt="frame" />  <p className='font-serif text-xl text-gray-500'>manual</p> </div>
  <div className='flex'> <img src={doors} alt="doors" />  <p className='font-serif text-xl text-gray-500'> doors</p> </div>
  <div className='flex'> <img src={air} alt="air" />  <p className='font-serif text-xl text-gray-500'>Air condition</p> </div>

    
  </div>
   
</div>
</div>
</div>
</div>
        
    )
}



export default Details;