import { writingFile } from 'markup-generator';

import FooterHTMLString from 'display';



describe('writing components into files', () => {
  
    test('write footer', () => {
      const string4 = FooterHTMLString;


      writingFile(string4, 'nmtg-footer');

      expect(FooterHTMLString).toBeDefined();


  });
  
});

