import supportContact from '../components/supportContact';

let data = {
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

try {
  var fullComponent = supportContact(data);
} catch (err) {
  var error = err;
}

var result = error != undefined ? error : fullComponent;

export default result;
