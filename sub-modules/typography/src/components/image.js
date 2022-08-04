// Error
import Errors from './Errors';
// Config file
import { pathToImages } from '../config.js';

const imageComponent = (attributes) => {
  return `<img ${attributes}>`;
  // const { src, width } = params;
  // return `<img src="${src}" border="0" alt="" width="${width}" style="display: block;">`;
};

function createPathToImage(src) {
  return pathToImages + src;
}

// Main image block start
const mainBlock = (id, href, src) => {
  // const imagePath = ;

  // const obj = {
  //   src: createPathToImage(src),
  //   width: 267, // TODO check if width must be string
  // };
  const attr = `<img src="${src}" border="0" alt="" width="${width}" style="display: block;">`;
  const image = imageComponent(attr);

  const params = {
    attributes: `href="${href}" data-link-id="${id}"`,
    content: image,
  };
  return linkComponent(params);

  // TODO use linkComponent instead. but it will require to pass target variables too
  // return `<a href="${href}" data-link-id="${id}" target="_self">${image}</a>`;
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
};

export { imageComponent, imgWrapper };
