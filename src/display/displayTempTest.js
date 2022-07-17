import Factory from './factory';
import universal from './displayUniversal';
import {
  contentButton,
  contentButtonBlock,
} from 'nmtg-template-mailerlite-inner';

const result = null;
try {
  result = universal(contentButton, '');
} catch (e) {
  console.log(e);
}

// var error = '';
// var result = null;
// try {
//   var params = {
//     id: '123',
//     href: '123',
//     text: '123',
//   };

//   const factory = new Factory(contentButtonBlock, params);
//   result = factory.create();
// } catch (e) {
//   error = e.message;
// }

// if (error != '') {
//   console.log(error);
// }

export default result;
