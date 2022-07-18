import Factory from './factory';

function createComponent(component, params = '') {
  var error = '';
  var result = null;
  try {
    const factory = new Factory(component, params);
    result = factory.create();
  } catch (e) {
    error = e.message;
  }

  if (error != '') {
    throw new Error(error);
  }

  return result;
}

export default createComponent;
