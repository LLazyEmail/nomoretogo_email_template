// Create head component
import blobHead from "./blobHead.js";
import bodyStyle from "./bodyStyle.js";
import mediaStyle from "./mediaStyle.js";
import style from "./style.js";
import style2 from "./style2.js";
import font1 from "./font1.js";
import font2 from "./font2.js";
import meta from "./headMetaTags";
import ifStyle from "./ifStyle.js";

const HEAD_COMPONENT_ERROR = `Empty ${variable} in headComponent`;

// TODO let's make this file more clear.
// imports of all variables we'll move outside and our function will just accept an object with all these variables.
// and we need to put more checks and errors here.

// Create head component start
function createHeadComponent(params) {
  const {
    blobHead,
    bodyStyle,
    mediaStyle,
    style,
    style2,
    font1,
    font2,
    meta,
    ifStyle,
    title,
  } = params;

  return `<head>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <!--[if !mso]><!--><!--[if gte mso 9]><xml><o:OfficeDocumentsettings><o:AllowPNG/><o:PixelsPerInch>96<o:PixelsPerInch></o:OfficeDocumentsettings></xml><![endif]--><!--<![endif]-->
    ${meta}
    ${font1}
    ${ifStyle}
    ${style}
    ${bodyStyle}
    ${mediaStyle}
    <title>${title}</title>
    <meta name="robots" content="noindex, nofollow">
    ${style2}
    ${font2}
    ${blobHead}
  </head>`;
}
// Create head component end

<<<<<<< HEAD
function searchForErrors(params) {
  const {
    blobHead,
    bodyStyle,
    mediaStyle,
    style,
    style2,
    font1,
    font2,
    meta,
    ifStyle,
    title,
  } = params;

=======

// we are throwing an error with the same constant 10 times.
function searchForErrors(data) {
>>>>>>> 9f7b61334687cfc03e561833bec411d898642885
  var variable = "";
  if (blobHead == "") {
    variable = "blobHead";
    throw new Error(HEAD_COMPONENT_ERROR);
  }
  if (bodyStyle == "") {
    variable = "bodyStyle";
    throw new Error(HEAD_COMPONENT_ERROR);
  }
  if (mediaStyle == "") {
    variable = "mediaStyle";
    throw new Error(HEAD_COMPONENT_ERROR);
  }
  if (style == "") {
    variable = "style";
    throw new Error(HEAD_COMPONENT_ERROR);
  }
  if (style2 == "") {
    variable = "style2";
    throw new Error(HEAD_COMPONENT_ERROR);
  }
  if (font1 == "") {
    variable = "font1";
    throw new Error(HEAD_COMPONENT_ERROR);
  }
  if (font2 == "") {
    variable = "font2";
    throw new Error(HEAD_COMPONENT_ERROR);
  }
  if (meta == "") {
    variable = "meta";
    throw new Error(HEAD_COMPONENT_ERROR);
  }
  if (ifStyle == "") {
    variable = "ifStyle";
    throw new Error(HEAD_COMPONENT_ERROR);
  }
  if (title == "") {
    variable = "title";
    throw new Error(HEAD_COMPONENT_ERROR);
  }
}

// TODO I dont think we need to return this function. fill find a comment to it later

export default function (title) {
  const data = {
    blobHead,
    bodyStyle,
    mediaStyle,
    style,
    style2,
    font1,
    font2,
    meta,
    ifStyle,
    title,
  };

  searchForErrors(data);
  createHeadComponent(data);
}
