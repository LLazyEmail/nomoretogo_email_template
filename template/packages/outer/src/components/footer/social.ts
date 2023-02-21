// TODO add linkComponent
// TODO add image
// import {
  // linkComponent,
  // imageComponent,
  // imageLink
// } from 'typo';

// import ow from 'ow';

// import Errors from './Errors';
// const error = new Errors('footerComponent');

const SocialPanelComponent  = (socials:any) => {

  
  let socialPanel:string = ''; 
  socials.map((social:{href:string, src:string}) => {

    let { href, src } = social;

    // ow(href, ow.string.not.empty);
    // ow(src, ow.string.not.empty);

    //-----------------
    // const image = createPathToImage(social.src);
    // const image = src;

      socialPanel += `<td align="center" width="24" style="padding: 0px 5px;" ng-show="slink.link != ''">
        <a href="${href}" target="_self">
        <img width="24" alt="facebook" 
        src="${src}" 
        style="display: block;" border="0">
        </a>
        </td>`;
  });

  return socialPanel;

  };
  

  export default SocialPanelComponent;
