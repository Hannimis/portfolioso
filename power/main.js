window.onload = function(){
}
function listen(){
    var elems = document.getElementsByClassName('content')
    var navs = document.getElementById('emne-nav');
    navs = navs.getElementsByTagName('LI');
    
    
    for(var i = 0; i < elems.length; i++){
        elems[i].addEventListener('click', function(e){
            e.target.classList.toggle('is-displayed');
            console.log(e);
        });
    }
    
    
    for(var j = 0; j < navs.length; j++){
        navs[j].addEventListener('click', function(e){
           var temp = e.target.getAttribute('VALUE');
            clearMe(temp);
        });
    }
    
}
function clearMe(iden){
    var elems = document.getElementsByClassName('clearMe');
    for(var i = 0; i < elems.length; i++){
        if(elems[i].getAttribute('ID')==iden){
            elems[i].classList.add('is-displayed');
        }else{
            elems[i].classList.remove('is-displayed');
        }
    }
}