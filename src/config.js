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





export {
  contact,
  mailingAddress,
  unsubscribe,
  pathToImages,
  pathMainLogo,
  pathSocialIcons,
  titleHead,
  socialsLinksParams,
  instructionComponentParams
};
