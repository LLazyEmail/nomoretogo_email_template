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
