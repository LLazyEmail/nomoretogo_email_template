import ContentHTMLString from '../src/display/displayContent';



describe('content display method must be initialized', () => {
  
    test('display content', () => {
    expect(typeof ContentHTMLString === 'string').toBe(true);
  });

  
});
