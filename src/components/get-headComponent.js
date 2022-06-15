// Create head component
import blobHead from "../outerTemplate/blobHead.js";
import bodyStyle from "../outerTemplate/bodyStyle.js";
import mediaStyle from "../outerTemplate/mediaStyle.js";
import style from "../outerTemplate/style.js";
import style2 from "../outerTemplate/style2.js";
import font1 from "../outerTemplate/font1.js";
import font2 from "../outerTemplate/font2.js";
import meta from "../outerTemplate/meta.js";
import ifStyle from "../outerTemplate/ifStyle.js";

export default function (title) {
  if (title == "") {
    throw new Error("No title");
  }

  var dataHead = "";
  dataHead += `<head>`;
  dataHead += `<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">`;
  dataHead += `<!--[if gte mso 9]><xml><o:OfficeDocumentsettings><o:AllowPNG/><o:PixelsPerInch>96<o:PixelsPerInch></o:OfficeDocumentsettings></xml><![endif]-->`;

  dataHead += meta;
  dataHead += `<!--[if !mso]><!-->`;
  dataHead += font1;
  dataHead += `<!--<![endif]-->`;

  dataHead += ifStyle;
  dataHead += style;

  dataHead += `<!--[if mso]>`;
  dataHead += bodyStyle;
  dataHead += `<![endif]-->`;

  dataHead += mediaStyle;
  dataHead += `<title>` + title + `</title>`;
  dataHead += `<meta name="robots" content="noindex, nofollow">`;
  dataHead += style2;
  dataHead += font2;
  dataHead += blobHead;
  dataHead += `</head>`;
  return dataHead;
}
