import Errors from './Errors';
// const error = new Errors('footerComponent');

// Create footerSocial start
// TODO add linkComponent
// TODO add image
const SocialPanelComponent  = (socials) => {

  var socialPanel = false;
  socials.map(({href, src}) => {


    // if (href == '') {
    //   error.add('No href');
    // }
    // if (src == '') {
    //   error.add('No src');
    // }


    //-----------------
    // const image = createPathToImage(social.src);
    const image = src;

      socialPanel += `<td align="center" width="24" style="padding: 0px 5px;" ng-show="slink.link != ''">
        <a href="${href}" target="_self">
        <img width="24" alt="facebook" 
        src="${image}" 
        style="display: block;" border="0">
        </a>
        </td>`;
  });

  return socialPanel;

  };
  // Create footerSosial end

  export default SocialPanelComponent;
