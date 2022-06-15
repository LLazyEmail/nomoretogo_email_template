// Create supportContact component
const hrefContact = "contact@nomoretogo.com.%C2%A0";

// Top block start
var title = `No More To-Go Facebook Users:`;
var textTop = (hrefSocial, idSosial) => {
  return `Connect with other home cooks on our closed group for No More To-Go Members Only<a href="${hrefSocial}" data-link-id="${idSosial}" target="_blank" style="word-break: break-word; font-family: 'Poppins', sans-serif; color: #09c269; text-decoration: underline;">Facebook Group Page</a>.`;
};
// Top block end

// Bottom block start
var textBottomStrong = `Have Questions?`;
var textBottom = (hrefHelp, hrefContact, idHelp) => {
  return `Please contact us via the 
  "<a href="${hrefHelp}" data-link-id="${idHelp}" target="_blank" style="word-break: break-word; font-family: 'Poppins', sans-serif; color: #09c269; text-decoration: underline;">How Can We Help"</a>
   link at the bottom of each page on the site. Or, email us at 
   <a href="mailto:${hrefContact}" style="word-break: break-word; font-family: 'Poppins', sans-serif; color: #09c269; text-decoration: underline;">contact@nomoretogo.com.&nbsp;</a>`;
};
// Bottom block end

// Table content start
var content = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
<tbody><tr>
  <td class="bodyTitle" id="bodyText-36" style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
    <h4><strong>${title}</strong><br></h4>
    <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">
      ${textTop(hrefSocial, idSosial)}
    </p>
    <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
    <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
    <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
    <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">
      <strong>
        ${textBottomStrong}
      </strong><br>
        ${textBottom(hrefHelp, hrefContact, idHelp)}<br>
      <strong><br></strong>
    </p>
    <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%;"></p>
  </td>
</tr>
</tbody></table>`;
// Table content end

// Main block start
var mlContentTable = () => {
  `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
  <tbody><tr>
    <td class="mlContentTableCardTd">
      <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
        <tbody><tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td height="40" class="spacingHeight-40" style="line-height: 40px; min-height: 40px;"></td>
              </tr>
            </tbody></table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
                  ${content}
                </td>
              </tr>
            </tbody></table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  </tbody></table>`;
};
// Main block end

// Block error start
var searchError = (err) => {
  const error = {
    hrefSocial: "No hrefSocial supportContact",
    hrefHelp: "No hrefHelp supportContact",
    idSocial: "No idSocial supportContact",
    idHelp: "No idHelp supportContact",
  };

  throw new Error(error[err]);
};
// Block error end

export default function (hrefSocial, hrefHelp, idSocial, idHelp) {
  if (hrefSocial == "") {
    searchError("hrefSocial");
  }
  if (hrefHelp == "") {
    searchError("hrefHelp");
  }
  if (idSocial == "") {
    searchError("idSocial");
  }
  if (idHelp == "") {
    searchError("idHelp");
  }

  return mlContentTable(hrefSocial, hrefHelp, idSocial, idHelp);
}
