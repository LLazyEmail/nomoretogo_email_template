import { writingFile } from 'markup-generator';

const writeFileParticle = (string, suffix) => {

  writingFile(string, suffix);
  // TODO add a function that will display an output in console.  
  return true;
}

export default writeFileParticle;
