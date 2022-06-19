import displayFactoryTwo from './factoryTwo';

let addon1 = {
    // footer: footerString,

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
