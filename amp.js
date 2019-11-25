setTimeout(() => {
    let amp = "&amp;";
    let url = document.URL;
    url.includes(amp) ? window.location.replace(url.replace(amp, "&")) : null;
}, 200);
