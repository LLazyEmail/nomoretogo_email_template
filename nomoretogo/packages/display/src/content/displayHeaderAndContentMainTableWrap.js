
import { TopPanelSection, contentMainTableWrap }  from 'inner'; 

const topPanelHTML = TopPanelSection();

var settings = {
  topPanel: topPanelHTML, 
  blockLogo: tableHeaderBlockLogo(),
};
const headerAndContentHTMLString = contentMainTableWrap(settings);

export default headerAndContentHTMLString;
