import { headHTMLString } from 'nmtg-template-display';

import { writeFileParticle } from '../writeFileParticle.js';


describe('write', () => {
  it('should work', () => {

    writeFileParticle(headHTMLString, 'nmtg-Head');

    // expect(write()).toEqual('write');
  });
});
