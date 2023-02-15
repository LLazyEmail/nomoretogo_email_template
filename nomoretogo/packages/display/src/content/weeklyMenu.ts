import { 
    WeeklyMenuContainerComponent 
} from 'inner';

import { recipes } from '../config';


// TODO rename to Weekly Menu button and move to config file
const buttonParams = {
    id: '04-22-2021',
    href: 'https://www.nomoretogo.com/weekly-menu/',
    text: `Get This Week's Menu`,
  };


const WeeklyMenuHTMLString = WeeklyMenuContainerComponent(
        recipes, 
        buttonParams
      );

if (!WeeklyMenuHTMLString) {
  throw new Error('WeeklyMenuHTMLString empty');
}

