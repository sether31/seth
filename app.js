const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');


toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#FFFFFF';
        body.style.color = '#000000';
        body.style.transition = 'ease-in-out .5s';

        // SERVICES
        services.style.background = '#FFFFFF';
        services.style.color = '#000000';
        tea.style.filter = "invert(0)";
        wifii.style.filter = "invert(0)";
        printerr.style.filter = "invert(0)";
        aircon.style.filter = "invert(0)";
        parking.style.filter = "invert(0)";
        eyee.style.filter = "invert(0)";
        outlet.style.filter = "invert(0)";
        locationn.style.filter = "invert(0)";
        
        // TESTIMONIES
        testimonials.style.color = '#000000';
        angelicatext.style.color = '#000000';
        helentext.style.color = '#000000';
        cristinetext.style.color = '#000000';


        // JOIN US
        contact.style.background = '#FFFFFF';
        contact.style.color = '#000000';
      
    }
    else{
        body.style.background = '#0E0E0E';
        body.style.color = '#FFFFFF';
        body.style.transition = 'ease-in-out .5s';

        // banner.style.filter = 'invert(2)';

        // SERVICES
        services.style.background = '#0E0E0E';
        services.style.color = '#FFFFFF';
        tea.style.filter = "invert(2)";
        wifii.style.filter = "invert(2)";
        printerr.style.filter = "invert(2)";
        aircon.style.filter = "invert(2)";
        parking.style.filter = "invert(2)";
        eyee.style.filter = "invert(2)";
        outlet.style.filter = "invert(2)";
        locationn.style.filter = "invert(2)";


        // TESTIMONIES
        testimonials.style.color = '#FFFFFF';
        angelicatext.style.color = '#FFFFFF';
        helentext.style.color = '#FFFFFF';
        cristinetext.style.color = '#FFFFFF';


        // JOIN US
        contact.style.background = '#0E0E0E';
        contact.style.color = '#FFFFFF';
    }
});
