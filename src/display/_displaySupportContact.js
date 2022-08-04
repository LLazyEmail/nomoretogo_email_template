import Factory from './factory';


import { supportComponent } from 'nmtg-template-mailerlite-outertemplate';

var error = '';
var result = null;


try {
  var params = {
    topTitle: '123',
    topLinkHref: '123',
    topLinkId: '123',
    topLinkText: '123',
    bottomTitle: '123',
    bottomLinkHref: '123',
    bottomLinkId: '123',
    bottomLinkText: '123',
    bottomTextContact: '123',
  };

  const factory = new Factory(supportComponent, params);
  result = factory.create();
} catch (e) {
  error = e.message;
}

if (error != '') {
  console.log(error);
}

export default result;
