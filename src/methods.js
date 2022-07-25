import { writeHTML, generateTemplateName } from 'markup-generator';
import HeadString from '../src/display/displayHead';
import contentString from '../src/display/displayContent';
import FooterString from '../src/display/displayFooter';
import BodyComponentString from '../src/display/displayBodyComponent';
import tempTest from '../src/display/displayTempTest';

const printHead = () => {
  return HeadString;
};
  
const printContent = () => {
  return contentString;
};

const printMain = () => {
  return tempTest;
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
      //console.log(err);
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
}