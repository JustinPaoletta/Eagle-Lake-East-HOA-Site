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

//Global Variables

let date = new Date();

let header = document.getElementById('header');
let footer = document.getElementById('footer');
let navcolor = document.getElementById('navcolor');
let hamburger = document.getElementById('hamburger');
let backgroundMenu = document.getElementById('backgroundMenu');
let ONE = document.getElementById('ONE');
let TWO = document.getElementById('TWO');
let THREE = document.getElementById('THREE');
let FOUR = document.getElementById('FOUR');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let scrollmessage = document.getElementById('scrollmessage');
let eagle = document.getElementById('eagle');




//Christmas Home Page

if (date.getMonth() === 11 && date.getDate() === 25) {
 
    header.style.backgroundColor = '#165B33';
    footer.style.backgroundColor = '#165B33';
    navcolor.style.backgroundColor = '#BB2528';
    hamburger.style.backgroundColor = '#BB2528';
    backgroundMenu.style.backgroundColor = '#165B33';
    ONE.classList.replace('card1', 'christmascard1');
    TWO.classList.replace('card1', 'christmascard1');
    THREE.classList.replace('card1', 'christmascard1');
    FOUR.classList.replace('card1', 'christmascard1');
    one.classList.replace('cards', 'christmascards');
    two.classList.replace('cards', 'christmascards');
    three.classList.replace('cards', 'christmascards');
    four.classList.replace('cards', 'christmascards');

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
    
    
    ONE.classList.replace('card1', 'newyearcard1');
    TWO.classList.replace('card1', 'newyearcard1');
    THREE.classList.replace('card1', 'newyearcard1');
    FOUR.classList.replace('card1', 'newyearcard1');
    one.classList.replace('cards', 'newyearcards');
    two.classList.replace('cards', 'newyearcards');
    three.classList.replace('cards', 'newyearcards');
    four.classList.replace('cards', 'newyearcards');
    

    scrollmessage.innerHTML = "HAPPY NEW YEAR!";

    eagle.src = 'newyear.png';


}


// Martin Luther King JR

if (date.getMonth() === 0 && date.getDate() === 20) {
    header.style.backgroundColor = '#FFFFFF';
    footer.style.backgroundColor = 'black';
    conheader.style.color =  'black';
    navcolor.style.backgroundColor = 'silver';
    hamburger.style.backgroundColor = 'silver';
    backgroundMenu.style.backgroundColor = 'black';

    ONE.classList.replace('card1', 'mlkcard1');
    TWO.classList.replace('card1', 'mlkcard1');
    THREE.classList.replace('card1', 'mlkcard1');
    FOUR.classList.replace('card1', 'mlkcard1');
    one.classList.replace('cards', 'mlkcards');
    two.classList.replace('cards', 'mlkcards');
    three.classList.replace('cards', 'mlkcards');
    four.classList.replace('cards', 'mlkcards');

    scrollmessage.innerHTML = "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.";

    eagle.src = 'mlk.png';


}

// George Washingtons Birthday

if (date.getMonth() === 1 && date.getDate() === 17) {
    header.style.backgroundColor = '#F7002A';
    footer.style.backgroundColor = '#F7002A';
    conheader.style.color =  'white';
    navcolor.style.backgroundColor = '#00358C';
    hamburger.style.backgroundColor = '#00358C';
    backgroundMenu.style.backgroundColor = '#F7002A';

    ONE.classList.replace('card1', 'uscard1');
    TWO.classList.replace('card1', 'uscard1');
    THREE.classList.replace('card1', 'uscard1');
    FOUR.classList.replace('card1', 'uscard1');
    one.classList.replace('cards', 'uscards');
    two.classList.replace('cards', 'uscards');
    three.classList.replace('cards', 'uscards');
    four.classList.replace('cards', 'uscards');

    scrollmessage.innerHTML = "I hope I shall possess firmness and virtue enough to maintain what I consider the most enviable of all titles, the character of an honest man.";

    eagle.src = 'george.png';


}

// Memorial Day

if (date.getMonth() === 4 && date.getDate() === 25) {

    header.style.backgroundColor = '#F7002A';
    footer.style.backgroundColor = '#F7002A';
    conheader.style.color =  'white';
    navcolor.style.backgroundColor = '#00358C';
    hamburger.style.backgroundColor = '#00358C';
    backgroundMenu.style.backgroundColor = '#F7002A';

    ONE.classList.replace('card1', 'uscard1');
    TWO.classList.replace('card1', 'uscard1');
    THREE.classList.replace('card1', 'uscard1');
    FOUR.classList.replace('card1', 'uscard1');
    one.classList.replace('cards', 'uscards');
    two.classList.replace('cards', 'uscards');
    three.classList.replace('cards', 'uscards');
    four.classList.replace('cards', 'uscards');

    scrollmessage.innerHTML = "'Our nation owes a debt to its fallen heroes that we can never fully repay.'";

    eagle.src = 'memorial.png';


}


// Independence Day

if (date.getMonth() === 6 && date.getDate() === 4) {

    header.style.backgroundColor = '#F7002A';
    footer.style.backgroundColor = '#F7002A';
    conheader.style.color =  'white';
    navcolor.style.backgroundColor = '#00358C';
    hamburger.style.backgroundColor = '#00358C';
    backgroundMenu.style.backgroundColor = '#F7002A';

    ONE.classList.replace('card1', 'uscard1');
    TWO.classList.replace('card1', 'uscard1');
    THREE.classList.replace('card1', 'uscard1');
    FOUR.classList.replace('card1', 'uscard1');
    one.classList.replace('cards', 'uscards');
    two.classList.replace('cards', 'uscards');
    three.classList.replace('cards', 'uscards');
    four.classList.replace('cards', 'uscards');

    scrollmessage.innerHTML = "HAPPY 4TH OF JULY!";

    eagle.src = '4th.png';


}

// Labor Day

if (date.getMonth() === 8 && date.getDate() === 7) {

    conheader.style.color =  'white';

    scrollmessage.innerHTML = "HAPPY LABOR DAY!";

    eagle.src = 'labor.png';


}

// Veterans Day

if (date.getMonth() === 10 && date.getDate() === 11) {

    header.style.backgroundColor = '#F7002A';
    footer.style.backgroundColor = '#F7002A';
    conheader.style.color =  'white';
    navcolor.style.backgroundColor = '#00358C';
    hamburger.style.backgroundColor = '#00358C';
    backgroundMenu.style.backgroundColor = '#F7002A';

    ONE.classList.replace('card1', 'uscard1');
    TWO.classList.replace('card1', 'uscard1');
    THREE.classList.replace('card1', 'uscard1');
    FOUR.classList.replace('card1', 'uscard1');
    one.classList.replace('cards', 'uscards');
    two.classList.replace('cards', 'uscards');
    three.classList.replace('cards', 'uscards');
    four.classList.replace('cards', 'uscards');

    scrollmessage.innerHTML = "To our men and women in uniform, past, present, and future, God bless you and thank you.";

    eagle.src = 'veterans.png';


}

// ThanksGiving

if (date.getMonth() === 10 && date.getDate() === 26) {

    header.style.backgroundColor = '#E37025';
    footer.style.backgroundColor = '#E37025';
    conheader.style.color =  'white';
    navcolor.style.backgroundColor = '#969F39';
    hamburger.style.backgroundColor = '#969F39';
    backgroundMenu.style.backgroundColor = '#E37025';

    ONE.classList.replace('card1', 'thankscard1');
    TWO.classList.replace('card1', 'thankscard1');
    THREE.classList.replace('card1', 'thankscard1');
    FOUR.classList.replace('card1', 'thankscard1');
    one.classList.replace('cards', 'thankscards');
    two.classList.replace('cards', 'thankscards');
    three.classList.replace('cards', 'thankscards');
    four.classList.replace('cards', 'thankscards');

    scrollmessage.innerHTML = "HAPPY THANKSGIVING!";

    eagle.src = 'turkey.png';


}

