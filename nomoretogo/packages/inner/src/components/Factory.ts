type Fcomponent = (parameters:any) => void;

abstract class AbstractFactory {
  abstract component(): Fcomponent;
  params: any;
  public result: string;
}


class Factory extends AbstractFactory {
  // component = '';
  // params = '';
  // result = null;

  constructor(component, params) {
    super();
    // TODO add typeof for a function.
    this.component = component;
    this.params = params || '';
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
