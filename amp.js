    function dynamicallyLoadScript(url) {
        var script = document.createElement("script");
        script.src = url;
        document.head.appendChild(script);
    }

    dynamicallyLoadScript("https://www.googletagmanager.com/gtag/js?id=UA-5733415-1");

    setTimeout(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-5733415-1', {'optimize_id': 'GTM-NS39JSJ'});

        var url = window.location.pathname;
        var fileName = url.substring(url.lastIndexOf('/')+1);
        var amp = "&amp;";
        var url = document.URL;

        if(url.includes(amp)){
            document.body.innerHTML = 'Aguarde...';
            ga('send', 'event', 'Erro', 'Manutencao', fileName);
            setTimeout(() => {
                console.log("Redirect");
                //window.location.replace(url.replace(new RegExp(amp, 'g'), "&"));
            }, 1000);
        }
    }, 1000);
