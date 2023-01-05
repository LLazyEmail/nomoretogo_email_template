// create tableHeaderBlockLogo
import { pathMainLogo } from '../config';
import Errors from './Errors';

import { imageComponent } from 'nmtg-template-mailerlite-typography';

const imageParams = `src="${pathMainLogo}" id="logoBlock-4" border="0" alt="" width="560" style="display: block;"`;
const imageLogo = imageComponent(imageParams);

// Block header/logotip start

const tableHeaderBlockLogo = () => {
  
  return `<table align="center" border="0" bgcolor="#ffffff" class="mlContentTable mlContentTableDefault" cellpadding="0" cellspacing="0" width="640">
  <tbody><tr>
    <td class="mlContentTableCardTd">
      <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="mlContentTable ml-default" style="width: 640px; min-width: 640px;" width="640">
        <tbody><tr>
          <td>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" class="mlContentTable">
              <tbody><tr>
                <td align="center" style="padding: 0px 40px;" class="mlContentOuter">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" width="100%">
                    <tbody><tr>
                      <td align="center">                        
                        ${imageLogo}                        
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
// Block header/logotip end

export default function () {
  const error = new Errors('tableHeaderBlockLogo');
  if (pathMainLogo == '') {
    error.add('No pathMainLogo tableHeaderBlockLogo');
  }

  return tableHeaderBlockLogo();
}
