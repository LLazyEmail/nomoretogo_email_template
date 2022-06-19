// Create footer component

// Config file
import { pathSocialIcons } from "../../../config";

export default function (footContent) {
  if (footContent == "") {
    throw new Error("No footContent footer");

  }

  if (footContent.length == 0) {
    // @TODO we can do it as one check or rename the output message
    throw new Error("No footContent footer");
  }

  
  //@TODO move this loop away, it's hard to wrap your head around two long strings
  var res = footContent.map((cont) => {
    const srcPath = pathSocialIcons + cont.src;
    return `<td align="center" width="24" style="padding: 0px 5px;" ng-show="slink.link != ''">
      <a href="${cont.href}" target="_self">
      <img width="24" alt="${cont.alt}" src="${srcPath}" style="display: block; border="0">
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
}
