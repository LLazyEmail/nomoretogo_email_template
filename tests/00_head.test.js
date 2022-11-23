import HeadHTMLString from '../src/display/displayHead';



describe('head display method must be initialized', () => {
  
     test('display head', () => {
      expect(typeof HeadHTMLString === 'string').toBe(true);
    });

  
});
