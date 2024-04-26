import React from 'react'
import { useNavigate } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Navbar from '../Navbar/Navbar';
import Foot from '../Navbar/Footer';
import Props from './Props';

import Data from './Data'


function Home() {

  const navigate = useNavigate();

  const biriyani = () => {
    navigate('/biriyani');
  };
  const northindian=()=>{
    navigate('/northindian')
  }
  const chines=()=>{{
    navigate('/chines')
  }}
  const southindia=()=>{
    navigate('/southindia')
  }
  const order=()=>{
    navigate('/order')
  }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div>
      <Navbar/>

      <h1 className='text-secondary my-3 p-2' >What's on your mind?</h1>
      
      <Carousel className='p-5' responsive={responsive}>
  <div>
    <img
      style={{ cursor: 'pointer' }} // Corrected syntax for inline styles
      onClick={biriyani}
      src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png'
    />
  </div>
  <div>
    <img
    style={{ cursor: 'pointer' }} // Corrected syntax for inline styles
    onClick={northindian}
     src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png' />
  </div>
  <div>
    <img
    style={{ cursor: 'pointer' }} // Corrected syntax for inline styles
    onClick={chines}
     src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png' />
  </div>
  <div>
    <img
    style={{ cursor: 'pointer' }} // Corrected syntax for inline styles
    onClick={southindia}
    src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png' />
  </div>
  <div>
    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png' />
  </div>
  <div>
    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png' />
  </div>
  <div>
    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png' />
  </div>
  <div>
    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png' />
  </div>
</Carousel>

    
        <h1 className='text-secondary m-3'>Trending</h1>
        
        <div className='container my-5'>
        <div className='row'>
          {Data.map((values, index) => (
            <div className='col-md-4 mb-3' key={index}>
              <Props
                imgsrc={values.imgsrc}
                h={values.h}
                rate={values.rate}
                link={values.link}
                btn={values.btn} 
              />
            </div>
          ))}
        </div>
      </div>

            
      
        <Foot/>
    </div>
  )
}


export default Home;