import title from './title';
import subtitle from './subtitle';
import description from './description';

const contentContainer = (params: { titleVar: string, subtitleVar: string, descriptionVar: any }) => {

    const titleHTML = title(params.titleVar);

    const subtitleHTML = subtitle(params.subtitleVar);

    const descriptionHTML = description(
            params.descriptionVar.textTop, 
            params.descriptionVar.textBottom
        );

    // const text = '<!--  TEXT -->';
    const text = titleHTML + subtitleHTML + descriptionHTML;
    
    return text;    
}

export default contentContainer;