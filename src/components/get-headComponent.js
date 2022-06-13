// Create head component
import blobHead from "../miscellaneous/blobHead.js";
import bodyStyle from "../miscellaneous/bodyStyle.js";
import mediaStyle from "../miscellaneous/mediaStyle.js";
import style from "../miscellaneous/style.js";
import style2 from "../miscellaneous/style2.js";
import font1 from "../miscellaneous/font1.js";
import font2 from "../miscellaneous/font2.js";
import meta from "../miscellaneous/meta.js";
import ifStyle from "../miscellaneous/ifStyle.js";

export default function (title) {
  if (title == "") {
    throw new Error("No title");
  }

  var dataHead = "";
  dataHead += "<head>";
  dataHead +=
    '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">';
  dataHead +=
    "<!--[if gte mso 9]><xml><o:OfficeDocumentsettings><o:AllowPNG/><o:PixelsPerInch>96<o:PixelsPerInch></o:OfficeDocumentsettings></xml><![endif]-->";

  dataHead += meta;
  dataHead += "<!--[if !mso]><!-->";
  dataHead += font1;
  dataHead += "<!--<![endif]-->";

  dataHead += ifStyle;
  dataHead += style;

  dataHead += "<!--[if mso]>";
  dataHead += bodyStyle;
  dataHead += "<![endif]-->";

  dataHead += mediaStyle;
  dataHead += "<title>" + title + "</title>";
  dataHead += '<meta name="robots" content="noindex, nofollow">';
  dataHead += style2;
  dataHead += font2;
  dataHead += blobHead;
  dataHead += "</head>";
  return dataHead;
}
