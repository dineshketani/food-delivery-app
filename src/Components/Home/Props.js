import React from 'react';
import './Props.css';
import { NavLink } from 'react-router-dom';
import values from './Data'

function Props(props) {
  return (
    // <div className='container'>
      // <div className='row'>
        // <div className='col-md-4 mb-3'>
          <div className="card">
            <img src={props.imgsrc} className="card-img-top imgg dimen" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.h}</h5>
              <h3 className='mt-3'><span>{props.rate}</span></h3>
              {/* <a href={props.link} target="_blank" className="btn btn-primary mt-2">{props.btn}</a> */}
              <NavLink to={`/props.links/${props.id}`} className="btn btn-outline-dark">{props.btn}</NavLink>
            </div>
          </div>
        // </div>
      // </div>
    // </div>
  );
}

export default Props;












// import React from 'react';
// import '/Users/apple/Desktop/my-new-react-app/src/components1/Home/Props.css'

// function Props(props) {
//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col-md-4 mb-3' >
//       <div className="card">
//         <img src={props.imgsrc} className="card-img-top imgg dimen" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{props.h}</h5>
//           <h3 className='mt-3'><span>{props.rate}</span></h3>
//           <a href={props.link} target="_blank" className="btn btn-primary mt-2">{props.btn}</a>
//         </div>
//       </div>
//       </div>
//       <div/>
//     </div>
//   );
// }

// export default Props;