import { 
  StaticContentComponent, 
  contentContainer
}  from 'nmtg-template-mailerlite-inner';

import {   WeeklyMenuContainerComponent } from 'nmtg-template-layout-weekly';

import { recipes } from '../config';


import RecipesHTMLString from './_recipes';
// import recipesSectionComponent from '../components/recipesSectionComponent';


// This thing is for static content

// Title
// const titleVar = 'Weekly Menu';

const titleVar = {
  hrefTitle: 'https://nomoretogo.com/login/',
  // hrefTitle: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/logo.jpeg',
  
  idTitle: 'logoBlock-4',
  textTitle: 'Weekly Menu',
};

// Sub title
const subtitleVar = "April 22nd, 2021";
// Description
const descriptionVar = {
  textTop: 'We have a very diverse line-up of meals for this week. Kicking off the week we have a delicious flaky salmon with creamy chipotle sauce. Followed by Korean Barbecue Beef, a quick and outstanding dinner! And oh my- the Saucy Shrimp Salad is amazing! Don’t miss the Pork Schnitzel with German Spaetzle. Overall, my family was blown away by this week and I hope yours is too. Enjoy!!',
  textBottom: `Happy Cooking,` + "\n" +
  `Stacey, Sloane, and the No More To-Go Team`,
};

// TODO rename to Weekly Menu button and move to config file
const buttonParams = {
  id: '04-22-2021',
  href: 'https://www.nomoretogo.com/weekly-menu/',
  text: `Get This Week's Menu`,
};



const contentHTMLString = StaticContentComponent({
  titleVar,
  subtitleVar,
  descriptionVar,

  // TODO Do we need to pass recipes inside Static component 
  // or maybe we can move it out here?
  recipes,
  buttonParams,

});


console.log(contentHTMLString);

export default contentHTMLString;
