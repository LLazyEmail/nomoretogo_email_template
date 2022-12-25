// Content Button
import Errors from './Errors';
// import linkComponent from './link';

import { buttonComponent } from 'html-typography-tags';

// we will probably loose id param during changes that Arthur is doing.
// const buttonMainBlock = (id, href, text) => {

  


//   return `<a class="mlContentButton" href="${href}" data-link-id="${id}" 
//   style="font-family: "Poppins", sans-serif; background-color: #d6685e; border-radius: 3px; color: #ffffff; display: inline-block; font-size: 17px; font-weight: 400; line-height: 23px; padding: 15px 0 15px 0; text-align: center; text-decoration: none; width: 260px;" target="_self">
//   ${text}
//   </a>`;
// };

const buttonComponentOld = (params) => {
  const { id, href, text } = params;
  const error = new Errors('contentButton');

  if (id == '') {
    error.add('No id button');
  }
  if (href == '') {
    error.add('No href button');
  }
  if (text == '') {
    error.add('No text button');
  }

  const attributes = {
    class: `mlContentButton`,
    href: href,
    'data-link-id': id,
    style: `font-family: "Poppins", sans-serif; background-color: #d6685e; border-radius: 3px; color: #ffffff; display: inline-block; font-size: 17px; font-weight: 400; line-height: 23px; padding: 15px 0 15px 0; text-align: center; text-decoration: none; width: 260px;`,
  };

  const html = buttonComponent({ content: text, attributes })
  console.log(html);
  return html;

//   // const attributesStr = stringifyAttributes(attributes);
//   // console.log(attributesStr);
//   // return linkComponent({ content: params.text, attributes });
  // return buttonMainBlock(id, href, text);

};

export default buttonComponentOld;
