// Create footer component

// Config file
import { pathSocialIcons } from "../../../config";

// Create path to image start
function createPathToImage(src) {
  return pathSocialIcons + src;
}
// Create path to image end

// Create foot content start
function createFootItem(footContent) {
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
// Create foot content end

// Create foot content start
function createFootContent(footContent) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left">
  <tbody><tr>${createFootItem(footContent)}</tr></tbody>
</table>`;
}
// Create foot content end

export default function (footContent) {
  if (footContent == "") {
    throw new Error("No footContent footer");
  }

<<<<<<< HEAD
  createFootContent(footContent);
=======
  if (footContent.length == 0) {
    // TODO we can do it as one check or rename the output message
    throw new Error("Array footContent is empty footer");
  }

  // TODO move this loop away, it's hard to wrap your head around two long strings
  var res = footContent.map((cont) => {

    return `<td align="center" width="24" style="padding: 0px 5px;" ng-show="slink.link != ''">
      <a href="${cont.href}" target="_self">
      <img width="24" alt="${cont.alt}" 
      src="${createPathToImage(cont.src)}" 
      style="display: block; border="0">
      </a>
    </td>`;
  });

  return (
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left">
  <tbody><tr>` +
    res +
    `</tr></tbody>
</table>`
  );
>>>>>>> 9f7b61334687cfc03e561833bec411d898642885
}
