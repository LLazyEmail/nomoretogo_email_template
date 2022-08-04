import Factory from './factory';
// import { catchErrorTraceOutput } from './../methods';

function createComponent(component, params = '') {
  var error = '';
  var result = null;

  if (component == undefined) {
    throw new Error(
      'Error, component - "createComponentUniversal" , message - "component undefined" '
    );
  }
  if (component == '') {
    throw new Error(
      'Error, component - "createComponentUniversal" , message - "component empty" '
    );
  }

  try {
    const factory = new Factory(component, params);
    result = factory.create();
  } catch (e) {
    error = e.message;

    // catchErrorTraceOutput(e);
  }

  if (error != '') {
    // TODO causing an error in display footer
    throw new Error(error);
  }

  return result;
}

export default createComponent;
