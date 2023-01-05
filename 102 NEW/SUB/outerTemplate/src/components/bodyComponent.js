import Errors from './Errors';
const error = new Errors('bodyComponent');

const bodyComponent = (bodyContent, headerBlock) => {
  if (bodyContent == '') {
    error.add('bodyContent');
  }

  return `<body class="mlBodyBackground" style="padding: 0; margin: 0; -webkit-font-smoothing:antialiased; background-color:#f6f8f9; -webkit-text-size-adjust:none;" data-new-gr-c-s-check-loaded="14.1058.0" data-gr-ext-installed="">
  <!-- Make your email an accessible article. -->
  <div role="article" aria-roledescription="email" aria-label="Korean+Barbecue+Beef+%7C+Pork+Schnitzel+%7C++Bahn+Mi+Meatball+Skewers">
    <!--[if !mso]>
      <!-- -->
      <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f6f8f9" class="mainTable mlBodyBackground" dir="ltr" background="https://preview.mailerlite.com/r0n8w0g0n6/1934358861754405982/l8n5/">
        <tbody><tr>
          <td class="mlTemplateContainer" align="center">
          <!--<![endif]-->
          <!--[if mso 16]>
            <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
              <tr>
                <td bgcolor="#f6f8f9" align="center">
                <!--<![endif]-->


                <!-- Content starts here -->
                <!-- BORDER RADIUS FOR CARDS LAYOUT -->
                <!-- BORDER RADIUS FOR DEFAULT LAYOUT -->
                <table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mobileHide">
                  <tbody><tr>
                    <td align="center">
                      <table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
                        <tbody><tr>
                          <td colspan="2" height="20"></td>
                        </tr>
                        <tr>
                          <td align="left" style="font-family: &#39;Poppins&#39;, sans-serif; color: #111111; font-size: 12px; line-height: 18px;"></td>
                          <td align="right" style="font-family: &#39;Poppins&#39;, sans-serif; color: #111111; font-size: 12px; line-height: 18px;">
                            <a style="color: #111111;" href="https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI3MyZkPWUzajFqNW8=.W0GaLZ55-F5iaI7dBLw6RZzE4wwfOh_zk7KO-dSmgA4" data-link-id="960357273" target="_blank">View in browser</a>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" height="20"></td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="mlContentTable  mlContentBorderRadius" width="640" style="border-radius: 5px; overflow: hidden;">
                  <tbody><tr>
                    <td>  
                    
                    ${bodyContent}
                    
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
  </tbody></table>
  </td>
  </tr>
  </tbody></table>
  <table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
  <tbody><tr>
  <td height="40" class="spacingHeight-20"></td>
  </tr>
  </tbody></table>
  <!-- Content ends here -->



  
  <!--[if mso 16]>
  </td>
  </tr>
  </table>
  <!--<![endif]-->
  <!--[if !mso]>
  <!-- -->
  </td>
  </tr>
  </tbody></table>
  <!--<![endif]-->
  </div>
  <div class="mallbery-caa" style="z-index: 2147483647 !important; text-transform: none !important; position: fixed;"></div></body>`;
};

export default bodyComponent;
