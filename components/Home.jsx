import {Link} from 'react-router-dom'
import bg from '../../src/assets/img/car 2 1.png'
import logo from '../../src/assets/img/RENT_MUSICAL_BLUE-logo-4631FB248C-seeklogo.com.png'
import carC from '../../src/assets/img/car3.png'
import star from '../../src/assets/img/star.png'
import user from '../../src/assets/img/user.png'
import air from '../../src/assets/img/air.png'
import frame from '../../src/assets/img/frame.png'
import calendar from '../../src/assets/img/calender.png'
import carIcon from '../../src/assets/img/car-icon.png'
import location from '../../src/assets/img/location.png'
import nissan from '../../src/assets/img/nissan.png'
import volvo from '../../src/assets/img/volvo.png'
import ac from '../../src/assets/img/ac.png'
import audi from '../../src/assets/img/audi.png'
import Audi from '../../src/assets/img/Audi 1.png'
import yser from '../../src/assets/img/yser.png'
import message from '../../src/assets/img/message.png'
import chat from '../../src/assets/img/chat.png'
import girl from '../../src/assets/img/girl.png'
import boy from '../../src/assets/img/boy.png'
import ios from '../../src/assets/img/ios.png'
import iphone from '../../src/assets/img/iphone.png'
import andriod from '../../src/assets/img/andriod.png'
import Footer from './footer'
import axios from 'axios'
import { useEffect , useState } from 'react'
const Home = ()=>{

const [data,setData] = useState([])
const [value,setValue] = useState('')



const search = () => {
    
    return data.filter((item) =>
        item.car.toUpperCase().includes(value.toUpperCase())); 
  };


    const getData = async()=>{

        try{
            let response =await axios.get(`https://myfakeapi.com/api/cars?limit=4`)
            console.log(response.data.cars)
            setData(response.data.cars)

           
        }
        catch(error){

       console.log(error)
    }
    }
    useEffect(()=>{

        getData()
    },[])

    return(
        <div>
      
       <div className='flex flex-row mt-10 ml-20 gap-4'>
        <img src={logo} alt="logo" className='w-10 h-10' id='logo'/> 
        <h2 className='text-xl  text-start text-blue-400 font-extrabold mt-1 hover:text-blue-800'>RENTCARS</h2>
        </div>
          
              <div className='w-[100%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                <div className='m-20 mt-40  text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl  '>
                <h2 className=' font-extrabold'>Find, book and rent <div> a car <span className='text-blue-500'> Easily</span></div></h2>
                <p className='mt-4 font-serif w-[100%] m-auto text-lg'>get a car wherever and wherever you need it with your ios and android. </p>
                </div>
                <div className='father'>
                    <img src={bg} alt="bg" id='bg' />
                </div>
            </div>





<div className='w-[100%]'>

    <div>
    <input type="text" placeholder='Search' className='w-[60%] h-[4vh] mt-4 shadow-2xl border-2 border-gray-300 p-1  rounded-l-lg outline-blue-400' value={value} onChange={(e)=>setValue(e.target.value)}/>
    <button className='bg-blue-600 text-white h-[4vh] rounded-r-lg w-[16vw]'>search</button>
    </div>

    <div> 
         <h2 className='text-4xl font-semibold mt-16'>Most popular cars rental deals</h2>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[80%] m-auto mt-20 gap-4  place-items-center'>
    
    {search().map((el)=>(
 <div key={el.id} className='flex flex-col text-center border-2 mb-4 shadow-2xl w-[100%] gap-2 justify-center  py-2'>

 <img src={carC} alt="image" className='w-50 h-50 m-auto mb-5'  />
 <h2 className='text-start font-medium text-2xl mt-2 ml-6 mb-4'>{el.car}</h2>

<div className='flex px-3'> 
    <img src={star} alt="" className='w-5 h-5'/>
    <span className='font-bold'>4.6</span>
    <span className='text-gray-400'>(1345 reviews)</span>
</div>


 <div className='flex justify-around'>

 <div className='flex px-2'>
        <img src={user} alt="" className='w-6 h-6' />
        <span className='text-gray-600 text-sm sm:text-sm md:text-md lg:text-md xl:text-md'>2 Passanger</span>
    </div>

    <div className='flex'>
        <img src={air} alt="" className='w-5 h-6' />
        <span className='text-gray-600 text-sm sm:text-sm md:text-md lg:text-md xl:text-md'>Air condtioning</span>
    </div>
 </div>

 <div className='flex font-serif  justify-around'>
    <div className='flex '> 
    <span className='text-gray-600 ml-1  text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg'> {el.car_model}</span></div>
    <div className='flex ml-28'>
        <img src={frame} alt="" className='w-5 h-5' />
        <span className='text-gray-600  text-sm sm:text-sm md:text-md lg:text-md xl:text-md'>{el.car_model_year}</span>
    </div>
 </div>

<hr style={{ height: '2px', width: '80%', backgroundColor: 'gray', margin: 'auto'}}/>

 <div className='flex justify-around px-4 mt-5'>
     <h5 className='font-serif'>price</h5>
     <h5 className='font-bold'>{el.price}</h5>
 </div>
 <br />
 <button className='m-auto bg-blue-600 text-white h-[4vh]  rounded-lg p-2 px-10 hover:bg-blue-800'><Link to={'details'}>view details</Link></button>
</div>
    ))}
    
         
    </div>
  
    <div className='text-start flex justify-center mt-16'> 
    <button className='m-auto border-2 border-gray-600 text-xl text-gray-400 h-[4vh] rounded-lg px-6 hover:bg-gray-600 hover:text-white'><Link to={'allcars'}> show All vehicles</Link></button>
  </div>

  <h1 className='font-semibold text-3xl mt-16'>Most popular cars rental deals</h1>


<div className='mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 w-[60%] m-auto'>
    <div className='flex flex-col'>
        <img src={calendar} alt=""  className='m-auto'/>
        <h1 className=' font-medium'>Book your car</h1>
        <p  className='text-gray-600'>Book your car and we will deliver it directly to you</p>
    </div>
   
    <div className='flex flex-col'>
        <img src={carIcon} alt="" className='m-auto' />
        <h1 className=' font-medium'>Pick-up date</h1>
        <p className='text-gray-600'>Select your pick up date and time to book your car</p>
    </div>

    <div className='flex flex-col'>
        <img src={location} alt="location" className='m-auto' />
        <h1 className='font-medium'>Choose location</h1>
        <p className='text-gray-600'>Choose your and find your best car</p>
    </div>


</div>
  
    </div>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 place-items-center m-auto w-[100%] mt-40'>
    <div>  <img src={nissan} alt=""  className='w-30 h-30 ' /></div>
    <div>  <img src={ac} alt=""  className='w-30 h-30 ' /></div>
    <div>  <img src={audi} alt=""  className='w-30 h-30 ' /></div>
    <div>  <img src={volvo} alt=""  className='w-30 h-30 ' /></div>

  
  
</div>
  
  <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  m-auto place-items-center mt-40'>

<div className='flex flex-col'>
 <div className=' border-2 border-blue-500  w-max px-4 py-1 mb-2  text-center text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white m-auto'>WHY CHOOSE US</div>
  <h1 className='font-serif text-3xl mb-5'>We offer the best experience with our  rentalcars</h1>
  <div className='flex flex-col gap-3'>
  <div className='flex'> <img src={yser} alt="user"/> <div><h1 className='text-lg font-semibold text-start'>Best price guaranteed</h1>  <p className='font-serif text-gray-500'>Find a lower price? Well refund you 100% of the difference.</p></div> </div>
  <div className='flex'> <img src={message} alt="doors"/> <div><h1 className='text-lg font-semibold text-start'>24 hour car delivery </h1>  <p className='font-serif text-gray-500'>Book your car anytime and we will deliver it directly to you.</p></div>   </div>
  <div className='flex'> <img src={chat} alt="air"/> <div><h1 className='text-lg font-semibold text-start'>Best price guaranteed </h1>  <p className='font-serif text-gray-500'>Find a lower price? Well refund you 100% of the difference.</p></div></div>
  <div className='flex'> <img src={yser} alt="frame"/> <div><h1 className='text-lg font-semibold text-start'>24/7 technical support</h1>  <p className='font-serif text-gray-500'>Have a question? Contact Rentcars support any time when you have problem.</p></div>  </div>
  </div>
  </div> 
  <div className='mt-20'>
    <img src={Audi} alt="Audi" className='audi' />
</div>
</div>


<h1 className='font-semibold text-4xl mt-24 mb-10'>Most popular cars rental deals</h1>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>

    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 border w-fit border-gray-200 rounded-lg p-4 shadow-2xl ml-[5%] '>
        <img src={boy} alt="" className='w-80 h-80' />
    <div>
            <h1 className='font-semibold text-2xl  text-center px-3 '>5.5  stars</h1>
            <div className='flex justify-center'>
            <img src={star} alt="" className='w-5 h-5' />
            <img src={star} alt="" className='w-5 h-5' />
            <img src={star} alt="" className='w-5 h-5' />
            <img src={star} alt="" className='w-5 h-5' />
            <img src={star} alt="" className='w-5 h-5' />
            </div>

            <p  className='font-serif w-40 p-2 text-center m-auto '>“I feel very secure when using caretalls services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
            <br />
           <h3 className='text-center px-2'>Charlie Johnson</h3>
            <p className='text-gray-500 text-sm text-center px-2'>Last updated 3 mins ago</p>
        </div>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 border w-fit border-gray-200 rounded-lg p-4 shadow-2xl '>
        <img src={girl} alt="" className='w-80 h-80' />
    <div>
            <h1 className='font-semibold text-2xl  text-center px-3 '>5.5  stars</h1>
            <div className='flex justify-center'>
            <img src={star} alt="" className='w-5 h-5' />
            <img src={star} alt="" className='w-5 h-5' />
            <img src={star} alt="" className='w-5 h-5' />
            <img src={star} alt="" className='w-5 h-5' />
            <img src={star} alt="" className='w-5 h-5' />
            </div>
            
            <p  className='font-serif w-40 p-2 text-center m-auto '>“I feel very secure when using caretalls services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
            <br />
           <h3 className='text-center px-2'>Charlie Johnson</h3>
            <p className='text-gray-500 text-sm text-center px-2'>Last updated 3 mins ago</p>
        </div>
    </div>
    


   

    
    </div>
</div>


<div className='mt-16 text-start ml-[10%]'>
<h1 className='font-semibold text-4xl mb-3'> Download Rentcars App for <span className='text-blue-500'>FREE</span> </h1>
<p className='text-gray-500 text-sm'>For faster, easier booking and exclusive deals.</p>
<div>
    <img src={iphone} alt="" className='absolute right-[5%] w-[20%] h-80 hidden sm:hidden md:hidden lg:block xl:block' />
</div>


<div className='flex gap-5 mt-5'>
    <img src={ios} alt="" />
    <img src={andriod} alt="" />
</div>
<div className='flex flex-col gap-3 mt-5'>
    <input type="text" placeholder='Name' className='border border-gray-100 rounded-xl p-2 w-60 bg-blue-200'/>
    <input type="text" placeholder='Phone number' className='border border-gray-100 rounded-xl p-2 w-60 bg-blue-200'/>
    <input type="text" placeholder='Email' className='border border-gray-100 rounded-xl p-2 w-60 bg-blue-200'/>    
    <button className='bg-blue-600 w-max p-2 rounded-xl text-white flex text-center px-4 ml-20'>send</button>

</div>



</div>


<div className='w-[100%] bg-gray-800 flex justify-center mt-10'>

   <Footer />
</div>

</div>


    )
}



export default Home;


