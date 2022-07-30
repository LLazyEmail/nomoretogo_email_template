const linkComponent = (params) => {
    const { href, content, styles } = params;

    return `<a href="${href}" target="_blank" style="${styles}">${content}</a>`;;
}

export default linkComponent;