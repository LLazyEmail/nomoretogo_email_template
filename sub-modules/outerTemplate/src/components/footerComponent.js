// Create footer component

import Errors from './Errors';
const error = new Errors('footerComponent');

// Config file
import { pathSocialIcons, unsubscribe } from '../config';

// Create path to image start
function createPathToImage(src) {
  return pathSocialIcons + src;
}
// Create path to image end

// Title
const title = 'No More To-Go';

// Address
const address = () => {
  return `<p style="margin-top: 0px; margin-bottom: 0px;">Dallas,&nbsp;Texas United States</p>`;
};

// Discription
const discription = () => {
  return `<p style="margin-top: 0px; margin-bottom: 0px;">You received this email because you signed up on our website or made a purchase from us.</p>`;
};

// Unsubscribe
const createUnsubscribe = (href) => {
  if (href == '') {
    error.add('No unsubscribe');
  }
  return `<a href="${href}" style="color: #111111; text-decoration: underline;">
    <span style="color: #111111;">Unsubscribe</span>
    </a>`;
};

// Create footerSosial start
const createSocialPanel = function (socials) {
  return socials.map((social) => {
    if (social.href == '') {
      error.add('No href');
    }
    if (social.src == '') {
      error.add('No src');
    }
    return `<td align="center" width="24" style="padding: 0px 5px;" ng-show="slink.link != ''">
        <a href="${social.href}" target="_self">
        <img width="24" alt="facebook" 
        src="${createPathToImage(social.src)}" 
        style="display: block;" border="0">
        </a>
        </td>`;
  });
};
// Create footerSosial end

// Create foot content start
const mainBlock = (socials) => {
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
                      <td align="left" class="bodyTitle" style="font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700; line-height: 150%; color: #111111;">${title}</td>
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
                              ${address()}
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
                                ${createSocialPanel(socials)}
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                        </tbody></table>
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" width="267" style="width: 267px; min-width: 267px;" class="mlContentTable">
                          <tbody><tr>
                            <td align="right" class="bodyTitle" id="footerUnsubscribeText-44" style="font-family: 'Poppins', sans-serif; font-size: 12px; line-height: 150%; color: #111111;">
                              ${discription()}
                            </td>
                          </tr>
                          <tr>
                            <td height="10"></td>
                          </tr>
                          <tr>
                            <td align="right" class="bodyTitle" style="font-family: 'Poppins', sans-serif; font-size: 12px; line-height: 150%; color: #111111;">
                             ${createUnsubscribe(unsubscribe)}
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
// Create foot content end

export default function (socials) {
  return mainBlock(socials);
}
