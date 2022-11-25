// we using this component inside displayMain

import instructionComponent from '../components/instructionComponent';

import createComponent from './createComponentUniversal';

import instructionComponentParams from './_instructionData';

/* ******************** DATA START **************************************** */
// Title params
// const instructionComponentParams = {
//   title: 'Ingredients',
//   text: `Saffron: Gives traditional Tandoori its famous yellow coloring. 
//   This week we are using it in the marinade for the Yogurt Spiced Chicken. 
//   It can be pretty expensive, so turmeric is a good alternative, providing the same color and very comparable taste.`,
//   title2: 'Weekend Prep',
//   text2: '123',
// };

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
