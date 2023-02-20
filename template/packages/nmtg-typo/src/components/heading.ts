// Component heading

import { linkComponent } from 'html-typography-tags';
import stringifyAttributes from 'stringify-attributes';
// import Errors from './Errors';

// TODO replace with a link component
const heading = (params: { hrefTitle: string, idTitle: string, textTitle: string }) => {




  // const aHEADNMTG = headingNMTG({
  //   href: hrefTitle,
  //   id: idTitle
  // })
  // console.log(aHEADNMTG);

  const attributes = {
    target: `_self`,
    href: params.hrefTitle,
    'data-link-id': params.idTitle,
    style: `text-decoration: none; color: #111111; text-transform: none; font-style: normal; text-decoration: none;`,
  };

  const attributesStr = stringifyAttributes(attributes);

  // console.log(attributesStr);

  return linkComponent({ content: params.textTitle, attributesStr });


  // return `<a href="${hrefTitle}" data-link-id="${idTitle}" style="text-decoration: none; color: #111111; text-transform: none; font-style: normal; text-decoration: none;" target="_self">${textTitle}</a>`;
};


export default heading;

// export default function (params) {
//   const { hrefTitle, idTitle, textTitle } = params;
//   const error = new Errors('contentTitleText');

//   if (hrefTitle == '') {
//     error.add('No hrefTitle');
//   }
//   if (idTitle == '') {
//     error.add('No idTitle');
//   }
//   if (textTitle == '') {
//     error.add('No textTitle');
//   }

//   return headingMainBlock(hrefTitle, idTitle, textTitle);
// }
