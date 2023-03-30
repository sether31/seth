
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');


toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
      body.style.backgroundColor = '#FFFFFF';
      body.style.color = '#000000';
    }
    
    else{
        body.style.backgroundColor = '#262626';
        body.style.color = '#FFFFFF';
    }
});














