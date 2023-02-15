import titleTextMainBlock from './title';
import subTitleMainBlock from './subtitle';
import textDescriptionMainBlock from './description';

const contentContainer = ({ title, subtitle, description }) => {

    const titleHTML = titleTextMainBlock(title);

    const subtitleHTML = subTitleMainBlock(subtitle);

    const descriptionHTML = textDescriptionMainBlock(description.textTop, description.textBottom);

    // const text = '<!--  TEXT -->';
    const text = titleHTML + subtitleHTML + descriptionHTML;
    
    return text;    
}

export default contentContainer;