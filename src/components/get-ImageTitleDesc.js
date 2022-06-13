// Create image component
export default function (href, src, title, text) {
  const srcPath = "./image/";
  // if (id == "") {
  //   throw new Error("No id image");
  // }
  if (href == "") {
    throw new Error("No href image");
  }
  if (src == "") {
    throw new Error("No src image");
  }
  if (title == "") {
    throw new Error("No title image");
  }
  if (text == "") {
    throw new Error("No text image");
  }
  return (
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" class="mlContentTable marginBottom" style="width: 267px; min-width: 267px;">
<tbody><tr>
  <td id="imageBlock-26" align="center">
    <a href="` +
    href +
    `" data-link-id="960357283" target="_self">
<img src="` +
    srcPath +
    src +
    `" border="0" alt="" width="267" style="display: block;">
</a>
  </td>
</tr>
<tr>
  <td align="center" style="padding: 0px 20px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
      <tbody><tr>
        <td height="20" class="spacingHeight-20"></td>
      </tr>
      <tr>
        <td align="left" class="bodyTitle" id="bodyText-26" style="font-family: "Poppins", sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
          <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%; text-align: center;"><strong><span style="font-size: 16px;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">' +
    title +
    '</font></font></span></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">' +
    text +
    "</font></font><br></p>
        </td>
      </tr>
    </tbody></table>
  </td>
</tr>
</tbody></table>`
  );
}
