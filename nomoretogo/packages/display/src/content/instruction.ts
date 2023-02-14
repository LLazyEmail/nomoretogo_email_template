
// we are using this component inside displayMain

import { instructionContainerComponent } from 'inner';

// i decide to put content here, as we need a better structure with config file
const settings = {
  title: 'Ingredients',
  text: `Saffron: Gives traditional Tandoori its famous yellow coloring. 
  This week we are using it in the marinade for the Yogurt Spiced Chicken. 
  It can be pretty expensive, so turmeric is a good alternative, providing the same color and very comparable taste.`,
  title2: 'Weekend Prep',
  
  text2: `Free up your evening and get a little chopping and prep work done this weekend.

  Slice and Dice: Cut the vegetables and store in zippered bags or divided containers.
  
  Make Ahead and Refrigerate: Make the sauce; Cook the noodles; Make the dressing; Make the spaetzle; Cook the rice.`,
};


const instructionHTMLString = instructionContainerComponent(settings);

console.log(instructionHTMLString);

export default instructionHTMLString;
