// Error
import Errors from '../Errors';

import { imageComponent } from 'typo';

import recipeName from './name';

const error = new Errors('recipeComponent');

// Main Recipe block start
const recipeComponent = (params) => {
  
   const { id, href, src, title, text } = params;

  // TODO add checks to this component
  const recipeImage = imageComponent({id, href, src});

  const titleLine = recipeName({ title, subtitle: text });

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" 
  class="mlContentTable marginBottom" style="width: 267px; min-width: 267px;">
    <tbody><tr>
      <td id="imageBlock-14" align="center">${recipeImage}</td>
    </tr>
    <tr>
      <td align="center" style="padding: 0px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
          <tbody><tr>
            <td height="20" class="spacingHeight-20"></td>
          </tr>
          <tr>
            <td align="left" class="bodyTitle" id="bodyText-14" 
            style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
              ${titleLine}
            </td>
          </tr>
        </tbody></table>
      </td>
    </tr>
    </tbody></table>`;
};
// Main Recipe block end

export default recipeComponent;
