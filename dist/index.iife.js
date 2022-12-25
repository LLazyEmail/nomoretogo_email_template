var newsletterTemplate = (function (exports) {
  'use strict';

  let Errors$4 = class Errors {
    ERROR_MESSAGE = (message) => {
      return `Error in component: "${this.component}",  error message: "${message}"`;
    };
    component = '';

    constructor(component = 'No component') {
      this.component = component;
    }

    add(error) {
      const textError = this.ERROR_MESSAGE(error);
      throw new Error(textError);
    }
  };

  // Create footer component
  new Errors$4('footerComponent');

  // Create head component

  // TODO it looks strange
  new Errors$4('headComponent');

  const error$2 = new Errors$4('bodyComponent');

  const bodyComponent = (bodyContent, headerBlock) => {
    if (bodyContent == '') {
      error$2.add('bodyContent');
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
                      ${bodyContent}
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

  // Create support component

  new Errors$4('supportComponent');

  let Errors$2 = class Errors {
    ERROR_MESSAGE = (message) => {
      return `Error in component: "${this.component}",  error message: "${message}"`;
    };
    component = '';

    constructor(component = 'No component') {
      this.component = component;
    }

    add(error) {
      const textError = this.ERROR_MESSAGE(error);
      throw new Error(textError);
    }
  };

  new Errors$2('link');

  // Component heading

  // TODO replace with a link component
  const headingMainBlock = (hrefTitle, idTitle, textTitle) => {
    return `<a href="${hrefTitle}" data-link-id="${idTitle}" style="text-decoration: none; color: #111111; text-transform: none; font-style: normal; text-decoration: none;" target="_self">${textTitle}</a>`;
  };

  function heading (params) {
    const { hrefTitle, idTitle, textTitle } = params;
    const error = new Errors$2('contentTitleText');

    if (hrefTitle == '') {
      error.add('No hrefTitle');
    }
    if (idTitle == '') {
      error.add('No idTitle');
    }
    if (textTitle == '') {
      error.add('No textTitle');
    }

    return headingMainBlock(hrefTitle, idTitle, textTitle);
  }

  new Errors$2('paragraph');

  let Errors$3 = class Errors {
    ERROR_MESSAGE = (message) => {
      return `Error in component: "${this.component}",  error message: "${message}"`;
    };
    component = '';

    constructor(component = 'No component') {
      this.component = component;
    }

    add(error) {
      const textError = this.ERROR_MESSAGE(error);
      throw new Error(textError);
    }
  };

  // Content button block

  const buttonBlockMainBlock = (params) => {
    return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
  <tbody><tr>
    <td class="mlContentTableCardTd">
      <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
        <tbody><tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
              </tr>
            </tbody></table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="width: 100%; min-width: 100%;">
                    <tbody><tr>
                      <td align="center">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%; min-width: 100%;">
                          <tbody><tr>
                            <td align="center" class="mlContentButton" style="font-family: 'Poppins', sans-serif;">
                              <!--[if mso]>
                                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://click.mailerlite.com/link/c/YT0xOTM0MzU4ODYxNzU0NDA1OTgyJmM9bDhuNSZiPTk2MDM1NzI4NSZkPWs2ZjRiMm4=.fp2uJksWnc8Dxp12UlfqnthZ650MszWAT7qo5_IJ0sU" data-link-id="960357285" style="height:53px;v-text-anchor:middle;width:259px;" arcsize="6%" stroke="f" fillcolor="#d6685e">
                                  <w:anchorlock/>
                                  <center>
                                  <![endif]-->
                                  ${params}
                                  <!--[if mso]>
                                  </center>
                                </v:roundrect>
                              <![endif]-->
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

  function contentButtonBlock (params) {
    const error = new Errors$3('contentButtonBlock');

    if (params == '') {
      error.add('No params/empty params');
    }

    return buttonBlockMainBlock(params);
  }

  // Component content discription

  //TODO rename contentTextDescription filename
  const textDescriptionMainBlock = (textTop, textBottom) => {
    return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
  <tbody><tr>
    <td class="mlContentTableCardTd">
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
                      <td class="bodyTitle" id="bodyText-10" style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">
                          ${textTop}
                        </p>  
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><br>
                          ${textBottom}
                        </p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%;"></p>
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td height="10" class="spacingHeight-10" style="line-height: 10px; min-height: 10px;"></td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
</tbody></table>`;
  };

  function contentTextDescription (params) {
    const { textTop, textBottom } = params;
    const error = new Errors$3('contentTextDescription');

    if (textTop == '') {
      error.add('No textTop');
    }

    if (textBottom == '') {
      error.add('No textBottom');
    }

    return textDescriptionMainBlock(textTop, textBottom);
  }

  // Component title text

  const titleTextMainBlock = (params) => {
    return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
  <tbody><tr>
    <td class="mlContentTableCardTd">
      <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
        <tbody><tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
              </tr>
            </tbody></table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                    <tbody><tr>
                      <td align="center" class="bodyTitle" style="font-family: 'Poppins', sans-serif; font-size: 28px; font-weight: 700; line-height: 150%; color: #111111; text-transform: none; font-style: normal; text-decoration: none; text-align: center;">
                        ${heading(params)}
                      </td>
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
  </tbody></table>`;
  };

  function contentTitleText (params) {
    return titleTextMainBlock(params);
  }

  const htmlEscape$2 = string => string
  	.replace(/&/g, '&amp;')
  	.replace(/"/g, '&quot;')
  	.replace(/'/g, '&#39;')
  	.replace(/</g, '&lt;')
  	.replace(/>/g, '&gt;');

  var htmlEscape_1$2 = (strings, ...values) => {
  	if (typeof strings === 'string') {
  		return htmlEscape$2(strings);
  	}

  	let output = strings[0];
  	for (const [index, value] of values.entries()) {
  		output = output + htmlEscape$2(String(value)) + strings[index + 1];
  	}

  	return output;
  };

  function stringifyAttributes$2(attributes) {
  	const handledAttributes = [];

  	for (let [key, value] of Object.entries(attributes)) {
  		if (value === false) {
  			continue;
  		}

  		if (Array.isArray(value)) {
  			value = value.join(' ');
  		}

  		let attribute = htmlEscape_1$2(key);

  		if (value !== true) {
  			attribute += `="${htmlEscape_1$2(String(value))}"`;
  		}

  		handledAttributes.push(attribute);
  	}

  	return handledAttributes.length > 0 ? ' ' + handledAttributes.join(' ') : '';
  }

  // import customErrors from './Errors';
  // const customError = new customErrors('link');

  // import ow from 'ow';

  const linkComponent$2 = (params) => {
    // if (typeof params != 'object') {
    //   customError.add('"params" is not "object"');
    // }

    // if (typeof params.attributes == '') {
    //   customError.add('empty attributes');
    // }

    // if (typeof params.content == '') {
    //   customError.add('empty content');
    // }


    const attributesStr = stringifyAttributes$2(attributes);

    const { attributes, content } = params;

    return `<a ${attributesStr}>${content}</a>`;
  };

  // import Errors from './Errors';

  // stringifyAttributes({
  //   rainbow: true,
  //   number: 1,
  //   multiple: ['a', 'b'],
  // });


  const buttonComponent$2 = (params) => {
    const attributes = {
      id: params.id,
      class: `mlContentButton`,
      href: params.href,
      'data-link-id': params.id,
      style: `font-family: "Poppins", sans-serif; background-color: #d6685e; border-radius: 3px; color: #ffffff; display: inline-block; font-size: 17px; font-weight: 400; line-height: 23px; padding: 15px 0 15px 0; text-align: center; text-decoration: none; width: 260px;`,
    };

    const attributesStr = stringifyAttributes$2(attributes);

    // console.log(attributesStr);

    return linkComponent$2({ content: params.text, attributesStr });
  };

  // Error

  const imageComponent$1 = (params) => {

    const attributes = {
      src: params.src,
      style: `display: block;`,
      border:"0",
      alt:"",
      width: params.width, // TODO test if it can work withot width param or not
    };


    const attributesStr = stringifyAttributes$2(attributes);

    // console.log(attributesStr);

    return  `<img ${attributesStr} >`;

  };

  const paragraphComponent = (params) => {
      // if (typeof params != 'object') {
      //   customError.add('"params" is not "object"');
      // }
    
      // if (typeof params.attributes == '') {
      //   customError.add('empty attributes');
      // }
    
      // if (typeof params.content == '') {
      //   customError.add('empty content');
      // }
    
      const { attributes, content } = params;

      const attributesStr = stringifyAttributes$2(attributes);
   

      return `<p ${attributesStr}>${content}</p>`;
    };


  // const error = new Errors('strong');

  // if (content == '') {
  // error.add('No content');
  // }

  const config$2 = {
    id: '12',
    href: 'google.com'
  };
  console.log(buttonComponent$2(config$2));

  // import { linkComponent, imageComponent } from "nmtg-template-mailerlite-typography";

  // TODO remove a copy of this code and move it to typography.
  // in order to beat this error
  // ReferenceError: linkComponent is not defined

  //       64 |   // TODO add checks to this component
  //       65 |
  //     > 66 |   const recipeImage = imgWrapper(params);

  const imageLinkComponent = (params) => {
    
      const { id, href, src, width } = params;

      // const attr = `src="${src}" 
      //   border="0" alt="" ` + 
      //   (width === undefined ? `` : `width="${width}"`) +
      //    ` style="display: block;"`;
        

      const image = imageComponent$1(params);
    
      const config = {
        // attributes: `href="${href}" data-link-id="${id}" target="_self"`,

        attributes: {
          href: href,
          "data-link-id": id,
          target: "_self"
        },

        content: image,
      };
      return linkComponent$2(config);
    };

  // Create recipe component

  // import { imageLink } from "html-typography-tags";


  const error = new Errors$3('recipeComponent');

  // Get title start
  const titleComponent = (title) => {
    if (title == '') {
      error.add('title');
    }

    const string = `<span style="font-size: 16px;">${title}</span>`;

    return strong(string);
  };
  // Get title end

  // Get text start
  const textComponent = (text) => {
    if (text == '') {
      error.add('text');
    }

    return `${text}`;
  };
  // Get text end

  const recipeName = (params) => {
    const { title, subtitle } = params;

    const content = `${titleComponent(title)} <br> ${textComponent(subtitle)}`;

    const config = {
      attributes:
        'style="margin-top: 0px; margin-bottom: 0px; line-height: 150%; text-align: center;"',
      content,
    };
    return paragraphComponent(config);
  };

  const recipeComponent = (params) => {
    const { id, href, src, title, text } = params;
    
    if (!id) {
      throw new Error('recipe component - invalid id');
    }
    if (!href) {
      throw new Error('recipe component - invalid href');
    }
    if (!src) {
      throw new Error('recipe component - invalid src');
    }


    // TODO add checks to this component
    
    // TODO moveout recipeImage and titleLine into separate sub methods
    const recipeImage = imageLinkComponent({id, href, src});

    if (!recipeImage) {
      throw new Error('invalid recipeImage');
    }

    const titleLine = recipeName({ title, subtitle: text });

    return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" 
  class="mlContentTable marginBottom" style="width: 267px; min-width: 267px;">
    <tbody><tr>
      <td id="${id}" align="center">
       ${recipeImage}
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 0px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
          <tbody><tr>
            <td height="20" class="spacingHeight-20"></td>
          </tr>
          <tr>
            <td align="left" class="bodyTitle" id="bodyText-14" 
            style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
              ${titleLine}
            </td>
          </tr>
        </tbody></table>
      </td>
    </tr>
    </tbody></table>`;
  };

  let Errors$1$1 = class Errors {
    ERROR_MESSAGE = (message) => {
      return `Error in component: "${this.component}",  error message: "${message}"`;
    };
    component = '';

    constructor(component = 'No component') {
      this.component = component;
    }

    add(error) {
      const textError = this.ERROR_MESSAGE(error);
      throw new Error(textError);
    }
  };

  const htmlEscape$1 = string => string
  	.replace(/&/g, '&amp;')
  	.replace(/"/g, '&quot;')
  	.replace(/'/g, '&#39;')
  	.replace(/</g, '&lt;')
  	.replace(/>/g, '&gt;');

  var htmlEscape_1$1 = (strings, ...values) => {
  	if (typeof strings === 'string') {
  		return htmlEscape$1(strings);
  	}

  	let output = strings[0];
  	for (const [index, value] of values.entries()) {
  		output = output + htmlEscape$1(String(value)) + strings[index + 1];
  	}

  	return output;
  };

  function stringifyAttributes$1$1(attributes) {
  	const handledAttributes = [];

  	for (let [key, value] of Object.entries(attributes)) {
  		if (value === false) {
  			continue;
  		}

  		if (Array.isArray(value)) {
  			value = value.join(' ');
  		}

  		let attribute = htmlEscape_1$1(key);

  		if (value !== true) {
  			attribute += `="${htmlEscape_1$1(String(value))}"`;
  		}

  		handledAttributes.push(attribute);
  	}

  	return handledAttributes.length > 0 ? ' ' + handledAttributes.join(' ') : '';
  }

  // import customErrors from './Errors';
  // const customError = new customErrors('link');

  // import ow from 'ow';

  const linkComponent$1$1 = (params) => {
    // if (typeof params != 'object') {
    //   customError.add('"params" is not "object"');
    // }

    // if (typeof params.attributes == '') {
    //   customError.add('empty attributes');
    // }

    // if (typeof params.content == '') {
    //   customError.add('empty content');
    // }


    const attributesStr = stringifyAttributes$1$1(attributes);

    const { attributes, content } = params;

    return `<a ${attributesStr}>${content}</a>`;
  };

  // import Errors from './Errors';

  // stringifyAttributes({
  //   rainbow: true,
  //   number: 1,
  //   multiple: ['a', 'b'],
  // });


  const buttonComponent$1 = (params) => {
    const attributes = {
      id: params.id,
      class: `mlContentButton`,
      href: params.href,
      'data-link-id': params.id,
      style: `font-family: "Poppins", sans-serif; background-color: #d6685e; border-radius: 3px; color: #ffffff; display: inline-block; font-size: 17px; font-weight: 400; line-height: 23px; padding: 15px 0 15px 0; text-align: center; text-decoration: none; width: 260px;`,
    };

    const attributesStr = stringifyAttributes$1$1(attributes);

    // console.log(attributesStr);

    return linkComponent$1$1({ content: params.text, attributesStr });
  };

  // Error

  const imageComponent$1$1 = (params) => {

    const attributes = {
      src: params.src,
      style: `display: block;`,
      border:"0",
      alt:"",
      width: params.width, // TODO test if it can work withot width param or not
    };


    const attributesStr = stringifyAttributes$1$1(attributes);

    // console.log(attributesStr);

    return  `<img ${attributesStr} >`;

  };

  const paragraphComponent$1 = (params) => {
      // if (typeof params != 'object') {
      //   customError.add('"params" is not "object"');
      // }
    
      // if (typeof params.attributes == '') {
      //   customError.add('empty attributes');
      // }
    
      // if (typeof params.content == '') {
      //   customError.add('empty content');
      // }
    
      const { attributes, content } = params;

      const attributesStr = stringifyAttributes$1$1(attributes);
   

      return `<p ${attributesStr}>${content}</p>`;
    };


  // const error = new Errors('strong');

  // if (content == '') {
  // error.add('No content');
  // }

  const config$1 = {
    id: '12',
    href: 'google.com'
  };
  console.log(buttonComponent$1(config$1));

  // import { linkComponent, imageComponent } from "nmtg-template-mailerlite-typography";

  // TODO remove a copy of this code and move it to typography.
  // in order to beat this error
  // ReferenceError: linkComponent is not defined

  //       64 |   // TODO add checks to this component
  //       65 |
  //     > 66 |   const recipeImage = imgWrapper(params);

  const imageLinkComponent$1 = (params) => {
    
      const { id, href, src, width } = params;

      // const attr = `src="${src}" 
      //   border="0" alt="" ` + 
      //   (width === undefined ? `` : `width="${width}"`) +
      //    ` style="display: block;"`;
        

      const image = imageComponent$1$1(params);
    
      const config = {
        // attributes: `href="${href}" data-link-id="${id}" target="_self"`,

        attributes: {
          href: href,
          "data-link-id": id,
          target: "_self"
        },

        content: image,
      };
      return linkComponent$1$1(config);
    };

  // Create recipe component

  // import { imageLink } from "html-typography-tags";


  const error$1 = new Errors$1$1('recipeComponent');

  // Get title start
  const titleComponent$1 = (title) => {
    if (title == '') {
      error$1.add('title');
    }

    const string = `<span style="font-size: 16px;">${title}</span>`;

    return strong(string);
  };
  // Get title end

  // Get text start
  const textComponent$1 = (text) => {
    if (text == '') {
      error$1.add('text');
    }

    return `${text}`;
  };
  // Get text end

  const recipeName$1 = (params) => {
    const { title, subtitle } = params;

    const content = `${titleComponent$1(title)} <br> ${textComponent$1(subtitle)}`;

    const config = {
      attributes:
        'style="margin-top: 0px; margin-bottom: 0px; line-height: 150%; text-align: center;"',
      content,
    };
    return paragraphComponent$1(config);
  };

  const recipeComponent$1 = (params) => {
    const { id, href, src, title, text } = params;
    
    if (!id) {
      throw new Error('recipe component - invalid id');
    }
    if (!href) {
      throw new Error('recipe component - invalid href');
    }
    if (!src) {
      throw new Error('recipe component - invalid src');
    }


    // TODO add checks to this component
    
    // TODO moveout recipeImage and titleLine into separate sub methods
    const recipeImage = imageLinkComponent$1({id, href, src});

    if (!recipeImage) {
      throw new Error('invalid recipeImage');
    }

    const titleLine = recipeName$1({ title, subtitle: text });

    return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="left" width="267" 
  class="mlContentTable marginBottom" style="width: 267px; min-width: 267px;">
    <tbody><tr>
      <td id="${id}" align="center">
       ${recipeImage}
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 0px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
          <tbody><tr>
            <td height="20" class="spacingHeight-20"></td>
          </tr>
          <tr>
            <td align="left" class="bodyTitle" id="bodyText-14" 
            style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
              ${titleLine}
            </td>
          </tr>
        </tbody></table>
      </td>
    </tr>
    </tbody></table>`;
  };

  const htmlEscape$3 = string => string
  	.replace(/&/g, '&amp;')
  	.replace(/"/g, '&quot;')
  	.replace(/'/g, '&#39;')
  	.replace(/</g, '&lt;')
  	.replace(/>/g, '&gt;');

  var htmlEscape_1$3 = (strings, ...values) => {
  	if (typeof strings === 'string') {
  		return htmlEscape$3(strings);
  	}

  	let output = strings[0];
  	for (const [index, value] of values.entries()) {
  		output = output + htmlEscape$3(String(value)) + strings[index + 1];
  	}

  	return output;
  };

  function stringifyAttributes(attributes) {
  	const handledAttributes = [];

  	for (let [key, value] of Object.entries(attributes)) {
  		if (value === false) {
  			continue;
  		}

  		if (Array.isArray(value)) {
  			value = value.join(' ');
  		}

  		let attribute = htmlEscape_1$3(key);

  		if (value !== true) {
  			attribute += `="${htmlEscape_1$3(String(value))}"`;
  		}

  		handledAttributes.push(attribute);
  	}

  	return handledAttributes.length > 0 ? ' ' + handledAttributes.join(' ') : '';
  }

  // import customErrors from './Errors';
  // const customError = new customErrors('link');

  // import ow from 'ow';

  const linkComponent = (params) => {
    // if (typeof params != 'object') {
    //   customError.add('"params" is not "object"');
    // }

    // if (typeof params.attributes == '') {
    //   customError.add('empty attributes');
    // }

    // if (typeof params.content == '') {
    //   customError.add('empty content');
    // }


    const attributesStr = stringifyAttributes(attributes);

    const { attributes, content } = params;

    return `<a ${attributesStr}>${content}</a>`;
  };

  // import Errors from './Errors';

  // stringifyAttributes({
  //   rainbow: true,
  //   number: 1,
  //   multiple: ['a', 'b'],
  // });


  const buttonComponent$3 = (params) => {
    const attributes = {
      id: params.id,
      class: `mlContentButton`,
      href: params.href,
      'data-link-id': params.id,
      style: `font-family: "Poppins", sans-serif; background-color: #d6685e; border-radius: 3px; color: #ffffff; display: inline-block; font-size: 17px; font-weight: 400; line-height: 23px; padding: 15px 0 15px 0; text-align: center; text-decoration: none; width: 260px;`,
    };

    const attributesStr = stringifyAttributes(attributes);

    // console.log(attributesStr);

    return linkComponent({ content: params.text, attributesStr });
  };


  // const error = new Errors('strong');

  // if (content == '') {
  // error.add('No content');
  // }

  const config$3 = {
    id: '12',
    href: 'google.com'
  };
  console.log(buttonComponent$3(config$3));

  // TODO THIS BLOCK is a old version of contentTableWithTwoRecipes.... get rid of it later

  // Main table start
  const recipeRowBlock = (dataImageOne, dataImageTwo) => {
    const recipeOne = recipeComponent$1(dataImageOne);
    const recipeTwo = recipeComponent$1(dataImageTwo);

    

    return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
  <tbody><tr>
    <td class="mlContentTableCardTd">
      <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
        <tbody><tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
              </tr>
            </tbody></table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                    <tbody><tr>
                      <td height="20" class="spacingHeight-20"></td>
                    </tr>
                  </tbody></table>
                  <table role="presentation" cellpadding="0" border="0" align="center" width="100%">
                    <tbody><tr>
                      <td valign="top">
                         ${recipeOne}
                        <!--[if mso]>
                      </td>
                      <td valign="top">
                      <![endif]-->
                        ${recipeTwo}
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td height="20" class="spacingHeight-20"></td>
              </tr>
            </tbody></table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td align="center" style="padding: 0px 40px;" class="mlContentOuter"></td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  </tbody></table>`;
  };

  let Errors$1 = class Errors {
    ERROR_MESSAGE = (message) => {
      return `Error in component: "${this.component}",  error message: "${message}"`;
    };
    component = '';

    constructor(component = 'No component') {
      this.component = component;
    }

    add(error) {
      const textError = this.ERROR_MESSAGE(error);
      throw new Error(textError);
    }
  };

  const htmlEscape = string => string
  	.replace(/&/g, '&amp;')
  	.replace(/"/g, '&quot;')
  	.replace(/'/g, '&#39;')
  	.replace(/</g, '&lt;')
  	.replace(/>/g, '&gt;');

  var htmlEscape_1 = (strings, ...values) => {
  	if (typeof strings === 'string') {
  		return htmlEscape(strings);
  	}

  	let output = strings[0];
  	for (const [index, value] of values.entries()) {
  		output = output + htmlEscape(String(value)) + strings[index + 1];
  	}

  	return output;
  };

  function stringifyAttributes$1(attributes) {
  	const handledAttributes = [];

  	for (let [key, value] of Object.entries(attributes)) {
  		if (value === false) {
  			continue;
  		}

  		if (Array.isArray(value)) {
  			value = value.join(' ');
  		}

  		let attribute = htmlEscape_1(key);

  		if (value !== true) {
  			attribute += `="${htmlEscape_1(String(value))}"`;
  		}

  		handledAttributes.push(attribute);
  	}

  	return handledAttributes.length > 0 ? ' ' + handledAttributes.join(' ') : '';
  }

  // import customErrors from './Errors';
  // const customError = new customErrors('link');

  // import ow from 'ow';

  const linkComponent$1 = (params) => {
    // if (typeof params != 'object') {
    //   customError.add('"params" is not "object"');
    // }

    // if (typeof params.attributes == '') {
    //   customError.add('empty attributes');
    // }

    // if (typeof params.content == '') {
    //   customError.add('empty content');
    // }


    const attributesStr = stringifyAttributes$1(attributes);

    const { attributes, content } = params;

    return `<a ${attributesStr}>${content}</a>`;
  };

  // import Errors from './Errors';

  // stringifyAttributes({
  //   rainbow: true,
  //   number: 1,
  //   multiple: ['a', 'b'],
  // });


  const buttonComponent = (params) => {
    const attributes = {
      id: params.id,
      class: `mlContentButton`,
      href: params.href,
      'data-link-id': params.id,
      style: `font-family: "Poppins", sans-serif; background-color: #d6685e; border-radius: 3px; color: #ffffff; display: inline-block; font-size: 17px; font-weight: 400; line-height: 23px; padding: 15px 0 15px 0; text-align: center; text-decoration: none; width: 260px;`,
    };

    const attributesStr = stringifyAttributes$1(attributes);

    // console.log(attributesStr);

    return linkComponent$1({ content: params.text, attributesStr });
  };


  // const error = new Errors('strong');

  // if (content == '') {
  // error.add('No content');
  // }

  const config = {
    id: '12',
    href: 'google.com'
  };
  console.log(buttonComponent(config));

  // Content Button

  // we will probably loose id param during changes that Arthur is doing.
  // const buttonMainBlock = (id, href, text) => {

    


  //   return `<a class="mlContentButton" href="${href}" data-link-id="${id}" 
  //   style="font-family: "Poppins", sans-serif; background-color: #d6685e; border-radius: 3px; color: #ffffff; display: inline-block; font-size: 17px; font-weight: 400; line-height: 23px; padding: 15px 0 15px 0; text-align: center; text-decoration: none; width: 260px;" target="_self">
  //   ${text}
  //   </a>`;
  // };

  const buttonComponentOld = (params) => {
    const { id, href, text } = params;
    const error = new Errors$1('contentButton');

    if (id == '') {
      error.add('No id button');
    }
    if (href == '') {
      error.add('No href button');
    }
    if (text == '') {
      error.add('No text button');
    }

    const attributes = {
      class: `mlContentButton`,
      href: href,
      'data-link-id': id,
      style: `font-family: "Poppins", sans-serif; background-color: #d6685e; border-radius: 3px; color: #ffffff; display: inline-block; font-size: 17px; font-weight: 400; line-height: 23px; padding: 15px 0 15px 0; text-align: center; text-decoration: none; width: 260px;`,
    };

    const html = buttonComponent({ content: text, attributes });
    console.log(html);
    return html;

  //   // const attributesStr = stringifyAttributes(attributes);
  //   // console.log(attributesStr);
  //   // return linkComponent({ content: params.text, attributes });
    // return buttonMainBlock(id, href, text);

  };

  new Errors$1('paragraph');

  new Errors$1('link');

  const separatorComponent = () => {
      return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
    <tbody><tr>
      <td class="mlContentTableCardTd">
        <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
          <tbody><tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
                <tbody><tr>
                  <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
                </tr>
              </tbody></table>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
                <tbody><tr>
                  <td align="center" class="">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="border-top: 1px solid #ededf3; border-collapse: initial;" class="">
                      <tbody><tr>
                        <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
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
    </tbody></table>`;
  };

  // Error

  // if (typeof params != 'object') {
  //   customError.add('"params" is not "object"');
  // }

  // if (typeof params.attributes == '') {
  //   customError.add('empty attributes');
  // }
  const imageComponent = (attributes) => {
    // const { src, width } = attributes;

    // if(!width){
    //   return  `<img src="${src}" border="0" alt=""  style="display: block;">`;
    // }


    // return `<img src="${src}" border="0" alt="" width="${width}" style="display: block;">`;

    return `<img ${attributes}>`;
  };

  buttonComponentOld({
    id: '12',
    href: 'google.com',
    text: 'GoooGLE link'
  });
  console.log(buttonComponentOld);

  // TODO move Weekly menu button section into sub-components
  // const contentSubComponent = (text, recipeRowBlockRes, contentButtonParams) => {

  //     // weekly menu button
  //     const buttonHTML = buttonComponent(contentButtonParams);
    
  //     const contentButtonBlockHTML = contentButtonBlock(buttonHTML);
      
  //     const separatorHTML = separatorComponent();
  //     // All content
  //     const allContent = 
  //         text +
  //         recipeRowBlockRes + 
  //         contentButtonBlockHTML + 
  //         separatorHTML;
    
  //     return allContent;
    
  //   }

    

     // block 2
  const createRecipesPanel = (recipes) => {

    // var recipeHTMLMarkupArray

    // TODO can be made better with listToMatrix method
    var recipeRowBlockHTML = recipeRowBlock(recipes[0], recipes[1]);
    // console.log(recipes[0]);
    recipeRowBlockHTML += recipeRowBlock(recipes[2], recipes[3]);
    recipeRowBlockHTML += recipeRowBlock(recipes[4], recipes[5]);

    // console.log(recipeRowBlockHTML);

    return recipeRowBlockHTML;
  };


  const recipesSectionComponent = (recipes) => {


    if (!recipes) {
      throw new Error('no recipes was passed');
    }

    // console.log(recipes);
    // if (!contentButtonParams) {
    //   throw new Error('no contentButtonParams was passed');
    // }

    const recipeRowBlockHTML = createRecipesPanel(recipes);

    return recipeRowBlockHTML;
  };

  // Create wrap component content


  // const contentSectionOne = () => {
  //   // contentTitleText
  //   const title = createComponent(contentTitleText, contentTitleTextParams);
  //   // contentSubTitleText
  //   const subTitle = createComponent(contentSubTitleText, contentSubTitleParams);
  //   // contentTextDescription
  //   const description = createComponent(
  //     contentTextDescription,
  //     contentTextDescriptionParams
  //   );

  //   return title + subTitle + description;
  // };


  // contentSectionOne = () => {

  const createBlockOne = (title, subTitle, description) => {

    // block 1
    const contentTitleTextHTML = contentTitleText(title);


    const contentSubTitleTextHTML = 'contentSubTitleText(subTitle)';
    // const contentSubTitleTextHTML = contentSubTitleText(subTitle);

    const contentTextDescriptionHTML = contentTextDescription(
      description
    );
    
    const result =
      contentTitleTextHTML + 
      contentSubTitleTextHTML + 
      contentTextDescriptionHTML;
    // return title + subTitle + description;


    return result;

  };


  // TODO move Weekly menu button section into sub-components
  const contentSubComponent = (text, recipeRowBlockRes, contentButtonParams) => {

    // weekly menu button
    const buttonHTML = buttonComponentOld(contentButtonParams);

    const contentButtonBlockHTML = contentButtonBlock(buttonHTML);
    
    const separatorHTML = separatorComponent();
    // All content
    const allContent = 
        text +
        recipeRowBlockRes + 
        contentButtonBlockHTML + 
        separatorHTML;

    return allContent;

  };





  // const contentSectionTwo = () => {
  //   // All Recipe
  //   var imagesAll = contentRecipeParams.map((params) => {
  //     return createComponent(recipeComponent, params);
  //   });
  //   // All contentTableWitchTwoRecipe
  //   const images = createComponent(recipeRowBlock, imagesAll);
  //   // Button
  //   const contentButtonRes = createComponent(
  //     buttonComponent,
  //     contentButtonParams
  //   );
  //   const buttonRes = createComponent(contentButtonBlock, contentButtonRes);

  //   return images + buttonRes;
  // };



  // block 2
  // const createRecipesPanel = (recipes) 


  const StaticComponent = (params) => {
    // distructure params
    const {
      contentTitleTextParams,
      contentSubTitleParams,
      contentTextDescriptionParams,

      recipes,
      contentButtonParams,
    } = params;
  // console.log(recipes);

    if (!recipes) {
      throw new Error('no recipes was passed');
    }

    if (!contentButtonParams) {
      throw new Error('no contentButtonParams was passed');
    }

    
    const text = createBlockOne(
      contentTitleTextParams, 
      contentSubTitleParams, 
      contentTextDescriptionParams
    );


    const recipesSectionHTML = recipesSectionComponent(recipes);

    // All content
    const allContent = contentSubComponent(text, recipesSectionHTML, contentButtonParams);
    
    return allContent;
  };

  class Errors {
    ERROR_MESSAGE = (message) => {
      return `Error in component: "${this.component}",  error message: "${message}"`;
    };
    component = '';

    constructor(component = 'No component') {
      this.component = component;
    }

    add(error) {
      const textError = this.ERROR_MESSAGE(error);
      throw new Error(textError);
    }
  }

  const createImage = (src) => {
    const imgParams = `src="${src}" border="0" alt="" width="200" style="display: block;"`;

    return imageComponent(imgParams);
  };
  // return `<img src="${src}" border="0" alt="" width="200" style="display: block;">`;

  const amazonFreshMainBlock = (src) => {

    const error = new Errors('imageAfterSupportComponent');

    if (src == '') {
      error.add('No src');
    }




    return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
  <tbody><tr>
    <td class="mlContentTableCardTd">
      <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
        <tbody><tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
              </tr>
            </tbody></table>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                    <tbody><tr>
                      <td align="center" id="imageBlock-40">
                        ${createImage(src)}
                      </td>
                    </tr>
                  </tbody></table>
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

  // Instructions section.

  // TODO we are throwing an error with the same constant 10 times.
  // function searchForErrors(params) {
  //   const error = new Errors('instructionComponent');
  //   var { title, text, title2, text2 } = params;

  //   if (title == '') {
  //     error.add('No title');
  //   }
  //   if (text == '') {
  //     error.add('No text');
  //   }
  //   if (title2 == '') {
  //     error.add('No title2');
  //   }
  //   if (text2 == '') {
  //     error.add('No text2');
  //   }
  // }

  // export default function (data) {
  //   searchForErrors(data);
  //   return instructionMainBlock(data);
  // }


  const instructionMainBlock = () => {
  return ` <!-- -->
<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
<tbody><tr>
  <td class="mlContentTableCardTd">
    <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
      <tbody><tr>
        <td>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
            <tbody><tr>
              <td height="20" class="spacingHeight-20" style="line-height: 20px; min-height: 20px;"></td>
            </tr>
          </tbody></table>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
            <tbody><tr>
              <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                  <tbody><tr>
                    <td class="bodyTitle" id="bodyText-34" style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
                      <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%; text-align: center;"></p>
                      <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><strong></strong></p>
                      <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><strong>Ingredients</strong></p>
                      <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">Saffron: Gives traditional Tandoori its famous yellow coloring. This week we are using it in the marinade for the Yogurt Spiced Chicken. It can be pretty expensive, so turmeric is a good alternative, providing the same color and very comparable taste.</p>
                      <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"><strong>Weekend Prep</strong></p>
                      <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">Free up your evening and get a little chopping and prep work done this weekend.</p>
                      <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">Slice and Dice: Cut the vegetables and store in zippered bags or divided containers.</p>
                      <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%;">Make Ahead and Refrigerate: Make the sauce; Cook the noodles; Make the dressing; Make the spaetzle; Cook the rice.<br><br><br><br><strong></strong><br><strong></strong><strong></strong></p>
                    </td>
                  </tr>
                </tbody></table>
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
</tbody></table>
<!-- -->`;
  };

  exports.bodyComponent = bodyComponent;
  exports.imageAfterSupportComponent = amazonFreshMainBlock;
  exports.instructionComponent = instructionMainBlock;
  exports.recipeComponent = recipeComponent;
  exports.staticContentComponent = StaticComponent;

  return exports;

})({});
