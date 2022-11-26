// Component heading
import Errors from './Errors';


const headingMainBlock = (hrefTitle, idTitle, textTitle) => {
  return `<a href="${hrefTitle}" data-link-id="${idTitle}" style="text-decoration: none; color: #111111; text-transform: none; font-style: normal; text-decoration: none;" target="_self">${textTitle}</a>`;
};

export default function (params) {
  const { hrefTitle, idTitle, textTitle } = params;
  const error = new Errors('contentTitleText');

  if (hrefTitle == '') {
    error.add('No hrefTitle');
  }
  if (idTitle == '') {
    error.add('No idTitle');
  }
  if (textTitle == '') {
    error.add('No textTitle');
  }

  return headingMainBlock(hrefTitle, idTitle, textTitle);
}
