// Create config file
const contact = 'xxx';
const mailingAddress = 'contact@motoretogo.com';
const unsubscribe =
  'https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzY2OSZkPWo3eTJlNHY=.Ec_fY2NpMcOTAMs-XIr1n9exawt8fd3IsksWtSJ2kak';

const pathToImages = '../data/images/';
const pathMainLogo = '../data/images/logo.jpeg';
const pathSocialIcons = '../data/images/';
//------------------
const titleHead = 'Korean Barbecue Beef | Pork Schnitzel | Bahn Mi Meatball Skewers';

// const viewInBrowserPath = 'https://preview.mailerlite.com/r0n8w0g0n6/1934358861754405982/l8n5/';
//-----------------------


const viewInBrowserLinkParams = {
  id: 'view-id',
  href: 'https://preview.mailerlite.com/r0n8w0g0n6/1934358861754405982/l8n5/',
}; 




/////////////////
// CONTENT
// TODO separate static content with settings that is necessary for creating outer content template creation



// Recipe
const recipes = [
  {
    id: 'imageBlock-26',
    href: 'https://www.nomoretogo.com/weekly-menu/',
    src: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe1.jpeg',
    //------
    title: 'Chipotle Cream Skillet Chicken',
    text: 'over Rice and Snap Peas',
  },
  {
    id: 'imageBlock-21',
    href: 'https://www.nomoretogo.com/weekly-menu/',
    src: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe2.jpeg',
    //------
    title: 'Pork Schnitzel',
    text: 'with German Spaetzle and Green Beans',
  },
  {
    id: 'imageBlock-27',
    href: 'https://www.nomoretogo.com/weekly-menu/',
    src: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe3.jpeg',
    //------
    title: 'Bahn Mi Meatball Skewers',
    text: 'yummy',
  },
  {
    id: 'imageBlock-15',
    href: 'https://www.nomoretogo.com/weekly-menu/',
    src: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe4.jpeg',
    //------
    title: 'Korean Barbecue Beef with Sesame Rice Noodles',
    text: 'and Spicy Pickled Cucumbers and Carrots',
  },
  {
    id: 'imageBlock-14',
    href: 'https://www.nomoretogo.com/weekly-menu/',
    src: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe5.jpeg',
    //------
    title: 'Grilled Salmon with Chipotle Cream Sauce',
    text: 'over Potato Poblano Hash and Broccolini',
  },
  {
    id: 'imageBlock-20',
    href: 'https://www.nomoretogo.com/weekly-menu/',
    src: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/recipe6.jpeg',
    //------
    title: 'Saucy Grilled Shrimp',
    text: 'and a Corn and Radish Salad with Avocado Dressing',
  },
];

// Not sure if i want to keep this setting here right now
// I think it must be moved in hands of generator, as it's purely content matter
// Instructions
// const instructionComponentParams = {
//   title: 'Ingredients',
//   text: `Saffron: Gives traditional Tandoori its famous yellow coloring. 
//   This week we are using it in the marinade for the Yogurt Spiced Chicken. 
//   It can be pretty expensive, so turmeric is a good alternative, providing the same color and very comparable taste.`,
//   title2: 'Weekend Prep',
  
//   text2: `Free up your evening and get a little chopping and prep work done this weekend.

//   Slice and Dice: Cut the vegetables and store in zippered bags or divided containers.
  
//   Make Ahead and Refrigerate: Make the sauce; Cook the noodles; Make the dressing; Make the spaetzle; Cook the rice.`,
// };




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


const getFooterData = () => {

  return footerData;
}

const getRecipes = () => {
  return recipes;
}

 


export {
  viewInBrowserLinkParams,
  contact,
  mailingAddress,
  unsubscribe,
  pathToImages,
  pathMainLogo,
  pathSocialIcons,
  titleHead,
  // instructionComponentParams, // disabling it as i want to proceed with a static content line
  recipes,
  //footer data
  footerData
};
