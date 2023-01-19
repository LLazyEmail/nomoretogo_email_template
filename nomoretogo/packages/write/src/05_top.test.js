import { writingFile } from 'markup-generator';

import headerComponent from '../src/components/headerComponent';

const topPanel = headerComponent();

console.log(topPanel)


describe('content display method must be initialized', () => {
  

    test('variable not undefined', () => {
      expect(topPanel).toBeDefined();
    });
  
    test('display content', () => {
      expect(typeof topPanel === 'string').toBe(true);
    });
  
    
  });


  describe('writing components into files', () => {
  
    test('write content', () => {

      writingFile(topPanel, 'nmtg-top');

      expect(topPanel).toBeDefined();
  });
  
  
});
