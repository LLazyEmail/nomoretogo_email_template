import bodyComponent from '../components/bodyComponent';

const bodyData = '123';

try {
  var fullComponent = bodyComponent(bodyData);
} catch (err) {
  var error = err;
}

var result = error != undefined ? error : fullComponent;

export default result;
