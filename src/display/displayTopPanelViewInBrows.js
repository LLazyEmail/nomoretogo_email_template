import topPanelViewInBrows from '../domain/outer/topPanelViewInBrows';

// TODO Vadim not sure why we need a try statement here.
// looks strange

try {
  var fullComponent = topPanelViewInBrows(1, 'href');
} catch (err) {
  var error = err;
}

var result = error != undefined ? error : fullComponent;

export default result;
