import instructionComponent from '../components/instructionComponent';

const data = {
  title: '123',
  text: '123',
  title2: '123',
  text2: '123',
};

try {
  var fullComponent = instructionComponent(data);
} catch (err) {
  var error = err;
}

var result = error != undefined ? error : fullComponent;

export default result;
