import { addExecutableScript } from '../utils';

const zELoaded = () => {
    console.log('zE init script loaded!');

    if (!window.zE) return;
    console.log('window.zE exists!');

    window.zE('webWidget', 'identify', {
        name: 'Test User',
        email: 'test@example.com',
    });

    window.zE('webWidget', 'updateSettings', {
        webWidget: {
            color: {
                theme: '#f0f8ff',
            },
            launcher: {
                mobile: {
                    labelVisible: true,
                },
            },
        },
    });

    console.log('zE widget configured!');
}

const init = () => {
    console.log('Initializing Zendesk');
    const clientRoleKey = 'a77c3491-8a21-4914-9b9f-4f70edc21731';

    addExecutableScript(
        `https://static.zdassets.com/ekr/snippet.js?key=${clientRoleKey}`,
        {
            async: true,
            id: 'ze-snippet',
            onload: zELoaded
        }
    );
    console.log('Injected executable init script');
};

export default { init };