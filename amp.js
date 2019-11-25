    function dynamicallyLoadScript(url) {
        var script = document.createElement("script");
        script.src = url;
        document.head.appendChild(script);
    }

    dynamicallyLoadScript("https://www.googletagmanager.com/gtag/js?id=UA-5733415-1");

    var url = window.location.pathname;
    var fileName = url.substring(url.lastIndexOf('/')+1);
    var amp = "&amp;";
    var url = document.URL;

    setTimeout(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-5733415-1', {'optimize_id': 'GTM-NS39JSJ'});

        if(url.includes(amp)){
            document.body.innerHTML = '<div><img src="https://img.wine.com.br/fenix/image/loading.svg "><h2>Aguarde...</h2></div><style>body{height:100vh;display:flex;align-items:center;justify-content:center;}</style>';
            gtag('send', 'event', 'Erro', 'Manutencao', fileName);
            setTimeout(() => {
                console.log("Redirect");
                //window.location.replace(url.replace(new RegExp(amp, 'g'), "&"));
            }, 1000);
        }else{
            console.log("NOT Redirect");
        }
    }, 1000);
