// type Fcomponent = (parameters:any) => void;

abstract class AbstractFactory {
    abstract assembleComponent(): void;
    params: any;
    public result: string;
  }
  
  
  class Factory extends AbstractFactory {
   
  
    // function componentName(parameters:any): void;
  
    // component(): void {
    //   this.componentMethod(this.params);
    // }
  
  
    constructor(componentName, params) {
      super();
      // TODO add typeof for a function.
      this.componentName = componentName;
      this.params = params || '';
      this.assembleComponent();
    }
  
    assembleComponent(): void {
      try {
        this.result = this.componentName(this.params);
      } catch (e) {
        throw new Error(e);
      }
    }
  
    create() {
      return this.result;
    }
  }
  
  export default Factory;
  