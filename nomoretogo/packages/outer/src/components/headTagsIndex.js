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
} from '../index';


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


const pre_tags = () => {
return meta() + font1() + ifStyle() + style() + 
      bodyStyle() + mediaStyle() + meta() + font1() +
      ifStyle() + style() + bodyStyle() + mediaStyle();
  
}

const post_tags = () => {
  return style2() + font2() + blobHead();
}


export { pre_tags, post_tags } 