import displayFactoryTwo from 'email-template-object';

import bodyComponent from '../components/bodyComponent'

let addon1 = {
    

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
