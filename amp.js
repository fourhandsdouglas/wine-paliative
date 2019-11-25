setTimeout(() => {
    let amp = "&amp;";
    let url = document.URL;
    url.includes(amp) ? window.location.replace(url.replace(new RegExp(amp, 'g'), "&")) : null;
}, 1);
