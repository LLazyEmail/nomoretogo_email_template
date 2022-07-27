// Component contentSubTitleText
import Errors from './Errors';

const mainBlock = (subTitleText) => {
  return `<td align="center" class="bodyTitle" style="font-family: 'Poppins', sans-serif; font-size: 19px; font-weight: 400; line-height: 150%; color: #111111; text-transform: none; font-style: normal; text-decoration: none; text-align: center;">${subTitleText}</td>`;
};

export default function (subTitleText) {
  const error = new Errors('contentSubTitleText');

  if (subTitleText == '') {
    error.add('No subTitleText');
  }

  return mainBlock(subTitleText);
}
