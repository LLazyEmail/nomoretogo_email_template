// TODO update this module with factory

import imageAfterSupportComponent from '../components/imageAfterSupportComponent';

const src = '123';

try {
  var fullComponent = imageAfterSupportComponent(src);
} catch (err) {
  var error = err;
}

var result = error != undefined ? error : fullComponent;

export default result;
