// Create image component

// Error
import Errors from './Errors';

// Config file
import { pathToImages } from '../config.js';

// Create path to image start
function createPathToImage(src) {
  return pathToImages + src;
}
// Create path to image end

// Main image block start
const mainBlock = (id, href, src) => {
  return `<a href="${href}" data-link-id="${id}" target="_self">
  <img 
    src="${createPathToImage(
      src
    )}" border="0" alt="" width="267" style="display: block;">
    </a>`;
};

// Main image block end

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
