import StaticComponent from '../components/StaticContentComponent';

// import recipesSectionComponent from '../components/recipesSectionComponent';
import { recipes } from '../config';


// Title
const contentTitleTextParams = {
  hrefTitle: 'https://nomoretogo.com/login/',
  // hrefTitle: 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/logo.jpeg',
  
  idTitle: 'logoBlock-4',
  textTitle: 'Weekly Menu',
};

// Sub title
const contentSubTitleParams = 'contentSubTitleParams'; // April 22nd, 2021

// TODO to pass later as one content variable for being able to edit it.
// maybe with separators, paragraphs, new lines or something
// Description
const contentTextDescriptionParams = {
  textTop: 'We have a very diverse line-up of meals for this week. Kicking off the week we have a delicious flaky salmon with creamy chipotle sauce. Followed by Korean Barbecue Beef, a quick and outstanding dinner! And oh my- the Saucy Shrimp Salad is amazing! Don’t miss the Pork Schnitzel with German Spaetzle. Overall, my family was blown away by this week and I hope yours is too. Enjoy!!',
  textBottom: `Happy Cooking,` + "\n" +
  `Stacey, Sloane, and the No More To-Go Team`,
};


// TODO rename to Weekly Menu button and move to config file
const contentButtonParams = {
  id: '04-22-2021',
  href: 'https://www.nomoretogo.com/weekly-menu/',
  text: `Get This Week's Menu`,
};


// console.log(recipes);

var result = null;
try {




  result = StaticComponent({
    contentTitleTextParams,
    contentSubTitleParams,
    contentTextDescriptionParams,


    // TODO Do we need to pass recipes inside Static component or maybe we can move it out here?
    recipes,
    contentButtonParams,


  });






  // console.log(result);



} catch (error) {
  console.log(error.message);
}

export default result;
