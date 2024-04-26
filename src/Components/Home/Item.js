// import { useParams } from 'react-router-dom';
// import props from './Data';
// // import { useState } from 'react';
// // import placeholderImage from "./imgg1.jpg";


// const ProductDetail = () => {
// // const [errorImage, setErrorImage] = useState(false);

// const { propsid } = useParams(''); // Get the productId from URL params
// // console.log(productId)

// const product = props.find(props => props.id === parseInt(propsid)); // Find the product by id

// // const handleErrorImage = () => {

// //     setErrorImage(true);

// //   }


//   // console.log(product)

//   if (!product) {

//     return <div>Product not found</div>;

//   }

// return (
// <div className='productDetail'>
// {/* <img src={errorImage ? placeholderImage:values.imgsrc}alt='product-img' className='productImage' onError={handleErrorImage}></img> */}
// <img src={props.imgsrc} alt='values-img' className='productImage'></img>
// <h2>{props.h}</h2>
// <p>Price: ${props.rate}</p>
// </div>
// );
// }
// export default ProductDetail;




import { useParams } from 'react-router-dom';

import Data from './Data';


const ProductDetail = () => {


  const { propsId } = useParams(" "); // Get the productId from URL params

   console.log(propsId)

  const props = Data.find(Data => Data.id === parseInt(propsId)); // Find the product by id



  if (!values) {

    return <div>Product not found</div>;

  }

  return (

    <div className='productDetail'>
      <img src={values.imgsrc} alt='values-img' className='productImage'></img>

      <h2>{values.h}</h2>

      <p>Price: ${values.rate}</p>

      
    </div>

  );

}


export default ProductDetail;


