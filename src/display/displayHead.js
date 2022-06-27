import { displayFactoryTwo } from 'email-template-object';

// import headComponent from "../../components/outerTemplate/src/components/headComponent";

import headComponent from '../domain/outer/headComponent'

import {
  blobHead,
  bodyStyle,
  font1,
  font2,
  headMetaTags,
  ifStyle,
  mediaStyle,
  style,
  style2,
// } from "../../components/outerTemplate/src/components/subHeadComponents";
} from "../domain/outer/";


let addon1 = {
  blobHead,
  bodyStyle,
  font1,
  font2,
  headMetaTags,
  ifStyle,
  mediaStyle,
  style,
  style2,

  // variable:value,
};

//variant one
const settings = {
  component: headComponent,
  params: addon1,
};

const Factory = new displayFactoryTwo();

console.log(Factory.create(settings));
export default Factory.create(settings);
