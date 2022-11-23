import { MainHTMLString } from '../src/display/displayMain';


describe('main display method must be initialized', () => {
  
    test('display main', () => {
    expect(typeof MainHTMLString === 'string').toBe(true);
  });
  
  
});


describe('writing components into files', () => {
  test('write main', () => {
    const string3 = printMain();

    // console.log(string);
    expect(printMain()).toBeDefined();

    writingFile(string3, 'nmtg');
  });
  
});


