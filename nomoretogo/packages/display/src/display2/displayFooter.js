import { displayFactoryTwo } from 'email-template-object';

// import { footerComponent, amazonFreshBlock, supportComponent  } from 'nmtg-template-mailerlite-outertemplate';
// import { SocialPanelComponent } from 'nmtg-template-mailerlite-miscellaneous';

// import socialsLinksParams from './socialLinksData';



const addon = {
    address: true,
    copyright: true,
    unsubscribe: true,
    social: true
}


const settings = {
    component: footerComponent,
    params: addon
}


const FooterFactory = new displayFactoryTwo();

const FooterHTMLString = FooterFactory.create(settings);

export {
    FooterFactory,
    settings,
    FooterHTMLString
}