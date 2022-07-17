class Errors {
  ERROR_MASSAGE = (mes) => {
    return `Error in component: "${this.component}",  error message: "${mes}"`;
  };
  component = '';

  constructor(component = 'No component') {
    this.component = component;
  }

  add(err) {
    const textError = this.ERROR_MASSAGE(err);
    throw new Error(textError);
  }
}

export default Errors;
