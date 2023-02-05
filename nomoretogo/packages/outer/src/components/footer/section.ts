const footerHTML = (params:{address:string, description:string, unsubscribeLink:string, socialPanel:string, title:string}) => {

const { address, description, unsubscribeLink, socialPanel, title } = params;
  
  
  if (!socialPanel) {
    throw new Error('no socialPanel was passed');
  }
  // if (typeof copyright != 'function') {
  //   throw new Error('no copyrights was passed');
  // }

  if (!address) {
    throw new Error('invalid address');
  }
  
  if (!description) {
    throw new Error('invalid description');
  }
  if (!unsubscribeLink) {
    throw new Error('invalid unsubscribeLink');
  }
  if (!title) {
    throw new Error('invalid title');
  }
  
  
  

return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableFooterDefault" cellpadding="0" cellspacing="0" width="640">
<tbody><tr>
  <td class="mlContentTableFooterCardTd">
    <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
      <tbody><tr>
        <td>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
            <tbody><tr>
              <td height="10" class="spacingHeight-10" style="line-height: 10px; min-height: 10px;"></td>
            </tr>
          </tbody></table>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
            <tbody><tr>
              <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                  <tbody><tr>
                    <td align="left" class="bodyTitle" style="font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700; line-height: 150%; color: #111111;">
                    ${title}
                    </td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
          </tbody></table>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
            <tbody><tr>
              <td height="10" class="spacingHeight-10"></td>
            </tr>
          </tbody></table>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
            <tbody><tr>
              <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                  <tbody><tr>
                    <td align="center">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" style="width: 267px; min-width: 267px;" class="mlContentTable marginBottom">
                        <tbody><tr>
                          <td align="left" class="bodyTitle" id="footerText-44" style="font-family: 'Poppins', sans-serif; font-size: 12px; line-height: 150%; color: #111111;">
                            ${address}
                          </td>
                        </tr>
                        <tr>
                          <td height="25" class="spacingHeight-20"></td>
                        </tr>
                        <tr>
                          <td align="center">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left">
                              <tbody>
                              <tr>
                              ${socialPanel}
                              </tr>
                            </tbody></table>
                          </td>
                        </tr>
                      </tbody></table>
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" width="267" style="width: 267px; min-width: 267px;" class="mlContentTable">
                        <tbody><tr>
                          <td align="right" class="bodyTitle" id="footerUnsubscribeText-44" style="font-family: 'Poppins', sans-serif; font-size: 12px; line-height: 150%; color: #111111;">
                            ${description}
                          </td>
                        </tr>
                        <tr>
                          <td height="10"></td>
                        </tr>
                        <tr>
                          <td align="right" class="bodyTitle" style="font-family: 'Poppins', sans-serif; font-size: 12px; line-height: 150%; color: #111111;">
                           ${unsubscribeLink}
                          </td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
          </tbody></table>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
            <tbody><tr>
              <td height="40" class="spacingHeight-40" style="line-height: 40px; min-height: 40px;"></td>
            </tr>
          </tbody></table>
        </td>
      </tr>
    </tbody></table>
  </td>
</tr>
</tbody></table>`;

};

export default footerHTML;
