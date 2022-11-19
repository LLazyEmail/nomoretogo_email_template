import { displayFactoryTwo, factoryFour } from 'email-template-object';


import { bodyComponent } from 'nmtg-template-mailerlite-outertemplate';


import displayContentMainTableWrap from './displayContentMainTableWrap';
import displayContent from './displayContent';
import displayInstruction from './displayInstruction';


// Body params

const bodyComponentParams = `
${displayContentMainTableWrap}
${displayContent}
${displayInstruction}
`;


let addon = {
    footer: '',
    content: '',

};


const settings = {
    component: '',
    params: addon
}


const BodyFactory = true;
const BodyHTMLString = true;

export {
    BodyFactory,
    settings,
    BodyHTMLString
}