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
  title: 'Korean Barbecue Beef | Pork Schnitzel | Bahn Mi Meatball Skewers', //TODO move to config
};

/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
// var result = null;
// try {
//   headComponent;
  const headComponentRes = createComponent(headComponent, HeadParams);
//   result = headComponentRes;
// } catch (error) {
//   console.log(error.message);
// }
/* ******************** CREATE CONTENT END ****************************** */
export default headComponentRes;
