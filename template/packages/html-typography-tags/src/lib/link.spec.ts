import linkComponent from "../components/link";

const config = { id: '12', href: 'https://google.com', text: 'Bla bla bla' };


describe('linkComponent', () => {
  it('should work', () => {
    const linkHTML = linkComponent(config);
    expect(typeof linkHTML).toBe('string');
  });
});
