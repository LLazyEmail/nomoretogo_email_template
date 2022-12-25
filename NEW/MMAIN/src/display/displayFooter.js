import { footerComponent, amazonFreshBlock, supportComponent  } from 'nmtg-template-mailerlite-outertemplate';
import { SocialPanelComponent } from 'nmtg-template-mailerlite-miscellaneous';

import Factory from './factory';
import createComponent from './createComponentUniversal';

import socialsLinksParams from './socialLinksData';
/* ******************** DATA START **************************************** */

import {     
  buttonComponent2
 } from 'nmtg-template-mailerlite-typography';

//  buttonComponent2({id: '12', href: 'google.com'});


// TODO can be moved into config later
const imagePath = 'https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/amazon.png';



var params = {
  topTitle: 'No More To-Go Facebook Users:',
  // topLinkHref: '123',
  topLinkId: 'fb-group',
  topLinkText: 'Facebook Group Page',
  bottomTitle: 'Have Questions?',
  // bottomLinkHref: '123',
  bottomLinkId: 'email-id',
  bottomLinkText: '"How Can We Help',
  // bottomTextContact: 'bottomTextContact',
};





  




/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {


  const imageBlock = createComponent(
    amazonFreshBlock,
    imagePath
  );


  const factory = new Factory(supportComponent, params);
  const supportBlock = factory.create();

  // console.log(supportBlock);
  
  const socialMedia = createComponent(SocialPanelComponent, socialsLinksParams);

  //  console.log(socialMedia);
  
  
  const config = {
    socialPanel: socialMedia,
    amazonFreshBlock: imageBlock,
    supportBlock: supportBlock
  }


  result = createComponent(footerComponent, config);

  // console.log(result);


} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
