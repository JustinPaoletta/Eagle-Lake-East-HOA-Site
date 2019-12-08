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



let date = new Date();

//Christmas Home Page

if (date.getMonth() === 11 && date.getDate() === 25) {
    
    document.getElementById('header').style.backgroundColor = '#165B33';
    document.getElementById('footer').style.backgroundColor = '#165B33';
    document.getElementById('navcolor').style.backgroundColor = '#BB2528';
    document.getElementById('hamburger').style.backgroundColor = '#BB2528';
    document.getElementById('backgroundMenu').style.backgroundColor = '#165B33';
    


    document.getElementById('scrollmessage').innerHTML = "MERRY CHRISTMAS AND HAPPY HOLIDAYS!";

    document.getElementById('eagle').src = 'Santa.png';


};

//New Years HomePage


if (date.getMonth() === 0 && date.getDate() === 1) {
    document.getElementById('header').style.backgroundColor = 'darkgoldenrod';
    document.getElementById('footer').style.backgroundColor = 'darkgoldenrod';
    document.getElementById('navcolor').style.backgroundColor = 'silver';
    document.getElementById('hamburger').style.backgroundColor = 'silver';
    document.getElementById('backgroundMenu').style.backgroundColor = 'darkgoldenrod';
    
    
    

    document.getElementById('scrollmessage').innerHTML = "HAPPY NEW YEAR!";

    document.getElementById('eagle').src = 'newyear.png';


}


// Martin Luther King JR

if (date.getMonth() === 0 && date.getDate() === 20) {
    document.getElementById('header').style.backgroundColor = '#FFFFFF';
    document.getElementById('footer').style.backgroundColor = 'black';
    document.getElementById('conheader').style.color = 'black';
    document.getElementById('navcolor').style.backgroundColor = 'silver';
    document.getElementById('hamburger').style.backgroundColor = 'silver';
    document.getElementById('backgroundMenu').style.backgroundColor = 'black';



    document.getElementById('scrollmessage').innerHTML = "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.";

    document.getElementById('eagle').src = 'mlk.png';


}

// George Washingtons Birthday

if (date.getMonth() === 1 && date.getDate() === 17) {
    document.getElementById('header').style.backgroundColor = '#F7002A';
    document.getElementById('footer').style.backgroundColor = '#F7002A';
    document.getElementById('conheader').style.color = 'white';
    document.getElementById('navcolor').style.backgroundColor = '#00358C';
    document.getElementById('hamburger').style.backgroundColor = '#00358C';
    document.getElementById('backgroundMenu').style.backgroundColor = '#F7002A';


    document.getElementById('scrollmessage').innerHTML = "I hope I shall possess firmness and virtue enough to maintain what I consider the most enviable of all titles, the character of an honest man.";

    document.getElementById('eagle').src = 'george.png';


}

// Memorial Day

if (date.getMonth() === 4 && date.getDate() === 25) {
    document.getElementById('header').style.backgroundColor = '#F7002A';
    document.getElementById('footer').style.backgroundColor = '#F7002A';
    document.getElementById('conheader').style.color = 'white';
    document.getElementById('navcolor').style.backgroundColor = '#00358C';
    document.getElementById('hamburger').style.backgroundColor = '#00358C';
    document.getElementById('backgroundMenu').style.backgroundColor = '#F7002A';


    document.getElementById('scrollmessage').innerHTML = "'Our nation owes a debt to its fallen heroes that we can never fully repay.'";

    document.getElementById('eagle').src = 'memorial.png';


}


// Independence Day

if (date.getMonth() === 6 && date.getDate() === 4) {
    document.getElementById('header').style.backgroundColor = '#F7002A';
    document.getElementById('footer').style.backgroundColor = '#F7002A';
    document.getElementById('conheader').style.color = 'white';
    document.getElementById('navcolor').style.backgroundColor = '#00358C';
    document.getElementById('hamburger').style.backgroundColor = '#00358C';
    document.getElementById('backgroundMenu').style.backgroundColor = '#F7002A';


    document.getElementById('scrollmessage').innerHTML = "HAPPY 4TH OF JULY!";

    document.getElementById('eagle').src = '4th.png';


}

// Labor Day

if (date.getMonth() === 8 && date.getDate() === 7) {

    document.getElementById('conheader').style.color = 'white';

    document.getElementById('scrollmessage').innerHTML = "HAPPY LABOR DAY!";

    document.getElementById('eagle').src = 'labor.png';


}

// Veterans Day

if (date.getMonth() === 10 && date.getDate() === 11) {
    document.getElementById('header').style.backgroundColor = '#F7002A';
    document.getElementById('footer').style.backgroundColor = '#F7002A';
    document.getElementById('conheader').style.color = 'white';
    document.getElementById('navcolor').style.backgroundColor = '#00358C';
    document.getElementById('hamburger').style.backgroundColor = '#00358C';
    document.getElementById('backgroundMenu').style.backgroundColor = '#F7002A';


    document.getElementById('scrollmessage').innerHTML = "To our men and women in uniform, past, present, and future, God bless you and thank you.";

    document.getElementById('eagle').src = 'veterans.png';


}

// ThanksGiving

if (date.getMonth() === 10 && date.getDate() === 26) {
    document.getElementById('header').style.backgroundColor = '#E37025';
    document.getElementById('footer').style.backgroundColor = '#E37025';
    document.getElementById('conheader').style.color = 'white';
    document.getElementById('navcolor').style.backgroundColor = '#969F39';
    document.getElementById('hamburger').style.backgroundColor = '#969F39';
    document.getElementById('backgroundMenu').style.backgroundColor = '#E37025';


    document.getElementById('scrollmessage').innerHTML = "HAPPY THANKSGIVING!";

    document.getElementById('eagle').src = 'turkey.png';


}

