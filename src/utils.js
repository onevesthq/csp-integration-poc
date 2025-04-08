
const addScriptAttributes = (script, attributes = {}) => {
    const attrs = Object.keys(attributes);
    if (!script || attrs.length === 0) return;

    attrs.forEach((attr) => {
        script.setAttribute(`${attr}`, attributes[attr]);
    });
};

export const addExecutableScript = (srcURL, attrs = {}) => {
    const script = document.createElement('script');
    script.src = srcURL;
    const { onload, ...otherAttrs } = attrs;
    addScriptAttributes(script, otherAttrs);
    document.body.appendChild(script);

    if (onload && typeof onload === 'function') {
        script.onload = onload;
    }
};

export const addScriptIsland = (payload, attrs = {}) => {
    const script = document.createElement('script');
    script.type = 'application/json';
    addScriptAttributes(script, attrs);

    script.textContent = JSON.stringify(payload);
    document.body.appendChild(script);
}