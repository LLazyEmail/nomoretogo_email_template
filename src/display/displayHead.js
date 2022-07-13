// import { displayFactoryTwo } from 'email-template-object';

// import headComponent from "../../components/outerTemplate/src/components/headComponent";

import headComponent from '../domain/outer/headComponent';

//import {
// blobHead,
// bodyStyle,
// font1,
// font2,
// headMetaTags,
// ifStyle,
// mediaStyle,
// style,
// style2,
//} from '../../components/outerTemplate-partially-works/src/components/';

// import blobHead from '../../components/outerTemplate-partially-works/src/components/blobHead';

import { blobHead } from "nmtg-template-mailerlite-outertemplate"


console.log(blobHead());

// let addon1 = {
//   blobHead: blobHead(),
//   bodyStyle: bodyStyle(),
//   font1: font1(),
//   font2: font2(),
//   headMetaTags: headMetaTags(),
//   ifStyle: ifStyle(),
//   mediaStyle: mediaStyle(),
//   style: style(),
//   style2: style2(),

//   // variable:value,
//   title: 'text title',
// };

// var component;
// var error;
try {
  var fullComponent = headComponent(addon1);
} catch (err) {
  var error = err;
}

var result = error != undefined ? error : fullComponent;

//variant one
// const settings = {
//   component: headComponent,
//   params: addon1,
// };

// const Factory = new displayFactoryTwo();

// console.log(Factory.create(settings));
// export default Factory.create(settings);

export default result;
