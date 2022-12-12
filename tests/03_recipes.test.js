import { writingFile } from 'markup-generator';

import RecipesHTMLString from '../src/display/displayRecipes';

// console.log(RecipesHTMLString)


describe('content display method must be initialized', () => {
  

  test('variable not undefined', () => {
    expect(RecipesHTMLString).toBeDefined();
  });

  test('display content', () => {
    expect(typeof RecipesHTMLString === 'string').toBe(true);
  });

  
});


describe('writing components into files', () => {
  
    test('write content', () => {

      writingFile(RecipesHTMLString, 'nmtg-recipe');

      expect(RecipesHTMLString).toBeDefined();
  });
  
  
});
