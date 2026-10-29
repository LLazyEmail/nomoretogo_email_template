
import BodyHTMLString from 'nmtg-template-display';

import { writeGeneratedFile } from 'markup-generator';
const writeFileParticle = (string, suffix) => { void writeGeneratedFile({ content: string, prefix: suffix }); return true; };

export default writeFileParticle(BodyHTMLString, 'nmtg-Body')


// import { writingFile } from 'markup-generator';

// import {BodyHTMLString} from '../src/display/displayBody';
// // import { BodyHTMLString } from '../src/display/displayBody';


// describe('body display method must be initialized', () => {
  
//    // test('display body', () => {
//   //   expect(BodyHTMLString === true).toBe(true);
//   // });

//   test('display body', () => {
//     expect(typeof BodyHTMLString === 'string').toBe(true);
//   });
  
// });


// describe('writing components into files', () => {
  
//     test('write body', () => {
//       const string5 = BodyHTMLString;

//       // console.log(string);
//       expect(BodyHTMLString).toBeDefined();

//       writingFile(string5, 'HN-Body');
//   });
// });
