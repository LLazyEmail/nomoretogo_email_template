// we are using this component inside displayMain

import instructionComponent from '../components/instructionComponent';

import createComponent from './createComponentUniversal';


/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {
  const instructionComponentRes = createComponent(
    instructionComponent
  );

  result = instructionComponentRes;
} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
