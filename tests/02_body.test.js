import { writingFile } from 'markup-generator';

import { BodyHTMLString } from '../src/display/displayBody';



describe('body display method must be initialized', () => {
  
   // test('display body', () => {
  //   expect(BodyHTMLString === true).toBe(true);
  // });

  test('display body', () => {
    expect(typeof BodyHTMLString === 'string').toBe(true);
  });
  
});


describe('writing components into files', () => {
  
    test('write body', () => {
      const string5 = printBody();

      // console.log(string);
      expect(printBody()).toBeDefined();

      writingFile(string5, 'nmtg');
  });
});
