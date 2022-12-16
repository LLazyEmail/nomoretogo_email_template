import { footerComponent } from "../src/index";

// const data = [

// ];

var params = {
  topTitle: 'No More To-Go Facebook Users:',
  // topLinkHref: '123',
  topLinkId: 'fb-group',
  topLinkText: 'Facebook Group Page',
  bottomTitle: 'Have Questions?',
  // bottomLinkHref: '123',
  bottomLinkId: 'email-id',
  bottomLinkText: '"How Can We Help',
  // bottomTextContact: 'bottomTextContact',
};


const title = 'No More To-Go';

const imagePath = 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/amazon.png';

const socialsLinksParams = [{ 
  href: "https://www.facebook.com/nomoretogo/", 
  src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/facebook.webp"
}]

describe('testing our functions', () => {
  test('footer component isset', () => {
    expect(typeof footerComponent === 'function').toBe(true);
  });
});




// describe('content display method must be initialized', () => {
  
//   test('variable not undefined', () => {

//       const HTML = recipeComponent(data);

//       console.log(HTML);

//       expect(HTML).toBeDefined();
//   });
  

// });