// import displayFactoryTwo from 'email-template-object';

// import footerComponent from '../../components/outerTemplate/src/components/footerComponent';

// @TODO for footerComponent i need an example of what we exactly passing inside it

// let addon1 = {
// footer: footerComponent(),
// variable:value,
//};

//variant one
// const settings = {
//   component: footerComponent,
//   params: {},
// };

// const Factory = new displayFactoryTwo();

// console.log(Factory.create(settings));
// export default Factory.create(settings);

//////////////////// NEW VERSION //////////////////////////////////

import footerComponent from '../domain/outer/old_footerComponent';
try {
  var fullComponent = footerComponent([]);
} catch (err) {
  var error = err;
}

var result = error != undefined ? error : fullComponent;

export default result;
