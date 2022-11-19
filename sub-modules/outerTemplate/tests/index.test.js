import { footerComponent } from "../src/index";

// const footerComponent = require('../src/components/footerComponent');


describe('testing our functions', () => {
  test('', () => {
    expect(typeof footerComponent === 'function').toBe(true);
  });
});
