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

let date = new Date();

//Christmas Home Page

if (date.getMonth() === 11 && date.getDate() === 25) {
    document.getElementById('header').style.backgroundColor = '#165B33';
    document.getElementById('footer').style.backgroundColor = '#165B33';
    document.getElementById('navcolor').style.backgroundColor = '#BB2528';
    document.getElementById('hamburger').style.backgroundColor = '#BB2528';
    document.getElementById('backgroundMenu').style.backgroundColor = '#165B33';
    document.getElementById('b1').classList.replace('block', 'holidayblock');
    document.getElementById('b2').classList.replace('block', 'holidayblock');
    document.getElementById('b3').classList.replace('block', 'holidayblock');
    document.getElementById('b4').classList.replace('block', 'holidayblock');
    document.getElementById('b5').classList.replace('block', 'holidayblock');
    document.getElementById('b6').classList.replace('block', 'holidayblock');
    document.getElementById('b7').classList.replace('block', 'holidayblock');
    document.getElementById('b8').classList.replace('block', 'holidayblock');
    document.getElementById('b1').style.backgroundColor = "#BB2528";
    document.getElementById('b2').style.backgroundColor = "#146B3A";
    document.getElementById('b3').style.backgroundColor = "#BB2528";
    document.getElementById('b4').style.backgroundColor = "#146B3A";
    document.getElementById('b5').style.backgroundColor = "#146B3A";
    document.getElementById('b6').style.backgroundColor = "#BB2528";
    document.getElementById('b7').style.backgroundColor = "#146B3A";
    document.getElementById('b8').style.backgroundColor = "#BB2528";

    document.getElementById('scrollmessage').innerHTML = "MERRY CHRISTMAS AND HAPPY HOLIDAYS!";

    document.getElementById('eagle').src = 'Santa.png';


}

//New Years HomePage


if (date.getMonth() === 0 && date.getDate() === 1) {
    document.getElementById('header').style.backgroundColor = 'darkgoldenrod';
    document.getElementById('footer').style.backgroundColor = 'darkgoldenrod';
    document.getElementById('navcolor').style.backgroundColor = 'silver';
    document.getElementById('hamburger').style.backgroundColor = 'silver';
    document.getElementById('backgroundMenu').style.backgroundColor = 'darkgoldenrod';
    document.getElementById('b1').classList.replace('block', 'holidayblock');
    document.getElementById('b2').classList.replace('block', 'holidayblock');
    document.getElementById('b3').classList.replace('block', 'holidayblock');
    document.getElementById('b4').classList.replace('block', 'holidayblock');
    document.getElementById('b5').classList.replace('block', 'holidayblock');
    document.getElementById('b6').classList.replace('block', 'holidayblock');
    document.getElementById('b7').classList.replace('block', 'holidayblock');
    document.getElementById('b8').classList.replace('block', 'holidayblock');
    document.getElementById('b1').style.backgroundColor = "#E5C67F";
    document.getElementById('b2').style.backgroundColor = "#C0C0C0";
    document.getElementById('b3').style.backgroundColor = "#E5C67F";
    document.getElementById('b4').style.backgroundColor = "#C0C0C0";
    document.getElementById('b5').style.backgroundColor = "#C0C0C0";
    document.getElementById('b6').style.backgroundColor = "#E5C67F";
    document.getElementById('b7').style.backgroundColor = "#C0C0C0";
    document.getElementById('b8').style.backgroundColor = "#E5C67F";

    document.getElementById('scrollmessage').innerHTML = "HAPPY NEW YEAR!";

    document.getElementById('eagle').src = 'newyear.png';


}


// // Martin Luther King JR

if (date.getMonth() === 0 && date.getDate() === 20) {
    document.getElementById('header').style.backgroundColor = '#FFFFFF';
    document.getElementById('footer').style.backgroundColor = 'black';
    document.getElementById('conheader').style.color = 'black';
    document.getElementById('navcolor').style.backgroundColor = 'silver';
    document.getElementById('hamburger').style.backgroundColor = 'silver';
    document.getElementById('backgroundMenu').style.backgroundColor = 'black';
    document.getElementById('b1').classList.replace('block', 'holidayblock');
    document.getElementById('b2').classList.replace('block', 'holidayblock');
    document.getElementById('b3').classList.replace('block', 'holidayblock');
    document.getElementById('b4').classList.replace('block', 'holidayblock');
    document.getElementById('b5').classList.replace('block', 'holidayblock');
    document.getElementById('b6').classList.replace('block', 'holidayblock');
    document.getElementById('b7').classList.replace('block', 'holidayblock');
    document.getElementById('b8').classList.replace('block', 'holidayblock');
    document.getElementById('b1').style.backgroundColor = "white";
    document.getElementById('b2').style.backgroundColor = "#C0C0C0";
    document.getElementById('b3').style.backgroundColor = "white";
    document.getElementById('b4').style.backgroundColor = "#C0C0C0";
    document.getElementById('b5').style.backgroundColor = "#C0C0C0";
    document.getElementById('b6').style.backgroundColor = "white";
    document.getElementById('b7').style.backgroundColor = "#C0C0C0";
    document.getElementById('b8').style.backgroundColor = "white";

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
    document.getElementById('b1').classList.replace('block', 'holidayblock');
    document.getElementById('b2').classList.replace('block', 'holidayblock');
    document.getElementById('b3').classList.replace('block', 'holidayblock');
    document.getElementById('b4').classList.replace('block', 'holidayblock');
    document.getElementById('b5').classList.replace('block', 'holidayblock');
    document.getElementById('b6').classList.replace('block', 'holidayblock');
    document.getElementById('b7').classList.replace('block', 'holidayblock');
    document.getElementById('b8').classList.replace('block', 'holidayblock');
    document.getElementById('b1').style.backgroundColor = "white";
    document.getElementById('b2').style.backgroundColor = "#00358C";
    document.getElementById('b3').style.backgroundColor = "white";
    document.getElementById('b4').style.backgroundColor = "#00358C";
    document.getElementById('b5').style.backgroundColor = "#00358C";
    document.getElementById('b6').style.backgroundColor = "white";
    document.getElementById('b7').style.backgroundColor = "#00358C";
    document.getElementById('b8').style.backgroundColor = "white";

    document.getElementById('scrollmessage').innerHTML = "I hope I shall possess firmness and virtue enough to maintain what I consider the most enviable of all titles, the character of an honest man.";

    document.getElementById('eagle').src = 'george.png';


}


// // Memorial Day

if (date.getMonth() === 4 && date.getDate() === 25) {
    document.getElementById('header').style.backgroundColor = '#F7002A';
    document.getElementById('footer').style.backgroundColor = '#F7002A';
    document.getElementById('conheader').style.color = 'white';
    document.getElementById('navcolor').style.backgroundColor = '#00358C';
    document.getElementById('hamburger').style.backgroundColor = '#00358C';
    document.getElementById('backgroundMenu').style.backgroundColor = '#F7002A';
    document.getElementById('b1').classList.replace('block', 'holidayblock');
    document.getElementById('b2').classList.replace('block', 'holidayblock');
    document.getElementById('b3').classList.replace('block', 'holidayblock');
    document.getElementById('b4').classList.replace('block', 'holidayblock');
    document.getElementById('b5').classList.replace('block', 'holidayblock');
    document.getElementById('b6').classList.replace('block', 'holidayblock');
    document.getElementById('b7').classList.replace('block', 'holidayblock');
    document.getElementById('b8').classList.replace('block', 'holidayblock');
    document.getElementById('b1').style.backgroundColor = "white";
    document.getElementById('b2').style.backgroundColor = "#00358C";
    document.getElementById('b3').style.backgroundColor = "white";
    document.getElementById('b4').style.backgroundColor = "#00358C";
    document.getElementById('b5').style.backgroundColor = "#00358C";
    document.getElementById('b6').style.backgroundColor = "white";
    document.getElementById('b7').style.backgroundColor = "#00358C";
    document.getElementById('b8').style.backgroundColor = "white";

    document.getElementById('scrollmessage').innerHTML = "'Our nation owes a debt to its fallen heroes that we can never fully repay.'";

    document.getElementById('eagle').src = 'memorial.png';


}


// // Independence Day

if (date.getMonth() === 6 && date.getDate() === 4) {
    document.getElementById('header').style.backgroundColor = '#F7002A';
    document.getElementById('footer').style.backgroundColor = '#F7002A';
    document.getElementById('conheader').style.color = 'white';
    document.getElementById('navcolor').style.backgroundColor = '#00358C';
    document.getElementById('hamburger').style.backgroundColor = '#00358C';
    document.getElementById('backgroundMenu').style.backgroundColor = '#F7002A';
    document.getElementById('b1').classList.replace('block', 'holidayblock');
    document.getElementById('b2').classList.replace('block', 'holidayblock');
    document.getElementById('b3').classList.replace('block', 'holidayblock');
    document.getElementById('b4').classList.replace('block', 'holidayblock');
    document.getElementById('b5').classList.replace('block', 'holidayblock');
    document.getElementById('b6').classList.replace('block', 'holidayblock');
    document.getElementById('b7').classList.replace('block', 'holidayblock');
    document.getElementById('b8').classList.replace('block', 'holidayblock');
    document.getElementById('b1').style.backgroundColor = "white";
    document.getElementById('b2').style.backgroundColor = "#00358C";
    document.getElementById('b3').style.backgroundColor = "white";
    document.getElementById('b4').style.backgroundColor = "#00358C";
    document.getElementById('b5').style.backgroundColor = "#00358C";
    document.getElementById('b6').style.backgroundColor = "white";
    document.getElementById('b7').style.backgroundColor = "#00358C";
    document.getElementById('b8').style.backgroundColor = "white";

    document.getElementById('scrollmessage').innerHTML = "HAPPY 4TH OF JULY!";

    document.getElementById('eagle').src = '4th.png';


}

// // Labor Day

if (date.getMonth() === 8 && date.getDate() === 7) {

    document.getElementById('conheader').style.color = 'white';

    document.getElementById('scrollmessage').innerHTML = "HAPPY LABOR DAY!";

    document.getElementById('eagle').src = 'labor.png';


}

// // Veterans Day

if (date.getMonth() === 10 && date.getDate() === 11) {
    document.getElementById('header').style.backgroundColor = '#F7002A';
    document.getElementById('footer').style.backgroundColor = '#F7002A';
    document.getElementById('conheader').style.color = 'white';
    document.getElementById('navcolor').style.backgroundColor = '#00358C';
    document.getElementById('hamburger').style.backgroundColor = '#00358C';
    document.getElementById('backgroundMenu').style.backgroundColor = '#F7002A';
    document.getElementById('b1').classList.replace('block', 'holidayblock');
    document.getElementById('b2').classList.replace('block', 'holidayblock');
    document.getElementById('b3').classList.replace('block', 'holidayblock');
    document.getElementById('b4').classList.replace('block', 'holidayblock');
    document.getElementById('b5').classList.replace('block', 'holidayblock');
    document.getElementById('b6').classList.replace('block', 'holidayblock');
    document.getElementById('b7').classList.replace('block', 'holidayblock');
    document.getElementById('b8').classList.replace('block', 'holidayblock');
    document.getElementById('b1').style.backgroundColor = "white";
    document.getElementById('b2').style.backgroundColor = "#00358C";
    document.getElementById('b3').style.backgroundColor = "white";
    document.getElementById('b4').style.backgroundColor = "#00358C";
    document.getElementById('b5').style.backgroundColor = "#00358C";
    document.getElementById('b6').style.backgroundColor = "white";
    document.getElementById('b7').style.backgroundColor = "#00358C";
    document.getElementById('b8').style.backgroundColor = "white";

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
    document.getElementById('b1').classList.replace('block', 'holidayblock');
    document.getElementById('b2').classList.replace('block', 'holidayblock');
    document.getElementById('b3').classList.replace('block', 'holidayblock');
    document.getElementById('b4').classList.replace('block', 'holidayblock');
    document.getElementById('b5').classList.replace('block', 'holidayblock');
    document.getElementById('b6').classList.replace('block', 'holidayblock');
    document.getElementById('b7').classList.replace('block', 'holidayblock');
    document.getElementById('b8').classList.replace('block', 'holidayblock');
    document.getElementById('b1').style.backgroundColor = "#F6B118";
    document.getElementById('b2').style.backgroundColor = "#8B5D3C";
    document.getElementById('b3').style.backgroundColor = "#F6B118";
    document.getElementById('b4').style.backgroundColor = "#8B5D3C";
    document.getElementById('b5').style.backgroundColor = "#8B5D3C";
    document.getElementById('b6').style.backgroundColor = "#F6B118";
    document.getElementById('b7').style.backgroundColor = "#8B5D3C";
    document.getElementById('b8').style.backgroundColor = "#F6B118";

    document.getElementById('scrollmessage').innerHTML = "HAPPY THANKSGIVING!";

    document.getElementById('eagle').src = 'turkey.png';


}

