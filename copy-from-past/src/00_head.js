// TODO combine all methods into one file, as they looks very simple right now.
import { headHTMLString } from 'nmtg-template-display';

import {writeFileParticle} from 'markup-generator';

export default writeFileParticle(headHTMLString, 'nmtg-Head');
