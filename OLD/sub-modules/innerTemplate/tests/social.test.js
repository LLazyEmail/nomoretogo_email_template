import SocialPanelComponent  from "../src/components/socialPanel";


const data = [{ 
    href: "https://www.facebook.com/nomoretogo/", 
    src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/facebook.webp"
  },
  { 
    href: "https://twitter.com/nomoretogo", 
    src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/twitter.webp"
  },
  { 
    href: "https://www.instagram.com/nomoretogo/", 
    src: "https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/instagram.webp"
  }];


//   SocialPanelComponent(data);


describe(' method must be initialized', () => {
  
    test('social panel component', () => {

        const HTML = SocialPanelComponent(data);

        console.log(HTML);

        expect(HTML).toBeDefined();
    });
    

});