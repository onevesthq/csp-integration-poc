export const addExecutableScript = (srcURL) => {
    const script = document.createElement('script');
    script.src = srcURL;
    document.body.appendChild(script);
};

export const addScriptIsland = (attrs, payload) => {
    const script = document.createElement('script');
    script.type = 'application/json';
    Object.keys(attrs).forEach((attribute) => {
        script.setAttribute(`${attribute}`, attrs[attribute]);
    });

    script.textContent = JSON.stringify(payload);
    document.body.appendChild(script);
}