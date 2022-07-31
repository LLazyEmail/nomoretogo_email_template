const linkComponent = (params) => {
    const { href, content, styles, attributes } = params;

    return `<a href="${href}" target="_blank" style="${styles}" ${attributes} >${content}</a>`;;
}

export default linkComponent;