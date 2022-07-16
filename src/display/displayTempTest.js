import Factory from './factory';
import { contentButton } from 'nmtg-template-mailerlite-inner';

var error = '';
var result = null;
try {
  var params = {
    id: '123',
    href: '123',
    text: '123',
  };

  const factory = new Factory(contentButton, params);
  result = factory.create();
} catch (e) {
  error = e.message;
}

if (error != '') {
  console.log(error);
}

export default result;
