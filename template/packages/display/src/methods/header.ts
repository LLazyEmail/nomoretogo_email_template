//TODO add header later into head, also move things as container
import { 
  TopPanelSection, 
  contentMainTableWrap, 
  tableHeaderBlockLogo
}  from 'inner'; 

const topPanelHTML = TopPanelSection();

var settings = {
  topPanel: topPanelHTML, 
  blockLogo: tableHeaderBlockLogo(),
};
const headerAndContentHTMLString = contentMainTableWrap(settings);

export default headerAndContentHTMLString;
