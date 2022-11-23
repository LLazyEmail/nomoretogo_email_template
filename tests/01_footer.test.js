import { FooterHTMLString } from '../src/display/displayFooter';





describe('footer display method must be initialized', () => {
  
     test('display footer', () => {
    expect(typeof FooterHTMLString === 'string').toBe(true);
  });
  
});



describe('writing components into files', () => {
  
    test('write footer', () => {
      const string4 = printFooter();


      writingFile(string4, 'nmtg');

      expect(printFooter()).toBeDefined();


  });
  
});

