// Create recipe component

// Error
const RECIPE_ERROR = (variable) => `No ${variable} in recipeComponent`;

// Config file
import { pathToImages } from '../config.js';

// Create path to image start
function createPathToImage(src) {
  return pathToImages + src;
}
// Create path to image end

// Checking for errors start
function createError(variable) {
  throw new Error(RECIPE_ERROR(variable));
}
// Checking for errors end

// Get title start
const titleComponent = (title) => {
  if (!title) {
    createError('title');
  }
  return `<strong><span style="font-size: 16px;">${title}</span></strong>`;
};

// Get title end

// Get text start
const textComponent = (text) => {
  if (!text) {
    createError('text');
  }

  return `${text}`;
  // original version example
  // return `over Potato Poblano Hash<strong>&nbsp;<br></strong>and Broccolini `;
};
// Get text end

// Get image start
const imageComponent = (id, href, src) => {
  if (!id) {
    createError('id');
  }
  if (!href) {
    createError('href');
  }
  if (!src) {
    createError('src');
  }

  const image = createPathToImage(src);

  return `<a href="${href}" data-link-id="${id}" target="_self">
  <img 
    src="${image}" border="0" alt="" width="267" style="display: block;">
    </a>`;
};
// Get image end

// Main Recipe block start
const mainRecipe = (id, href, src, title, text) => {
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
// Main Recipe block end

export default function (data) {
  const { id, href, src, title, text } = data;
  return mainRecipe(id, href, src, title, text);
}
