// Create recipe component

// Error
import Errors from './Errors';
import {
  imageComponent,
  strong,
  paragraphComponent,
} from 'nmtg-template-mailerlite-typography';
const error = new Errors('recipeComponent');

// Get title start
const titleComponent = (title) => {
  if (title == '') {
    error.add('title');
  }

  const string = `<span style="font-size: 16px;">${title}</span>`;

  return strong(string);
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

const recipeName = (params) => {
  const { title, subtitle } = params;

  const content = `${titleComponent(title)} <br> ${textComponent(subtitle)}`;

  const config = {
    attributes:
      'style="margin-top: 0px; margin-bottom: 0px; line-height: 150%; text-align: center;"',
    content,
  };
  return paragraphComponent(config);
};

const recipeComponent = (params) => {
  const { id, href, src, title, text } = params;
  console.log(params);
  
  if (!id) {
    throw new Error('invalid id');
  }
  if (!href) {
    throw new Error('invalid href');
  }
  if (!src) {
    throw new Error('invalid src');
  }


  // TODO add checks to this component
  const recipeImage = imageComponent(id, href, src);

console.log(recipeImage);

console.log( imageComponent({id, href, src}) );

  if (!recipeImage) {
    throw new Error('invalid recipeImage');
  }



  const titleLine = recipeName({ title, subtitle: text });

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" 
  class="mlContentTable marginBottom" style="width: 267px; min-width: 267px;">
    <tbody><tr>
      <td id="${id}" align="center">
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


export default recipeComponent;
