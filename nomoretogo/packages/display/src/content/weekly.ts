import { 
  WeeklyMenuContainerComponent,
  instructionContainerComponent
} from 'inner';

import { recipes } from '../config';

// TODO rename to Weekly Menu button and move to config file
const buttonParams = {
    id: '04-22-2021',
    href: 'https://www.nomoretogo.com/weekly-menu/',
    text: `Get This Week's Menu`,
  };

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




const WeeklyMenu = WeeklyMenuContainerComponent(
  recipes, 
  buttonParams
);



// const WeeklyMenuHTMLString = WeeklyMenuContainerComponent(
//         recipes, 
//         buttonParams
//       );

if (!WeeklyMenu) {
  throw new Error('WeeklyMenuHTMLString empty');
}


const instructionHTMLString = instructionContainerComponent(settings);

console.log(instructionHTMLString);


const WeeklyMenuHTMLString = WeeklyMenu + instructionHTMLString;

export default WeeklyMenuHTMLString;
