// Create socialMedia component
const srcPath = "./images/";
export default function (socialItem) {
  if (socialItem == "" || !socialItem.length) {
    throw new Error("No socialItem sosial-media");
  }

  var res = socialItem.map((social) => {
    return (
      `<td align="center" width="24" style="padding: 0px 5px;" ng-show="slink.link !=''">
        <a href="` +
      social.href +
      `" target="_self">
          <img width="24" alt="facebook" src="` +
      srcPath +
      social.src +
      `" style="display: block;" border="0">
        </a>
      </td>`
    );
  });

  return (
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left"><tbody><tr>` +
    res +
    `</tr></tbody></table>`
  );
}
