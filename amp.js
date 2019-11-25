
    document.body.style.opacity = "0";
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-5733415-1', {'optimize_id': 'GTM-NS39JSJ'});

    var url = window.location.pathname;
    var fileName = url.substring(url.lastIndexOf('/')+1);
    var amp = "&amp;";
    var url = document.URL;

    if(url.includes(amp)){
        document.body.innerHTML = '<div><img src="https://img.wine.com.br/fenix/image/loading.svg "><h2>Aguarde...</h2></div><style>body{height:100vh;display:flex;align-items:center;justify-content:center;}</style>';
        
        setTimeout(() => {
            gtag('send', 'event', 'Manuteção', fileName, document.referrer);
            setTimeout(() => {
                window.location.replace(url.replace(new RegExp(amp, 'g'), "&")+"#redir");
            }, 3000);
        }, 3000);

        console.log('send', 'event', 'Manuteção', fileName, document.referrer);
            
        gtag('send', 'event', 'Manuteção', fileName, document.referrer, {
            'transport': 'beacon',
            'hitCallback' : function(){
                console.log("Call");
                window.location.replace(url.replace(new RegExp(amp, 'g'), "&")+"#redirGag");
            }
        });
    }
    document.body.style.opacity = "1";
