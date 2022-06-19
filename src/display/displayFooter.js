import displayFactoryTwo from './factoryTwo';

import footerComponent from '../../components/outerTemplate/src/components/footerComponent';


// @TODO for footerComponent i need an example of what we exactly passing inside it

let addon1 = {
    footer: footerComponent(),

    // variable:value, 

}

//variant one
const settings = {
    component: '',
    params: {  },
 
}

const Factory = new displayFactoryTwo();

console.log(Factory.create(settings))
// export default Factory.create(settings);
