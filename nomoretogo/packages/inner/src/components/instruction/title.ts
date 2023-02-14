// Component instruction title
// import Errors from './Errors';
import Errors from '../Errors';
import {
  strongComponent,
  paragraphComponent,
} from 'typo';

// TODO convert to a new version
const createTitle = (instructionTitle) => {
  return `<p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><strong>${instructionTitle}</strong></p>`;
};
export default createTitle;

// export default function (instructionTitle) {
//   const error = new Errors('instructionTitle');

//   if (instructionTitle == '') {
//     error.add('No title text');
//   }

//   return instructionTitleMainBlock(instructionTitle);
// }
// const createTitle = (title) => {
//   const content = { content: strongComponent(title) };

//   const titleParams = {
//     attributes: `style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"`,
//     content,
//   };
//   return paragraphComponent(titleParams);
// };
// export default createTitle;