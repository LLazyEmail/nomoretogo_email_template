import titleTextMainBlock from './title';
import subTitleMainBlock from './subtitle';
import textDescriptionMainBlock from './description';

const contentContainer = (params: { title: string, subtitle: string, description: any }) => {

    const titleHTML = titleTextMainBlock(params.title);

    const subtitleHTML = subTitleMainBlock(params.subtitle);

    const descriptionHTML = textDescriptionMainBlock(
            params.description.textTop, 
            params.description.textBottom
        );

    // const text = '<!--  TEXT -->';
    const text = titleHTML + subtitleHTML + descriptionHTML;
    
    return text;    
}

export default contentContainer;