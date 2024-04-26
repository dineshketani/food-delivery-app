import React from 'react'
import Navbar from '../Navbar/Navbar'
import Foot from '../Navbar/Footer'
import Data from './Data2';
import Props from './Props';

function Biriyani() {
  return (
    <div>
        <Navbar/>
        <h1 className='text-secondary m-3'>Biriyani</h1>
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

export default Biriyani