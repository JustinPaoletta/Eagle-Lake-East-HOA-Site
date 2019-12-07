$("#hamburger").click(function() {
    $("#conportrait").toggle();
    $("#conheader").toggle();

});

$(window).resize(function(){
    
    if($( window ).width()>799){
        $("#conportrait").css("display", "none");
        $("#conheader").css("display", "grid");
    }
    
});

$("#yr2012").click(function() {
    $("#modal1").toggle();
a =    window.getComputedStyle(modal1).display;
b =    window.getComputedStyle(modal2).display;
c =    window.getComputedStyle(modal3).display;
d =    window.getComputedStyle(modal4).display;
  
if(b == 'block'){
    document.getElementById('modal2').style.display = 'none';
}

if(c == 'block'){
        document.getElementById('modal3').style.display = 'none';
}

if(d == 'block'){
    document.getElementById('modal4').style.display = 'none';
}

});

$("#yr2011").click(function() {
    $("#modal2").toggle();
a =    window.getComputedStyle(modal1).display;
b =    window.getComputedStyle(modal2).display;
c =    window.getComputedStyle(modal3).display;
d =    window.getComputedStyle(modal4).display;
  
if(a == 'block'){
    document.getElementById('modal1').style.display = 'none';
}

if(c == 'block'){
        document.getElementById('modal3').style.display = 'none';
}

if(d == 'block'){
    document.getElementById('modal4').style.display = 'none';
}
});

$("#yr2010").click(function() {
    $("#modal3").toggle();

a =    window.getComputedStyle(modal1).display;
b =    window.getComputedStyle(modal2).display;
c =    window.getComputedStyle(modal3).display;
d =    window.getComputedStyle(modal4).display;
  
if(a == 'block'){
    document.getElementById('modal1').style.display = 'none';
}

if(b == 'block'){
        document.getElementById('modal2').style.display = 'none';
}

if(d == 'block'){
    document.getElementById('modal4').style.display = 'none';
}
});

$("#yr2009").click(function() {
    $("#modal4").toggle();

a =    window.getComputedStyle(modal1).display;
b =    window.getComputedStyle(modal2).display;
c =    window.getComputedStyle(modal3).display;
d =    window.getComputedStyle(modal4).display;
  
if(a == 'block'){
    document.getElementById('modal1').style.display = 'none';
}

if(b == 'block'){
        document.getElementById('modal2').style.display = 'none';
}

if(c == 'block'){
    document.getElementById('modal3').style.display = 'none';
}

});