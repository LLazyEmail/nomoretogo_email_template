import Errors from './Errors';
const error = new Errors('recipeComponent');

import { paragraphComponent } from 'typo';

import titleComponent from './title';
import textComponent from './text';

const recipeName = (params) => {
  const { title, subtitle } = params;

  const titleHTML = titleComponent(title);
  const textHTML = textComponent(subtitle);
  const content = `${titleHTML} <br> ${textHTML}`;

  const recipeParams = {
    attributes:
      'style="margin-top: 0px; margin-bottom: 0px; line-height: 150%; text-align: center;"',
    content,
  };
  return paragraphComponent(recipeParams);
};


export default recipeName;
