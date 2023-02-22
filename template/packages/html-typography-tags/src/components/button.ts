// import Errors from './Errors';
import linkComponent from './link';
import stringifyAttributes from 'stringify-attributes';

// import stringifyAttributes from '../../node_modules/stringify-attributes';

// stringifyAttributes({
//   rainbow: true,
//   number: 1,
//   multiple: ['a', 'b'],
// });

// function printToConsole(s: string) {
//   console.log(s);
// }


function buttonComponent(params: { id: string, href: string, text: string }) {
   const attributes = {
    id: params.id,
    class: `mlContentButton`,
    href: params.href,
    'data-link-id': params.id,
    style: `font-family: "Poppins", sans-serif; background-color: #d6685e; border-radius: 3px; color: #ffffff; display: inline-block; font-size: 17px; font-weight: 400; line-height: 23px; padding: 15px 0 15px 0; text-align: center; text-decoration: none; width: 260px;`,
  };

  const attributesStr = stringifyAttributes(attributes);

  console.log(attributesStr);

  const linkObject = {
    attributes: attributesStr,
    content: params.text
  }

  console.log(linkObject);

  return linkComponent(linkObject);
}

// // we will probably loose id param during changes that Arthur is doing.
// const bottonTwoMainBlock = (id, href, text) => {
//   return `<a class="mlContentButton" href="${href}" data-link-id="${id}"
//   style="font-family: "Poppins", sans-serif; background-color: #d6685e; border-radius: 3px; color: #ffffff; display: inline-block; font-size: 17px; font-weight: 400; line-height: 23px; padding: 15px 0 15px 0; text-align: center; text-decoration: none; width: 260px;" target="_self">
//   ${text}
//   </a>`;
// };

export default buttonComponent;
