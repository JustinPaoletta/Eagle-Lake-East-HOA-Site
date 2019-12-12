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

//Global Variables

let date = new Date();

let header = document.getElementById('header');
let footer = document.getElementById('footer');
let conheader = document.getElementById('conheader');
let navcolor = document.getElementById('navcolor');
let hamburger = document.getElementById('hamburger');
let backgroundMenu = document.getElementById('backgroundMenu');
let scrollmessage = document.getElementById('scrollmessage');
let eagle = document.getElementById('eagle');

//Christmas Home Page

if (date.getMonth() === 11 && date.getDate() === 25) {
    
    header.style.backgroundColor = '#165B33';
    footer.style.backgroundColor = '#165B33';
    navcolor.style.backgroundColor = '#BB2528';
    hamburger.style.backgroundColor = '#BB2528';
    backgroundMenu.style.backgroundColor = '#165B33';
    
    scrollmessage.innerHTML = "MERRY CHRISTMAS AND HAPPY HOLIDAYS!";

    eagle.src = 'Santa.png';

};

//New Years HomePage


if (date.getMonth() === 0 && date.getDate() === 1) {

    header.style.backgroundColor = 'darkgoldenrod';
    footer.style.backgroundColor = 'darkgoldenrod';
    navcolor.style.backgroundColor = 'silver';
    hamburger.style.backgroundColor = 'silver';
    backgroundMenu.style.backgroundColor = 'darkgoldenrod';
    
    scrollmessage.innerHTML = "HAPPY NEW YEAR!";

    eagle.src = 'newyear.png';

};


// Martin Luther King JR

if (date.getMonth() === 0 && date.getDate() === 20) {

    header.style.backgroundColor = '#FFFFFF';
    footer.style.backgroundColor = 'black';
    conheader.style.color = 'black';
    navcolor.style.backgroundColor = 'silver';
    hamburger.style.backgroundColor = 'silver';
    backgroundMenu.style.backgroundColor = 'black';

    scrollmessage.innerHTML = "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.";

    eagle.src = 'mlk.png';

};

// George Washingtons Birthday

if (date.getMonth() === 1 && date.getDate() === 17) {

    header.style.backgroundColor = '#F7002A';
    footer.style.backgroundColor = '#F7002A';
    conheader.style.color = 'white';
    navcolor.style.backgroundColor = '#00358C';
    hamburger.style.backgroundColor = '#00358C';
    backgroundMenu.style.backgroundColor = '#F7002A';

    scrollmessage.innerHTML = "I hope I shall possess firmness and virtue enough to maintain what I consider the most enviable of all titles, the character of an honest man.";

    eagle.src = 'george.png';

};

// Memorial Day

if (date.getMonth() === 4 && date.getDate() === 25) {

    header.style.backgroundColor = '#F7002A';
    footer.style.backgroundColor = '#F7002A';
    conheader.style.color = 'white';
    navcolor.style.backgroundColor = '#00358C';
    hamburger.style.backgroundColor = '#00358C';
    backgroundMenu.style.backgroundColor = '#F7002A';

    scrollmessage.innerHTML = "'Our nation owes a debt to its fallen heroes that we can never fully repay.'";

    eagle.src = 'memorial.png';

};


// Independence Day

if (date.getMonth() === 6 && date.getDate() === 4) {

    header.style.backgroundColor = '#F7002A';
    footer.style.backgroundColor = '#F7002A';
    conheader.style.color = 'white';
    navcolor.style.backgroundColor = '#00358C';
    hamburger.style.backgroundColor = '#00358C';
    backgroundMenu.style.backgroundColor = '#F7002A';

    scrollmessage.innerHTML = "HAPPY 4TH OF JULY!";

    eagle.src = '4th.png';

};

// Labor Day

if (date.getMonth() === 8 && date.getDate() === 7) {

    conheader.style.color = 'white';

    scrollmessage.innerHTML = "HAPPY LABOR DAY!";

    eagle.src = 'labor.png';

};

// Veterans Day

if (date.getMonth() === 10 && date.getDate() === 11) {

    header.style.backgroundColor = '#F7002A';
    footer.style.backgroundColor = '#F7002A';
    conheader.style.color = 'white';
    navcolor.style.backgroundColor = '#00358C';
    hamburger.style.backgroundColor = '#00358C';
    backgroundMenu.style.backgroundColor = '#F7002A';

    scrollmessage.innerHTML = "To our men and women in uniform, past, present, and future, God bless you and thank you.";

    eagle.src = 'veterans.png';

};

// ThanksGiving

if (date.getMonth() === 10 && date.getDate() === 26) {

    header.style.backgroundColor = '#E37025';
    footer.style.backgroundColor = '#E37025';
    conheader.style.color = 'white';
    navcolor.style.backgroundColor = '#969F39';
    hamburger.style.backgroundColor = '#969F39';
    backgroundMenu.style.backgroundColor = '#E37025';

    scrollmessage.innerHTML = "HAPPY THANKSGIVING!";

    eagle.src = 'turkey.png';

};

