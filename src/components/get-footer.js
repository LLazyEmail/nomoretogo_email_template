// Create footer component

// Config file
import { config } from "../config.js";

export default function (footContent) {
  if (footContent == "") {
    throw new Error("No footContent footer");
  }

  if (footContent.length == 0) {
    throw new Error("No footContent footer");
  }

  var res = footContent.map((cont) => {
    return (
      `<td align="center" width="24" style="padding: 0px 5px;" ng-show="slink.link != ''">
      <a href="` +
      cont.href +
      `target="_self">
      <img width="24" alt="facebook" src=` +
      config.pathSocialIcons +
      cont.src +
      `style="display: block; border="0">
      </a>
    </td>`
    );
  });

  return (
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left">
  <tbody><tr>` +
    res +
    `</tr></tbody>
</table>`
  );
}
