// Create footer component

// Config file
import { pathSocialIcons } from "../../../config";

// Create path to image start
function createPathToImage(src) {
  return pathSocialIcons + src;
}
// Create path to image end

// Create foot conten start
function createFootContent(footContent) {
  return footContent.map((cont) => {
    return `<td align="center" width="24" style="padding: 0px 5px;" ng-show="slink.link != ''">
    <a href="${cont.href}" target="_self">
    <img width="24" alt="${cont.alt}" 
    src="${createPathToImage(cont.src)}" 
    style="display: block; border="0">
    </a>
  </td>`;
  });
}
// Create foot conten end

export default function (footContent) {
  if (footContent == "") {
    throw new Error("No footContent footer");
  }

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left">
  <tbody><tr>${createFootContent(footContent)}</tr></tbody>
</table>`;
}
