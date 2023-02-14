import {
  blobHead,
  bodyStyle,
  font1,
  font2,
  meta,
  ifStyle,
  mediaStyle,
  style,
  style2,
  headComponent,
} from 'nmtg-template-mailerlite-outertemplate';


import createComponent from './createComponentUniversal';

import { titleHead } from '../src/config';
/* ******************** DATA START **************************************** */
// Head params
const HeadParams = {
  blobHead: blobHead(),
  bodyStyle: bodyStyle(),
  font1: font1(),
  font2: font2(),
  meta: meta(),
  ifStyle: ifStyle(),
  mediaStyle: mediaStyle(),
  style: style(),
  style2: style2(),
  // variable:value,
  title: titleHead,
};

/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
// var result = null;
var headComponentHTML = null;
try {
  // headComponent;

  headComponentHTML = createComponent(headComponent, HeadParams);
  
  // console.log(headComponentHTML);

  // result = headComponentHTML;
} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */

export default headComponentHTML;
