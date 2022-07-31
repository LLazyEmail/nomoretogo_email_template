// Create recipe component

// Error
import Errors from './Errors';
import { image } from 'nmtg-template-mailerlite-typography';
const error = new Errors('recipeComponent');

// Get title start
const titleComponent = (title) => {
  if (title == '') {
    error.add('title');
  }
  return `<strong><span style="font-size: 16px;">${title}</span></strong>`;
};
// Get title end

// Get text start
const textComponent = (text) => {
  if (text == '') {
    error.add('text');
  }

  return `${text}`;
};
// Get text end

// Main Recipe block start
const mainRecipe = (id, href, src, title, text) => {
  const recipeImage = image(id, href, src);

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" 
  class="mlContentTable marginBottom" style="width: 267px; min-width: 267px;">
    <tbody><tr>
      <td id="imageBlock-14" align="center">
       ${recipeImage}
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

export default (data) => {
  const { id, href, src, title, text } = data;
  return mainRecipe(id, href, src, title, text);

  return mainRecipe(id, href, src, title, text);
};
