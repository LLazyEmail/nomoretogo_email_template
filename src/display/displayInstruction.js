import instructionComponent from '../components/instructionComponent';
import createComponent from './createComponentUniversal';

/* ******************** DATA START **************************************** */
// Title params
const instructionComponentParams = {
  title: '123',
  text: '123',
  title2: '123',
  text2: '123',
};

/* ******************** DATA END **************************************** */

/* ******************** CREATE CONTENT START ****************************** */
var result = null;
try {
  const instructionComponentRes = createComponent(
    instructionComponent,
    instructionComponentParams
  );

  result = instructionComponentRes;
} catch (error) {
  console.log(error.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
