class Errors {
  ERROR_MESSAGE = (message:string) => {
    return `Error in component: "${this.component}",  error message: "${message}"`;
  };
  component = '';

  constructor(component = 'No component') {
    this.component = component;
  }

  add(error:string) {
    const textError = this.ERROR_MESSAGE(error);
    throw new Error(textError);
  }
}

export default Errors;
