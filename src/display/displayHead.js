import displayFactoryTwo from "./factoryTwo";

import headComponent from "../../components/outerTemplate/src/components/headComponent";
// copied from headComponent
// TODO update paths, because it will break for sure
// compare with that crazy long path from the top     ^
//                                                    |
//                                                    |
import blobHead from "../blobHead.js";
import bodyStyle from "./bodyStyle.js";
import mediaStyle from "./mediaStyle.js";
import style from "./style.js";
import style2 from "./style2.js";
import font1 from "./font1.js";
import font2 from "./font2.js";
import meta from "./headMetaTags";
import ifStyle from "./ifStyle.js";

let addon1 = {
  blobHead,
  bodyStyle,
  mediaStyle,
  style,
  style2,
  font1,
  font2,
  meta,
  ifStyle,

  // variable:value,
};

//variant one
const settings = {
  component: headComponent,
  params: addon1,
};

const Factory = new displayFactoryTwo();

console.log(Factory.create(settings));
// export default Factory.create(settings);
