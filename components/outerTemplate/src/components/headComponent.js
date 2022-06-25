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

// TODO let's make this file more clear.
// imports of all variables we'll move outside and our function will just accept an object with all these variables.
// and we need to put more checks and errors here.

// Create head component start
function createHeadComponent(data) {
  return `<head>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <!--[if !mso]><!--><!--[if gte mso 9]><xml><o:OfficeDocumentsettings><o:AllowPNG/><o:PixelsPerInch>96<o:PixelsPerInch></o:OfficeDocumentsettings></xml><![endif]--><!--<![endif]-->
    ${data.meta}
    ${data.font1}
    ${data.ifStyle}
    ${data.style}
    ${data.bodyStyle}
    ${data.mediaStyle}
    <title>${data.title}</title>
    <meta name="robots" content="noindex, nofollow">
    ${data.style2}
    ${data.font2}
    ${data.blobHead}
  </head>`;
}
// Create head component end

export default function (title) {
  if (title == "") {
    throw new Error("No title");
  }

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

  createHeadComponent(data);
}
