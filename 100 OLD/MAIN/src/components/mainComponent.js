const mainComponent = (params) => {
    if (!params) {
      throw new Error('no Sub Components was passed');
    }
  
    // TODO make it better
    const { head, body, footer } = params;
  
    if (!head || typeof head != 'string') {
      throw new Error('no head was passed');
    }
  
    if (!body || typeof body != 'string') {
      throw new Error('no body was passed');
    }

    if (!footer || typeof footer != 'string') {
      throw new Error('no footer was passed');
    }
  
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN">    
    <html lang="en">
     ${head}
     ${body}
     ${footer} 
    </html>`;
  };
  
  export default mainComponent;