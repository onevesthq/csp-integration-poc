import {
    addScriptIsland, addExecutableScript
} from '../utils';

const init = () => {
    console.log('Initializing Simility');

    addScriptIsland(
        { fncls: 'fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99' },
        { f: '196ed380-7742-460d-aebc-a376d7effead', s: 'OV_PoC_PAGE' }
    )
    console.log('Added script configuration data');

    addExecutableScript('https://c.paypal.com/da/r/fb.js');
    console.log('Injected executable init script');
};

export default { init };