import HeadString from '../src/display/displayHead';
import ContentMainTableWrapString from '../src/display/displayContentMainTableWrap';
import contentString from '../src/display/displayContent';
import instructionString from '../src/display/displayInstruction';
import SupportContactString from '../src/display/displaySupportContact';
import ImageAfterSupporComponentString from '../src/display/displayImageAfterSupportComponent';
import FooterString from '../src/display/displayFooter';
///////////////////////////////////////////////////////////
import BodyComponentString from '../src/display/displayBodyComponent';
import tempTest from '../src/display/displayTempTest';

import {
  printHead,
  printContent,
  printMain,
  printFooter,
  printBody,
  writingFile
} from '../src/methods';

describe('test fullComponent', () => {
<<<<<<< HEAD
  // test('rendering HeadString Component', () => {
  //   console.log(HeadString);
  // });
  // test('rendering ContentMainTableWrap Component', () => {
  //   console.log(ContentMainTableWrapString);
  // });
  // test('rendering Content Component', () => {
  //   console.log(contentString);
  // });
  // test('rendering Instruction Component', () => {
  //   console.log(instructionString);
  // });
  // test('rendering SupportContact Component', () => {
  //   console.log(SupportContactString);
  // });
  // test('rendering ImageAfterSupporComponent Component', () => {
  //   console.log(ImageAfterSupporComponentString);
  // });
  // test('rendering FooterString Component', () => {
  //   console.log(FooterString);
  // });
  ///////////////////////////////////////////////////////////
  // test('rendering BodyString Component', () => {
  //   console.log(BodyComponentString);
  // });
  test('rendering tempTest Component', () => {
    console.log(tempTest);
  });
});
=======
  test('rendering HeadString Component', () => {
    console.log(HeadString);
  });

  test('rendering ContentMainTableWrap Component', () => {
    console.log(ContentMainTableWrapString);
  });

  test('rendering Content Component', () => {
    console.log(contentString);
  });

  test('rendering Instruction Component', () => {
    console.log(instructionString);
  });

  test('rendering SupportContact Component', () => {
    console.log(SupportContactString);
  });

  test('rendering ImageAfterSupporComponent Component', () => {
    console.log(ImageAfterSupporComponentString);
  });

  test('rendering FooterString Component', () => {
    console.log(FooterString);
  });

  ///////////////////////////////////////////////////////////
  test('rendering  BodyString Component', () => {
    console.log(BodyComponentString);
  });
  // test('rendering tempTest Component', () => {
  //   console.log(tempTest);
  // });

  test('write head', () => {

    const string1 = printHead();

    // console.log(string);
    expect(printHead()).toBeDefined();

    writingFile(string1);
  });
  test('write content', () => {

    const string2 = printContent();

    // console.log(string);
    expect(printContent()).toBeDefined();

    writingFile(string2);
  });

  test('write main', () => {

    const string3 = printMain();

    // console.log(string);
    expect(printMain()).toBeDefined();

    writingFile(string3);
  });
  test('write head', () => {

    const string4 = printFooter();    
    expect(printFooter()).toBeDefined();

    writingFile(string4);
  });
  test('write body', () => {

    const string5 = printBody();

    // console.log(string);
    expect(printBody()).toBeDefined();

    writingFile(string5);
  });


});
>>>>>>> b0e98621e9b3159af4c9bf15f633fc77f54eb453
