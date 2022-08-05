import {
  printHead,
  printContent,
  printMain,
  printFooter,
  printBody,
} from '../src/methods';

import { writingFile } from 'markup-generator';

describe('writing components into files', () => {

  test('write head', () => {
    const string1 = printHead();

    // console.log(string);
    expect(string1).toBeDefined();

    writingFile(string1, 'nmtg');
  });

  // test('write content', () => {
  //   const string2 = printContent();

  //   // console.log(string);
    

  //   writingFile(string2, 'nmtg');

  //   expect(printContent()).toBeDefined();
  // });

  // test('write main', () => {
  //   const string3 = printMain();

  //   // console.log(string);
  //   expect(printMain()).toBeDefined();

  //   writingFile(string3, 'nmtg');
  // });

  test('write head', () => {
    const string4 = printFooter();


    writingFile(string4, 'nmtg');
    
    expect(printFooter()).toBeDefined();


  });

  
  // test('write body', () => {
  //   const string5 = printBody();

  //   // console.log(string);
  //   expect(printBody()).toBeDefined();

  //   writingFile(string5, 'nmtg');
  // });
});
