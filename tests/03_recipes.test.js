import { writingFile } from 'markup-generator';

import RecipesHTMLString from '../src/display/displayRecipes';



describe('content display method must be initialized', () => {
  
    test('display content', () => {
    expect(typeof RecipesHTMLString === 'string').toBe(true);
  });

  
});


describe('writing components into files', () => {
  
    test('write content', () => {

      writingFile(RecipesHTMLString, 'nmtg-content');

      expect(RecipesHTMLString).toBeDefined();
  });
  
  
});
