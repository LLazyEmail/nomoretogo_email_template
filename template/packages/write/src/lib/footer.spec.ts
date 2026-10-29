import { footerHTMLString } from 'nmtg-template-display';

import { writeFileParticle } from '../writeFileParticle.js';


describe('write', () => {
  it('should work', () => {

    writeFileParticle(footerHTMLString, 'nmtg-Head');

    // expect(write()).toEqual('write');
  });
});
