class Errors {
  ERROR_MESSAGE = (message) => {
    return `Error in component: "${this.component}",  error message: "${message}"`;
  };
  component = '';

  constructor(component = 'No component') {
    // TODO this statement is giving errors from time to time.
    // I think we need to debug it.
    this.component = component;
  }

  add(error) {
    const textError = this.ERROR_MESSAGE(error);
    throw new Error(textError);
  }
}

export default Errors;
