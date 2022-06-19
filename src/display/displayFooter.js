import displayFactoryTwo from './factoryTwo';

import footerComponent from '../../components/outerTemplate/src/components/footerComponent';


// @TODO for footerComponent i need an example of what we exactly passing inside it

let addon1 = {
    footer: footerComponent(),

    // logoTop:logoTopComponent(), 
    // logoBottom: logoBottomComponent(), 
    // content:'[[THIS IS PLACE FOR A CONTENT INSIDE]',
    // previewText:previewTextComponent('[AMA PREVIEW TEXT]')

}

//variant one
const settings = {
    component: '',
    params: {  },
    subcomponents: {  }
}

const Factory = new displayFactoryTwo();

Factory.create(settings);
