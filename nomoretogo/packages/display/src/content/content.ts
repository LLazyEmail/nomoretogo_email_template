import { 
  StaticContentComponent, contentContainer, 
  WeeklyMenuContainerComponent 
}  from 'inner';



import { recipes } from '../config';


import RecipesHTMLString from './_recipes';
// import recipesSectionComponent from '../components/recipesSectionComponent';


// This thing is for static content

// Title
const title = {
  hrefTitle: 'https://nomoretogo.com/login/',
  // hrefTitle: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/logo.jpeg',
  
  idTitle: 'logoBlock-4',
  textTitle: 'Weekly Menu',
};

// Sub title
const subtitle = "April 22nd, 2021";
// 'contentSubTitleParams'; // April 22nd, 2021


// This part is also static
// TODO to pass later as one content variable for being able to edit it.
// maybe with separators, paragraphs, new lines or something
// Description
const description = {
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
  title,
  subtitle,
  description,

  // TODO Do we need to pass recipes inside Static component 
  // or maybe we can move it out here?
  recipes,
  buttonParams,

});


console.log(contentHTMLString);

export default contentHTMLString;
