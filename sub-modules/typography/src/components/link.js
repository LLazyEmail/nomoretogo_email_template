const linkComponent = (params) => {
    const { attributes, content } = params;

    return `<a ${attributes} target="_blank">${content}</a>`;;
}

export default linkComponent;