// Component heading
import Errors from './Errors';

// to add later <td align="center" class="bodyTitle" style="font-family: 'Poppins', sans-serif; font-size: 28px; font-weight: 700; line-height: 150%; color: #111111; text-transform: none; font-style: normal; text-decoration: none; text-align: center;">
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

// to add later as subheading
// <td align="center" class="bodyTitle" style="font-family: 'Poppins', sans-serif; font-size: 19px; font-weight: 400; line-height: 150%; color: #111111; text-transform: none; font-style: normal; text-decoration: none; text-align: center;">April 22nd, 2021</td>
