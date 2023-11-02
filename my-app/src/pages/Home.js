import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {slider, settings } from '../componentes/Slider';
import '../index.css'

import {Header} from '../componentes/Header';
import ButtonForMore from '../componentes/ButtonForMore';
import { ProductsList } from '../componentes/ProductsList';


import { useContext , useState} from "react";
import { AuthContext } from "../contexts/AuthContext";


function Home(){
   // auth is used to change the state of auth and setAuth is used to change the state of auth
   const [auth, setAuth] = useContext(AuthContext);
   // In case user miss the password
   const [error, setError] = useState(false);

   // function to set auth to true
   const [password, setPassword] = useState('');

   const singIn = () =>{
    //  If password is secret then set auth to true
       if (password === 'secret'){
           setAuth(true);
           
       }else{
        //If password is not secret then set auth to false 
        //and setError to true
           setError(true);
          
       }
       // Reset password to empty string
       setPassword('');

   }
    return(
        <>
          {/* Header component */}
          <Header title='Home' />
          {/* Slider component */}
          <div className='banner m-16'>
            <Slider className='overflow-x-hidden overflow-y-hidden' {...settings}>
              {/* Mapping over banners array to create slides */}

              {slider.map((slider, index) => (
                // Adding slider.color to the className to change the background color
                <div key={index} className={`${slider.color} text-white `}>                  
                {/* Adding slider.src to the src to change the image */}
                <img className='w-full ' src={slider.src} alt='banner' />
                  <div className=' p-5'>
                    <h1 className='text-4xl font-bold '>{slider.h1}</h1>
                    <p >{slider.p}</p>
                    {/* ButtonForMore component with onClick event */}

                    <ButtonForMore className='hover:underline' text={slider.button} onClick={() => alert('More info about this product')} />
                  </div>
                </div>

              ))} 
            </Slider>
           

          </div>
           <main>
           {/* Section for displaying features */}
           <div className='flex  bg-gray-600 p-8 space-x-40 justify-center text-amber-400'>
             <h1>Best upgrade solutions</h1>
             <h1>Good Prices</h1>
             <h1>High quality webDesign</h1>
             <h1>Fast delivery</h1>
             <h1>Support 24/7</h1>
           </div>
            
           {/* Section for displaying products */}
           <section className='p-1 flex justify-center border border-gray-500'>
             <ProductsList />
           </section>  
            
            <div className="flex flex-col gap-4 m-16 text-white">
                {/* If error then show the error message otherwise null */}
                {error?             
                <p className="bg-red-600 text-white p-4 w-1/4 rounded-xl">You entered the worng password. Please, try again.</p>
                :null}

                <h1 className="text-4xl font-semibold" > Want see more? You are currently {auth ? 'signed in' : 'signed out'}</h1>
                <p> Enter to acess protect content</p>
                {/* Onchange event to set the password to the value of the input 
                  with target.value we get the value of the input
                */}
                <input onChange={(e)=> setPassword(e.target.value)} className="border-2 border-gray-300 outline-none w-1/4 p-2" type="password" placeholder="Enter your password" />
                 {/* onClick event to call singIn function */}
                <button onClick={singIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/4">
                    Sign-in
                </button>
            </div>
          </main>
        </>
    )
}
export {Home};