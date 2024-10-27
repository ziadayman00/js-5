document.addEventListener('scroll',function(){
    var nav = document.querySelector(".navbar")
    var scrollValue = window.scrollY
    if (scrollValue > 1000){
        nav.setAttribute('class','navbar navbar-expand-lg navbar-light bg-danger')
    }else{
        nav.setAttribute('class','navbar navbar-expand-lg navbar-light bg-light')
    }
})

document.getElementById("demo").innerHTML = window.location.href
function getData(){
    alert('Hi..')
}

var mouse = setInterval(myTimer,1000);
function myTimer (){
    var time = new Date();
    document.getElementById('timer').innerHTML = time.toLocaleTimeString();
}
