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

const viewInBrowserPath = 'https://preview.mailerlite.com/r0n8w0g0n6/1934358861754405982/l8n5/';
//-----------------------


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



// Title params
const instructionComponentParams = {
  title: 'Ingredients',
  text: `Saffron: Gives traditional Tandoori its famous yellow coloring. 
  This week we are using it in the marinade for the Yogurt Spiced Chicken. 
  It can be pretty expensive, so turmeric is a good alternative, providing the same color and very comparable taste.`,
  title2: 'Weekend Prep',
  
  text2: `Free up your evening and get a little chopping and prep work done this weekend.

  Slice and Dice: Cut the vegetables and store in zippered bags or divided containers.
  
  Make Ahead and Refrigerate: Make the sauce; Cook the noodles; Make the dressing; Make the spaetzle; Cook the rice.`,
};



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



// export default recipes; 



export {
  contact,
  mailingAddress,
  unsubscribe,
  pathToImages,
  pathMainLogo,
  pathSocialIcons,
  titleHead,
  socialsLinksParams,
  instructionComponentParams,
  recipes
};
