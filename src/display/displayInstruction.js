import instructionComponent from '../components/instructionComponent';
import createComponent from './createCopmonentUniversal';

/* ******************** DATA START **************************************** */
// Title
const instructionComponentParams = {
  title: '123',
  text: '123',
  title2: '',
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
} catch (e) {
  console.log(e.message);
}
/* ******************** CREATE CONTENT END ****************************** */
export default result;
