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

