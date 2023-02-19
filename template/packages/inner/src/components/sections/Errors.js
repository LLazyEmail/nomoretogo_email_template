class Errors {
  ERROR_MESSAGE = (message) => {
    return `Error in component: "${this.component}",  error message: "${message}"`;
  };
  component = '';

  constructor(component = 'No component') {
    this.component = component;
  }

  add(error) {

    // TODO should we add line tracing details?
    const textError = this.ERROR_MESSAGE(error);
    throw new Error(textError);


  }
}

export default Errors;
