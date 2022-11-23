import { FooterHTMLString } from '../src/display/displayFooter';





describe('footer display method must be initialized', () => {
  
     test('display footer', () => {
    expect(typeof FooterHTMLString === 'string').toBe(true);
  });
  
});
