import strongComponent from "../components/strong";

const attributes = {
    style: "width: 600px"
  }
  
const content = "Bla bla bla";

describe('strong component', () => {
    it('should work', () => {

    const strongHTML = strongComponent({attributes, content}); console.log(strongHTML);

      expect(typeof strongHTML).toBe('string');
    });
  });
  