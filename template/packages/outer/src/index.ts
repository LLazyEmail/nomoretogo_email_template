// export * from './lib/outer';


import { pre_tags, post_tags } from './components/head/tags';

//------------
import footerComponent from './components/footer/footerComponent';
import SocialPanelComponent from './components/footer/social';

import headComponent from './components/headComponent';
import bodyComponent from './components/bodyComponent';
import mainComponent from './components/mainComponent';
//------------
//------------


export {
  //--------
  footerComponent, SocialPanelComponent,
  headComponent,
  bodyComponent,
  mainComponent,
  //------
  pre_tags,
  post_tags,
};
