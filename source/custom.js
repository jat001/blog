import('//cdn.jsdelivr.net/npm/isbot/index.min.mjs').then((Module) => {
    const isbot = Module.default;

    if (!isbot(navigator.userAgent)) {
        window.location = 'https://github.com/jat001';
    }
})
