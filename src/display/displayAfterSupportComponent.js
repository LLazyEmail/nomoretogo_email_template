import afterSupportComponent from '../components/afterSupportComponent';

const src = '123';

try {
  var fullComponent = afterSupportComponent(src);
} catch (err) {
  var error = err;
}

var result = error != undefined ? error : fullComponent;

export default result;
