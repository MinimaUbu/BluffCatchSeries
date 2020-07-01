window.addEventListener('DOMContentLoaded', (event) => {
    system_setup();
});

function system_setup(){
    const ilbottone = document.getElementById('start-me-up');
    console.log(ilbottone);
    ilbottone.addEventListener('click',(event) =>{
        start_application();
    })
}

function start_application(){
    const intro = document.getElementById('intro');
    intro.className += "d-none";

    const series_screen = document.getElementById('series-card');
    series_screen.className = series_screen.className.replace("d-none", "");
}