// import Errors from './Errors';
// const error = new Errors('bodyComponent');

// import ow from 'ow';

const bodyComponent = (bodyContent:string, headerBlock:string) => {
  // if (bodyContent == '') {
  //   error.add('bodyContent');
  // }

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
                      ${bodyContent}
                      <!-- end of body --> 
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
  
  </body>`;
};

export default bodyComponent;
