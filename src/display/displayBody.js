import displayFactoryTwo from './factoryTwo';

import bodyComponent from '../components/bodyComponent'

let addon1 = {
    // footer: footerString,

   // variable:value,
   // variable:value, 
   // variable:value, 
   // variable:value,  

}
//variant one
const settings = {
    component: bodyComponent,
    params: {  },

}

const Factory = new displayFactoryTwo();

console.log(Factory.create(settings))
// export default Factory.create(settings);
