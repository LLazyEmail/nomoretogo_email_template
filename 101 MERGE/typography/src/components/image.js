// Error
import Errors from './Errors';
// Config file
import { pathToImages } from '../config.js';

const imageComponent = (attributes) => {
  // const { src, width } = params;

  return `<img ${attributes}>`;
};

// return `<img src="${src}" border="0" alt="" width="${width}" style="display: block;">`;

//function createPathToImage(src) {
//  return pathToImages + src;
//}

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

  return imageMainBlock(id, href, src);
};

// Main image block start
// const obj = {
//   src: createPathToImage(src),
//   width: 267, // TODO check if width must be string
// };

const imageMainBlock = (id, href, src) => {
  // const imagePath = ;

  const attr = `src="${src}" 
    border="0" alt="" width="267" style="display: block;"`;
  const image = imageComponent(attr);

  const params = {
    attributes: `href="${href}" data-link-id="${id}" target="_self"`,
    content: image,
  };
  return linkComponent(params);
};

// Main image block end

export { imageComponent, imgWrapper };
