setTimeout(() => {
    let amp = "&amp;";
    let url = document.URL;
    url.includes(amp) ? window.location.replace(amp.replace(amp, "&")) : null;
}, 200);
