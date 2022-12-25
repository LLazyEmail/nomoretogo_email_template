import { writeHTML, generateTemplateName } from 'markup-generator';
import HeadString from '../src/display/displayHead';
import contentString from '../src/display/displayContent';
import FooterString from '../src/display/displayFooter';
import BodyComponentString from '../src/display/displayBodyComponent';
// import tempTest from '../src/display/displayTempTest';
import { MainHTMLTemplate } from '../src/display/displayMain';

// console.log(HeadString)

const catchErrorTraceOutput = (error) => {
  // we need to test how it actually work
  const callerLine = error.stack.split('\n')[4];
  const index = callerLine.indexOf('at ');
  // eslint-disable-next-line no-unused-vars
  const clean = callerLine.slice(index + 2, callerLine.length);

  throw error;
};

const printHead = () => {
  return HeadString;
};

const printContent = () => {
  return contentString;
};

const printMain = () => {
  return MainHTMLTemplate;
};

const printFooter = () => {
  return FooterString;
};

const printBody = () => {
  return BodyComponentString;
};

const writingFile = (content) => {
  if (!content) {
    throw new Error('no content was passed into writingFile method');
  }

  const fileName = generateTemplateName('nmtg');

  try {
    writeHTML(fileName, content);
  } catch (err) {
    throw new Error(err.message);
    // console.log(err);
    //console.log(content);
  }
};

export {
  printHead,
  printContent,
  printMain,
  printFooter,
  printBody,
  writingFile,
  catchErrorTraceOutput,
};
