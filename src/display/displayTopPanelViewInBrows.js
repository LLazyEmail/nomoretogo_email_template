import topPanelViewInBrows from '../domain/outer/topPanelViewInBrows';

try {
  var fullComponent = topPanelViewInBrows(1, 'href');
} catch (err) {
  var error = err;
}

var result = error != undefined ? error : fullComponent;

export default result;
