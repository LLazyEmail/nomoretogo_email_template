// Error
import Errors from './Errors';
// Config file
import { pathToImages } from '../config.js';

const createImage = (params) => {
  const { src, width } = params;
  return `<img src="${src}" border="0" alt="" width="${width}" style="display: block;">`;
};

function createPathToImage(src) {
  return pathToImages + src;
}

// Main image block start
const mainBlock = (id, href, src ) => {

  // const imagePath = ;

  const obj = {
    src: createPathToImage(src),
    width: 267 // TODO check if width must be string
  }
  const imageComponent = createImage(obj); 


  return `<a href="${href}" data-link-id="${id}" target="_self">${imageComponent}</a>`;

    //   <img 
    //     src="${image}" 
    //     border="0" alt="" 
    //     width="267" style="display: block;">
    // </a>`;

};

// Main image block end

const imgWrapper = (params) => {
  const { id, href, src } = params;

  const error = Errors('image');

  if (id == '') {
    error.add('No id');
  }
  if (href == '') {
    error.add('No href');
  }
  if (src == '') {
    error.add('No src');
  }

  return mainBlock(id, href, src);
}

export {
  createImage,
  imgWrapper
}

export default function (params) {
  const { id, href, src } = params;

  const error = Errors('image');

  if (id == '') {
    error.add('No id');
  }
  if (href == '') {
    error.add('No href');
  }
  if (src == '') {
    error.add('No src');
  }

  return mainBlock(id, href, src);
}
