import Factory from './factory';

function display(component, params = '') {
  var error = '';
  var result = null;
  try {
    const factory = new Factory(component, params);
    result = factory.create();
  } catch (e) {
    error = e.message;
  }

  if (error != '') {
    console.log(error);
  }

  return result;
}

export default display;
