import simility from './integrations/simility';
import zendesk from './integrations/zendesk';

const startApp = () => {
    console.log('Starting application');

    simility.init();
    zendesk.init();
    console.log('Application started!');
};

document.addEventListener('DOMContentLoaded', startApp);