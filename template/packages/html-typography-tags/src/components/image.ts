// Error
// import Errors from './Errors';
// Config file
// import { pathToImages } from '../config.js';

// TODO to solve everything related to image component
// passing src, width, error handling, etc
// plus to move it later between other templates

import stringifyAttributes from 'stringify-attributes';
// import stringifyAttributes from '../../node_modules/stringify-attributes';

function imageComponent (params: { src: string, width: string }) {


  const attributes = {
    src: params.src,
    style: `display: block;`,
    border:"0",
    alt:"",
    width: params.width, // TODO test if it can work withot width param or not
  };


  const attributesStr = stringifyAttributes(attributes);

  // console.log(attributesStr);

  return  `<img ${attributesStr} >`;

}


export default imageComponent;


//------------------------------------------
//------------------------------------------

//   const { id, href, src, width } = params;

//   const error = new Errors('image');

//   if (id == '') {
//     error.add('No id');
//   }
//   if (href == '') {
//     error.add('No href');
//   }
//   if (src == '') {
//     error.add('No src');
//   }

//------------------------------------------
//------------------------------------------

// import linkComponent from './link';



// const imageComponentOld = (attributes) => {
//   const { src, width } = attributes;

//   if(!width){
//     return  `<img src="${src}" border="0" alt=""  style="display: block;">`;
//   }

//   return `<img src="${src}" border="0" alt="" width="${width}" style="display: block;">`;
// } 

// if (typeof params != 'object') {
//   customError.add('"params" is not "object"');
// }

// if (typeof params.attributes == '') {
//   customError.add('empty attributes');
// }


  // const { src, width } = attributes;

  // if(!width){
  //   return  `<img src="${src}" border="0" alt=""  style="display: block;">`;
  // }


  // return `<img src="${src}" border="0" alt="" width="${width}" style="display: block;">`;
