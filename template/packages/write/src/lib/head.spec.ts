import { headHTMLString } from 'nmtg-template-display';

import { writeFileParticle } from 'markup-generator';


describe('write', () => {
  it('should work', () => {

    writeFileParticle(headHTMLString, 'nmtg-Head');

    // expect(write()).toEqual('write');
  });
});
