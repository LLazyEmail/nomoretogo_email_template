import contentMainTableWrap from '../domain/innerTemplate/contentMainTableWrap';

try {
  var fullComponent = contentMainTableWrap('123', 'href');
} catch (err) {
  var error = err;
}

var result = error != undefined ? error : fullComponent;

export default result;
