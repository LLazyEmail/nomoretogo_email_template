// Create footer component
export default function (footContent) {
  if (footContent == "" || !footContent.length) {
    throw new Error("No footContent footer");
  }
  const pathImg = "../../template/images/";
  var res = footContent.map((cont) => {
    return (
      '<td align="center" width="24" style="padding: 0px 5px;" ng-show="slink.link != \'\'">\
      <a href="' +
      cont.href +
      '" target="_self">\
      <img width="24" alt="facebook" src="' +
      pathImg +
      cont.src +
      '" style="display: block;" border="0">\
      </a>\
    </td>'
    );
  });

  return (
    '<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left">\
  <tbody><tr>' +
    res +
    "</tr></tbody>\
</table>"
  );
}
