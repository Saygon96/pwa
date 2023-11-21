// Service worker

if ('serviceWorker' in navigator){
    console.log('Puedes usar los service workers del navegador');

    navigator.serviceWorker.register('./sw.js')
                                .then(res => console.log('Service worker cargado correctamente', res))
                                .catch(err => console.log('Service worker no se ha podido registrar', err))
}else{
    console.log('NO puedes usar los service workers del navegador');
}

//scroll suavizado
$(document).ready(function(){

    $("#menu a").click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    });
});