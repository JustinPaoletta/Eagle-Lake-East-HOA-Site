$("#hamburger").click(function () {
    $("#conportrait").toggle();
    $("#conheader").toggle();
});

$(window).resize(function(){
    
    if($( window ).width()>799){
        $("#conportrait").css("display", "none");
        $("#conheader").css("display", "grid");
    }
    
});

//Global Variables

let date = new Date();

let header = document.getElementById('header');
let footer = document.getElementById('footer');
let navcolor = document.getElementById('navcolor');
let hamburger = document.getElementById('hamburger');
let backgroundMenu = document.getElementById('backgroundMenu');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let scrollmessage = document.getElementById('scrollmessage');
let eagle = document.getElementById('eagle');



//Christmas Home Page

if (date.getMonth() === 11 && date.getDate() === 25) {

    header.style.backgroundColor = '#165B33';
    footer.style.backgroundColor = '#165B33';
    navcolor.style.backgroundColor = '#BB2528';
    hamburger.style.backgroundColor = '#BB2528';
    backgroundMenu.style.backgroundColor = '#165B33';
    b1.classList.replace('block', 'holidayblock');
    b2.classList.replace('block', 'holidayblock');
    b3.classList.replace('block', 'holidayblock');
    b4.classList.replace('block', 'holidayblock');
    b5.classList.replace('block', 'holidayblock');
    b6.classList.replace('block', 'holidayblock');
    b7.classList.replace('block', 'holidayblock');
    b8.classList.replace('block', 'holidayblock');
    b1.style.backgroundColor = "#BB2528";
    b2.style.backgroundColor = "#146B3A";
    b3.style.backgroundColor = "#BB2528";
    b4.style.backgroundColor = "#146B3A";
    b5.style.backgroundColor = "#146B3A";
    b6.style.backgroundColor = "#BB2528";
    b7.style.backgroundColor = "#146B3A";
    b8.style.backgroundColor = "#BB2528";

    scrollmessage.innerHTML = "MERRY CHRISTMAS AND HAPPY HOLIDAYS!";

    eagle.src = 'Santa.png';


}

//New Years HomePage


if (date.getMonth() === 0 && date.getDate() === 1) {
    header.style.backgroundColor = 'darkgoldenrod';
    footer.style.backgroundColor = 'darkgoldenrod';
    navcolor.style.backgroundColor = 'silver';
    hamburger.style.backgroundColor = 'silver';
    backgroundMenu.style.backgroundColor = 'darkgoldenrod';
    b1.classList.replace('block', 'holidayblock');
    b2.classList.replace('block', 'holidayblock');
    b3.classList.replace('block', 'holidayblock');
    b4.classList.replace('block', 'holidayblock');
    b5.classList.replace('block', 'holidayblock');
    b6.classList.replace('block', 'holidayblock');
    b7.classList.replace('block', 'holidayblock');
    b8.classList.replace('block', 'holidayblock');
    b1.style.backgroundColor = "#E5C67F";
    b2.style.backgroundColor = "#C0C0C0";
    b3.style.backgroundColor = "#E5C67F";
    b4.style.backgroundColor = "#C0C0C0";
    b5.style.backgroundColor = "#C0C0C0";
    b6.style.backgroundColor = "#E5C67F";
    b7.style.backgroundColor = "#C0C0C0";
    b8.style.backgroundColor = "#E5C67F";

    scrollmessage.innerHTML = "HAPPY NEW YEAR!";

    eagle.src = 'newyear.png';


}


// // Martin Luther King JR

if (date.getMonth() === 0 && date.getDate() === 20) {

    header.style.backgroundColor = '#FFFFFF';
    footer.style.backgroundColor = 'black';
    conheader.style.color = 'black';
    navcolor.style.backgroundColor = 'silver';
    hamburger.style.backgroundColor = 'silver';
    backgroundMenu.style.backgroundColor = 'black';
    b1.classList.replace('block', 'holidayblock');
    b2.classList.replace('block', 'holidayblock');
    b3.classList.replace('block', 'holidayblock');
    b4.classList.replace('block', 'holidayblock');
    b5.classList.replace('block', 'holidayblock');
    b6.classList.replace('block', 'holidayblock');
    b7.classList.replace('block', 'holidayblock');
    b8.classList.replace('block', 'holidayblock');
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "#C0C0C0";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "#C0C0C0";
    b5.style.backgroundColor = "#C0C0C0";
    b6.style.backgroundColor = "white";
    b7.style.backgroundColor = "#C0C0C0";
    b8.style.backgroundColor = "white";

    scrollmessage.innerHTML = "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.";

    eagle.src = 'mlk.png';

}

// George Washingtons Birthday

if (date.getMonth() === 1 && date.getDate() === 17) {
    header.style.backgroundColor = '#F7002A';
    footer.style.backgroundColor = '#F7002A';
    conheader.style.color = 'white';
    navcolor.style.backgroundColor = '#00358C';
    hamburger.style.backgroundColor = '#00358C';
    backgroundMenu.style.backgroundColor = '#F7002A';
    b1.classList.replace('block', 'holidayblock');
    b2.classList.replace('block', 'holidayblock');
    b3.classList.replace('block', 'holidayblock');
    b4.classList.replace('block', 'holidayblock');
    b5.classList.replace('block', 'holidayblock');
    b6.classList.replace('block', 'holidayblock');
    b7.classList.replace('block', 'holidayblock');
    b8.classList.replace('block', 'holidayblock');
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "#00358C";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "#00358C";
    b5.style.backgroundColor = "#00358C";
    b6.style.backgroundColor = "white";
    b7.style.backgroundColor = "#00358C";
    b8.style.backgroundColor = "white";

    scrollmessage.innerHTML = "I hope I shall possess firmness and virtue enough to maintain what I consider the most enviable of all titles, the character of an honest man.";

    eagle.src = 'george.png';


}


// // Memorial Day

if (date.getMonth() === 4 && date.getDate() === 25) {
    header.style.backgroundColor = '#F7002A';
    footer.style.backgroundColor = '#F7002A';
    conheader.style.color = 'white';
    navcolor.style.backgroundColor = '#00358C';
    hamburger.style.backgroundColor = '#00358C';
    backgroundMenu.style.backgroundColor = '#F7002A';
    b1.classList.replace('block', 'holidayblock');
    b2.classList.replace('block', 'holidayblock');
    b3.classList.replace('block', 'holidayblock');
    b4.classList.replace('block', 'holidayblock');
    b5.classList.replace('block', 'holidayblock');
    b6.classList.replace('block', 'holidayblock');
    b7.classList.replace('block', 'holidayblock');
    b8.classList.replace('block', 'holidayblock');
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "#00358C";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "#00358C";
    b5.style.backgroundColor = "#00358C";
    b6.style.backgroundColor = "white";
    b7.style.backgroundColor = "#00358C";
    b8.style.backgroundColor = "white";

    scrollmessage.innerHTML = "'Our nation owes a debt to its fallen heroes that we can never fully repay.'";

    eagle.src = 'memorial.png';


}


// // Independence Day

if (date.getMonth() === 6 && date.getDate() === 4) {

    header.style.backgroundColor = '#F7002A';
    footer.style.backgroundColor = '#F7002A';
    conheader.style.color = 'white';
    navcolor.style.backgroundColor = '#00358C';
    hamburger.style.backgroundColor = '#00358C';
    backgroundMenu.style.backgroundColor = '#F7002A';
    b1.classList.replace('block', 'holidayblock');
    b2.classList.replace('block', 'holidayblock');
    b3.classList.replace('block', 'holidayblock');
    b4.classList.replace('block', 'holidayblock');
    b5.classList.replace('block', 'holidayblock');
    b6.classList.replace('block', 'holidayblock');
    b7.classList.replace('block', 'holidayblock');
    b8.classList.replace('block', 'holidayblock');
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "#00358C";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "#00358C";
    b5.style.backgroundColor = "#00358C";
    b6.style.backgroundColor = "white";
    b7.style.backgroundColor = "#00358C";
    b8.style.backgroundColor = "white";

    scrollmessage.innerHTML = "HAPPY 4TH OF JULY!";

    eagle.src = '4th.png';

}

// // Labor Day

if (date.getMonth() === 8 && date.getDate() === 7) {

    conheader.style.color = 'white';

    scrollmessage.innerHTML = "HAPPY LABOR DAY!";

    eagle.src = 'labor.png';


}

// // Veterans Day

if (date.getMonth() === 10 && date.getDate() === 11) {
    header.style.backgroundColor = '#F7002A';
    footer.style.backgroundColor = '#F7002A';
    conheader.style.color = 'white';
    navcolor.style.backgroundColor = '#00358C';
    hamburger.style.backgroundColor = '#00358C';
    backgroundMenu.style.backgroundColor = '#F7002A';
    b1.classList.replace('block', 'holidayblock');
    b2.classList.replace('block', 'holidayblock');
    b3.classList.replace('block', 'holidayblock');
    b4.classList.replace('block', 'holidayblock');
    b5.classList.replace('block', 'holidayblock');
    b6.classList.replace('block', 'holidayblock');
    b7.classList.replace('block', 'holidayblock');
    b8.classList.replace('block', 'holidayblock');
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "#00358C";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "#00358C";
    b5.style.backgroundColor = "#00358C";
    b6.style.backgroundColor = "white";
    b7.style.backgroundColor = "#00358C";
    b8.style.backgroundColor = "white";

    scrollmessage.innerHTML = "To our men and women in uniform, past, present, and future, God bless you and thank you.";

    eagle.src = 'veterans.png';

}

// ThanksGiving

if (date.getMonth() === 10 && date.getDate() === 26) {
    header.style.backgroundColor = '#E37025';
    footer.style.backgroundColor = '#E37025';
    conheader.style.color = 'white';
    navcolor.style.backgroundColor = '#969F39';
    hamburger.style.backgroundColor = '#969F39';
    backgroundMenu.style.backgroundColor = '#E37025';
    b1.classList.replace('block', 'holidayblock');
    b2.classList.replace('block', 'holidayblock');
    b3.classList.replace('block', 'holidayblock');
    b4.classList.replace('block', 'holidayblock');
    b5.classList.replace('block', 'holidayblock');
    b6.classList.replace('block', 'holidayblock');
    b7.classList.replace('block', 'holidayblock');
    b8.classList.replace('block', 'holidayblock');
    b1.style.backgroundColor = "#F6B118";
    b2.style.backgroundColor = "#8B5D3C";
    b3.style.backgroundColor = "#F6B118";
    b4.style.backgroundColor = "#8B5D3C";
    b5.style.backgroundColor = "#8B5D3C";
    b6.style.backgroundColor = "#F6B118";
    b7.style.backgroundColor = "#8B5D3C";
    b8.style.backgroundColor = "#F6B118";

    scrollmessage.innerHTML = "HAPPY THANKSGIVING!";

    eagle.src = 'turkey.png';


}

