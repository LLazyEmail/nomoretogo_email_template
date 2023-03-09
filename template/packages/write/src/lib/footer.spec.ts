import { footerHTMLString } from 'nmtg-template-display';

import { writeFileParticle } from 'markup-generator';


describe('write', () => {
  it('should work', () => {

    writeFileParticle(footerHTMLString, 'nmtg-Head');

    // expect(write()).toEqual('write');
  });
});
