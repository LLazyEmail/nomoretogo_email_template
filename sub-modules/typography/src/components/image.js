// Error
import Errors from './Errors';
// Config file
import { pathToImages } from '../config.js';

import linkComponent from './link';


// TODO to solve everything related to image component
// passing src, width, error handling, etc
// plus to move it later between other templates

const imageComponentOld = (attributes) => {
  const { src, width } = attributes;

  if(!width){
    return  `<img src="${src}" border="0" alt=""  style="display: block;">`;
  }

  return `<img src="${src}" border="0" alt="" width="${width}" style="display: block;">`;
} 

// if (typeof params != 'object') {
//   customError.add('"params" is not "object"');
// }

// if (typeof params.attributes == '') {
//   customError.add('empty attributes');
// }
const imageComponent = (attributes) => {
  // const { src, width } = attributes;

  // if(!width){
  //   return  `<img src="${src}" border="0" alt=""  style="display: block;">`;
  // }


  // return `<img src="${src}" border="0" alt="" width="${width}" style="display: block;">`;

  return `<img ${attributes}>`;
};
// return `<img src="${src}" border="0" alt="" width="${width}" style="display: block;">`;

//function createPathToImage(src) {
//  return pathToImages + src;
//}

const imgWrapper = (params) => {
  const { id, href, src, width } = params;

  const error = new Errors('image');

  if (id == '') {
    error.add('No id');
  }
  if (href == '') {
    error.add('No href');
  }
  if (src == '') {
    error.add('No src');
  }

  return imageMainBlock(id, href, src, width);
};

// Main image block start
// const obj = {
//   src: createPathToImage(src),
//   width: 267, // TODO check if width must be string
// };

// TODO move into Link + Image component
const imageMainBlock = (id, href, src, width) => {


  // const imagePath = ;

  const attr = `src="${src}" 
    border="0" alt="" ` + 
    (width === undefined ? `` : `width="${width}"`) +
     ` style="display: block;"`;
     
  const image = imageComponent(attr);

  const params = {
    attributes: `href="${href}" data-link-id="${id}" target="_self"`,
    content: image,
  };
  return linkComponent(params);
};

// Main image block end

export { imageComponent, imgWrapper };
