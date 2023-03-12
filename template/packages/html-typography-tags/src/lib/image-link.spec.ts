import imageLink from "../components/imageLink";

const data = {
    id: 'imageBlock-26',
    href: 'https://www.nomoretogo.com/weekly-menu/',
    src: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe1.jpeg',
    //------
    title: 'Chipotle Cream Skillet Chicken',
    text: 'over Rice and Snap Peas',
    width: "600px"
};



describe('image link component', () => {
  it('should work', () => {

    const imageLinkHTML = imageLink(data); console.log(imageLinkHTML);
    expect(typeof imageLinkHTML).toBe('string');
  });
});
