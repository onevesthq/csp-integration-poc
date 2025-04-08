import simility from './integrations/simility';

const startApp = () => {
    console.log('Starting application');

    simility.init();
    console.log('Application started!');
};

document.addEventListener('DOMContentLoaded', startApp);