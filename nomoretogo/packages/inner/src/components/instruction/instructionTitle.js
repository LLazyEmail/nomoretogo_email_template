// Component instruction title
import Errors from './Errors';

const instructionTitleMainBlock = (instructionTitle) => {
  return `<p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><strong>${instructionTitle}</strong></p>`;
};

export default function (instructionTitle) {
  const error = new Errors('instructionTitle');

  if (instructionTitle == '') {
    error.add('No title text');
  }

  return instructionTitleMainBlock(instructionTitle);
}
