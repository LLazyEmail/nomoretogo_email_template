import displayFactoryTwo from 'email-template-object';

let addon1 = {
    // footer: footerString,

    // variable:value, 
    // variable:value, 
    // variable:value, 
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
