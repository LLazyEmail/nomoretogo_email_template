import displayFactoryTwo from './factoryTwo';

//variant one
const settings = {
    component: '',
    params: {  },
    subcomponents: {  }
}

const Factory = new displayFactoryTwo();

Factory.create(settings);