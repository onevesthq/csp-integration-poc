const addExecutableScript = (srcURL) => {
    const script = document.createElement('script');
    script.src = srcURL;

    document.body.appendChild(script);
};

const addScriptIsland = (attrs, payload) => {
    const script = document.createElement('script');
    script.id = 'fncls';
    script.type = 'application/json';
    Object.keys(attrs).forEach((attribute) => {
        script.setAttribute(`${attribute}`, attrs[attribute]);
    });

    script.body = JSON.stringify(payload);
    document.body.appendChild(script);
}

const startApp = () => {
    console.log('starting Nonce application script');
    addScriptIsland(
        {'fncls': 'fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99'},
        {'f': '196ed380-7742-460d-aebc-a376d7effead', 's': 'OV_PoC_PAGE'}
    )
    console.log('add script data payload');

    addExecutableScript('https://c.paypal.com/da/r/fb.js');
    console.log('injected script');

};

document.addEventListener('DOMContentLoaded', startApp);