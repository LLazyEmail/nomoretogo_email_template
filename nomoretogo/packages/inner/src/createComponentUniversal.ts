import Factory from './Factory';
// import { catchErrorTraceOutput } from './../methods';

function createComponent(component:void, params:any) {
  let error = '';
  let result = null;

  // TODO add a message that we cant find a component that you are passing into
  // duplicate of a created issue
  // Plus check if component is a function or not.
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
