import buttonComponent from "../components/button";
const config = {id: '12', href: 'https://google.com', text: 'Bla bla bla'};

describe('buttonComponent', () => {
  it('should work', () => {
    const buttonHTML = buttonComponent(config); console.log(buttonHTML);

    expect(typeof buttonHTML).toBe('string');
  });
});
