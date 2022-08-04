import Errors from './Errors';
const error = new Errors('footerComponent');

// Create footerSosial start
// TODO add linkComponent
// TODO add image
const SocialPanelComponent  = function (socials) {
    return socials.map((social) => {
      if (social.href == '') {
        error.add('No href');
      }
      if (social.src == '') {
        error.add('No src');
      }
      //-----------------
      // const image = createPathToImage(social.src);
      const image = social.src;
  
      return `<td align="center" width="24" style="padding: 0px 5px;" ng-show="slink.link != ''">
          <a href="${social.href}" target="_self">
          <img width="24" alt="facebook" 
          src="${image}" 
          style="display: block;" border="0">
          </a>
          </td>`;
    });
  };
  // Create footerSosial end

  export default SocialPanelComponent ;