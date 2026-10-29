import { writeGeneratedFile } from 'markup-generator';

/** Local shim — writeFileParticle was removed from markup-generator after v2.x. */
export function writeFileParticle(string, suffix) {
  void writeGeneratedFile({ content: string, prefix: suffix });
  return true;
}

export default writeFileParticle;
