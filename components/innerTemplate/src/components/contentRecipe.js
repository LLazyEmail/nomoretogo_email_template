// Content Recipe
import Errors from './Errors';

// Config file
import { pathToImages } from '../../../config';

// Create path to image start
function createPathToImage(src) {
  return pathToImages + src;
}
// Create path to image end

// Get text start
const textComponent = (text) => {
  return `${text}`;
};
// Get text end

// Get image start
const imageComponent = (id, href, src) => {
  return `<a href="${href}" data-link-id="${id}" target="_self">
    <img 
      src="${createPathToImage(
        src
      )}" border="0" alt="" width="267" style="display: block;">
      </a>`;
};
// Get image end

// Get title start
const titleComponent = (title) => {
  if (!title) {
    createError('title');
  }
  return `<strong><span style="font-size: 16px;">${title}</span></strong>`;
};
// Get title end

const mainBlock = (id, href, src, title, text) => {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" class="mlContentTable marginBottom" style="width: 267px; min-width: 267px;">
  <tbody><tr>
    <td id="imageBlock-14" align="center">
     ${imageComponent(id, href, src)}
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 0px 20px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
        <tbody><tr>
          <td height="20" class="spacingHeight-20"></td>
        </tr>
        <tr>
          <td align="left" class="bodyTitle" id="bodyText-14" style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
            <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%; text-align: center;"><strong></strong>
            ${titleComponent(title)}
            <br>
            ${textComponent(text)}
            </p>
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  </tbody></table>`;
};

export default function (params) {
  const { id, href, src, title, text } = params;
  const error = new Errors('contentRecipe');

  if (id == '') {
    error.add('No id');
  }
  if (href == '') {
    error.add('No href');
  }
  if (src == '') {
    error.add('No src');
  }
  if (title == '') {
    error.add('No title');
  }
  if (text == '') {
    error.add('No text');
  }

  return mainBlock(id, href, src, title, text);
}
