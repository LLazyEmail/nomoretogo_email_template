class Factory {
  component = '';
  params = '';
  result = null;

  constructor(component, params = '') {
    // TODO add typeof for a function.
    this.component = component;
    this.params = params;
    this.assembleComponent();
  }

  assembleComponent() {
    try {
      this.result = this.component(this.params);
    } catch (e) {
      throw new Error(e);
    }
  }

  create() {
    return this.result;
  }
}

export default Factory;
