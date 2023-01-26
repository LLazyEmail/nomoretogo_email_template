import blobHead from './head/blobHead';
import bodyStyle from './head/bodyStyle';
import meta from './head/metaTags';
import { ifStyle, mediaStyle, font1, font2 }from './head/ifStyle';

import style from './head/style';
import style2 from './head/style2';


// Head params
// const HeadParams = {
//   blobHead: blobHead(),
//   bodyStyle: bodyStyle(),
//   font1: font1(),
//   font2: font2(),
//   headMetaTags: headMetaTags(),
//   ifStyle: ifStyle(),
//   mediaStyle: mediaStyle(),
//   style: style(),
//   style2: style2(),

// };

// TODO implement it
const pre_tags = () => {
return meta() + font1() + ifStyle() + 
      
      style() + 
      bodyStyle() + 
      mediaStyle() +

      meta() + font1() +
      ifStyle() + 
      
      style() + 
      bodyStyle() + 
      mediaStyle();
  
}

const post_tags = () => {
  return style2() + font2() + blobHead();
}


export { pre_tags, post_tags } 