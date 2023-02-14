// Create config file
const contact = 'xxx';
const mailingAddress = 'contact@nomoretogo.com';

const unsubscribe =
  'https://unsubscribe.mailerlite.com/cnM9MTkzNDM1ODg2MTc1NDQwNTk4MiZyPTQ1MjExODcy.xzdaBWvETgC7VZFaorm5WH8v0shYzF1HHpZCvM-Su4g';
const pathToImages = '../data/images/';
const pathMainLogo = '../data/images/logo.jpeg';
const pathSocialIcons = '../data/images/';
const titleHead =
  'Korean Barbecue Beef | Pork Schnitzel | Bahn Mi Meatball Skewers'; 
const facebookURL = 'https://www.facebook.com/groups/nmtg.homecooks';

//////////////////
// FOOTER 

// Footer params
const socialsLinksParams = [{ 
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

// last part
// "Footer Data" 

const imagePath = 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/amazon.png';



var footerParams = {
  topTitle: 'No More To-Go Facebook Users:',
  // topLinkHref: '123',
  topLinkId: 'fb-group',
  topLinkText: 'Facebook Group Page',
  bottomTitle: 'Have Questions?',
  bottomLinkHref: 'https://nomoretogo.com/?utm_source=newsletter&utm_medium=email&utm_campaign=korean_barbecue_beef_pork_schnitzel_bahn_mi_meatball_skewers&utm_term=2022-12-16',
  bottomLinkId: 'email-id',
  bottomLinkText: '"How Can We Help',
  // bottomTextContact: 'bottomTextContact',
};
// contact@nomoretogo.com can be moved away as well.

const title = 'No More To-Go';


const footerData = {
  socialsLinksParams,
  imagePath,
  params: footerParams,
  title
} 

export {
  contact,
  mailingAddress,
  unsubscribe,
  pathToImages,
  pathMainLogo,
  pathSocialIcons,
  titleHead,

  //-------
  footerData
};
