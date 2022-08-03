// Create support component
import { mailingAddress } from '../config';
import { strong, linkComponent, separatorComponent } from 'nmtg-template-mailerlite-typography';
import Errors from './Errors';


const error = new Errors('supportComponent');

// TODO import linkComponent
const createSupportLink = (href, id, text) => {
  if (href == '') {
    error.add('href');
  }
  if (id == '') {
    error.add('id');
  }
  if (text == '') {
    error.add('text');
  }

  return `<a
    href="${href}"
    data-link-id="${id}"
    target="_blank"
    style="word-break: break-word; font-family: 'Poppins', sans-serif; color: #09c269; text-decoration: underline;"
  >
    ${text}
  </a>`;
};

// TODO it's definately a heading ... <h4>${createSupportTitle(topTitle)}<br></h4>
const createSupportTitle = (title) => {
  if (title == '') {
    error.add('title');
  }

  return strong(title);
};

const createSupportTextTop = (href, id, text) => {
  if (href == '') {
    error.add('href textTop');
  }
  if (id == '') {
    error.add('id textTop');
  }
  if (text == '') {
    error.add('text textTop');
  }



  return `Connect with other home cooks on our closed group for No More To-Go Members Only 
  ${createSupportLink(
    {
      href: 'https://www.facebook.com/groups/nmtg.homecooks',
    },
    id,
    text
  )}.`;
};

const createSupportMail = (textMail) => {
  if (textMail == '') {
    error.add('textMail');
  }

  return `<a href="${mailingAddress}" style="word-break: break-word; font-family: 'Poppins', sans-serif; color: #09c269; text-decoration: underline;">${textMail}.&nbsp;</a>`;
};


{/* <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">
${createSupportTitle(bottomTitle)}
<br>
${createSupportTextBottom(
  bottomLinkHref,
  bottomLinkId,
  bottomLinkText,
  bottomTextContact
)}
<br><strong><br></strong>
</p> */}

const createSupportTextBottom = (href, id, text, textMail) => {
  if (href == '') {
    error.add('href textBottom');
  }
  if (id == '') {
    error.add('id textBottom');
  }
  if (text == '') {
    error.add('text textBottom');
  }
  // TODO very strange line, it will be better to define 2 variables before 
  // return statement and make this string a bit simplier.
  return `"Please contact us via the "
  ${createSupportLink(href, id, text)} 
  " link at the bottom of each page on the site. Or, email us at "
  ${createSupportMail(textMail)}`;
};

const mainBlock = (params) => {
  var {
    topTitle,
    topLinkHref,
    topLinkId,
    topLinkText,

    bottomTitle,
    bottomLinkHref,
    bottomLinkId,
    bottomLinkText,
    bottomTextContact,
  } = params;

  
  return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
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
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                    <tbody><tr>
                      <td class="bodyTitle" id="bodyText-36" style="font-family: 'Poppins', sans-serif; font-size: 14px; line-height: 150%; color: #6f6f6f;">
                        <h4>${createSupportTitle(topTitle)}<br></h4>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">
                        ${createSupportTextTop(
                          topLinkHref,
                          topLinkId,
                          topLinkText
                        )}</p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;"></p>
                        <p style="margin-top: 0px; margin-bottom: 10px; line-height: 150%;">
                        ${createSupportTitle(bottomTitle)}
                        <br>
                        ${createSupportTextBottom(
                          bottomLinkHref,
                          bottomLinkId,
                          bottomLinkText,
                          bottomTextContact
                        )}
                        <br><strong><br></strong>
                        </p>
                        <p style="margin-top: 0px; margin-bottom: 0px; line-height: 150%;"></p>
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
${separatorComponent()}`;
};

export default function (data) {
  return mainBlock(data);
}
