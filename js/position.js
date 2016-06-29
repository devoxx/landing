
function parseDate(str) {
    var mdy = str.split('/')
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}



function belgique(){
    for( var i = 1; i <= 5; i++ ) {
        document.getElementById("c"+i).style.transform = "rotate(0deg)";
    }

    $('body').css('background-image', 'url('+devoxx_belgique_background+')');

    for (i=0;i<logo_be.length;i++){ logo_be[i].style.display = 'inline'; }
    for (i=0;i<logo_ma.length;i++){ logo_ma[i].style.display = 'none'; }
    for (i=0;i<logo_fr.length;i++){ logo_fr[i].style.display = 'none'; }
    for (i=0;i<logo_uk.length;i++){ logo_uk[i].style.display = 'none'; }
    for (i=0;i<logo_pl.length;i++){ logo_pl[i].style.display = 'none'; }
    for (i=0;i<logo_us.length;i++){ logo_us[i].style.display = 'none'; }

    //Veleur du days & talks & capacité

    if(daydiff(parseDate(today), parseDate(date_belgique)) < 0){
        var str = "0000";
    }else{
        var str = "0000"+daydiff(parseDate(today), parseDate(date_belgique));
    }

    var days = str.substr(str.length-4);
    var talks = "0000"+talks_belgique;
    talks = talks.substr(talks.length-4);
    var capacite = "0000"+capacite_belgique;
    capacite = capacite.substr(capacite.length-4);


    var days_tab = days.split("");
    var talks_tab = talks.split("");
    var capacite_tab = capacite.split("");


    document.getElementById("b12").childNodes[0].nodeValue=days_tab[1];
    document.getElementById("b13").childNodes[0].nodeValue=days_tab[2];
    document.getElementById("b14").childNodes[0].nodeValue=days_tab[3];


    document.getElementById("b22").childNodes[0].nodeValue=talks_tab[1];
    document.getElementById("b23").childNodes[0].nodeValue=talks_tab[2];
    document.getElementById("b24").childNodes[0].nodeValue=talks_tab[3];

    document.getElementById("b31").childNodes[0].nodeValue=capacite_tab[0];
    document.getElementById("b32").childNodes[0].nodeValue=capacite_tab[1];
    document.getElementById("b33").childNodes[0].nodeValue=capacite_tab[2];
    document.getElementById("b34").childNodes[0].nodeValue=capacite_tab[3];
}

function maroc(){
    for( var i = 1; i <=5; i++ ) {
        document.getElementById("c"+i).style.transform = "rotate(-60deg)";
    }


    $('body').css('background-image', 'url('+devoxx_maroc_background+')');

    for (i=0;i<logo_be.length;i++){ logo_be[i].style.display = 'none'; }
    for (i=0;i<logo_ma.length;i++){ logo_ma[i].style.display = 'inline'; }
    for (i=0;i<logo_fr.length;i++){ logo_fr[i].style.display = 'none'; }
    for (i=0;i<logo_uk.length;i++){ logo_uk[i].style.display = 'none'; }
    for (i=0;i<logo_pl.length;i++){ logo_pl[i].style.display = 'none'; }
    for (i=0;i<logo_us.length;i++){ logo_us[i].style.display = 'none'; }

    if(daydiff(parseDate(today), parseDate(date_maroc)) < 0){
        var str = "0000";
    }else{
        var str = "0000"+daydiff(parseDate(today), parseDate(date_maroc));
    }


    var days = str.substr(str.length-4);

    var talks = "0000"+talks_maroc;
    talks = talks.substr(talks.length-4);
    var capacite = "0000"+capacite_maroc;
    capacite = capacite.substr(capacite.length-4);

    var days_tab = days.split("");
    var talks_tab = talks.split("");
    var capacite_tab = capacite.split("");


    document.getElementById("b12").childNodes[0].nodeValue=days_tab[1];
    document.getElementById("b13").childNodes[0].nodeValue=days_tab[2];
    document.getElementById("b14").childNodes[0].nodeValue=days_tab[3];


    document.getElementById("b22").childNodes[0].nodeValue=talks_tab[1];
    document.getElementById("b23").childNodes[0].nodeValue=talks_tab[2];
    document.getElementById("b24").childNodes[0].nodeValue=talks_tab[3];

    document.getElementById("b31").childNodes[0].nodeValue=capacite_tab[0];
    document.getElementById("b32").childNodes[0].nodeValue=capacite_tab[1];
    document.getElementById("b33").childNodes[0].nodeValue=capacite_tab[2];
    document.getElementById("b34").childNodes[0].nodeValue=capacite_tab[3];
}

function france(){

    for( var i = 1; i <= 5; i++ ) {
        document.getElementById("c"+i).style.transform = "rotate(-120deg)";
    }


    $('body').css('background-image', 'url('+devoxx_france_background+')');

    for (i=0;i<logo_be.length;i++){ logo_be[i].style.display = 'none'; }
    for (i=0;i<logo_ma.length;i++){ logo_ma[i].style.display = 'none'; }
    for (i=0;i<logo_fr.length;i++){ logo_fr[i].style.display = 'inline'; }
    for (i=0;i<logo_uk.length;i++){ logo_uk[i].style.display = 'none'; }
    for (i=0;i<logo_pl.length;i++){ logo_pl[i].style.display = 'none'; }
    for (i=0;i<logo_us.length;i++){ logo_us[i].style.display = 'none'; }

    if(daydiff(parseDate(today), parseDate(date_france)) < 0){
        var str = "0000";
    }else{
        var str = "0000"+daydiff(parseDate(today), parseDate(date_france));
    }


    var days = str.substr(str.length-4);
    var talks = "0000"+talks_france;
    talks = talks.substr(talks.length-4);
    var capacite = "0000"+capacite_france;
    capacite = capacite.substr(capacite.length-4);

    var days_tab = days.split("");
    var talks_tab = talks.split("");
    var capacite_tab = capacite.split("");


    document.getElementById("b12").childNodes[0].nodeValue=days_tab[1];
    document.getElementById("b13").childNodes[0].nodeValue=days_tab[2];
    document.getElementById("b14").childNodes[0].nodeValue=days_tab[3];


    document.getElementById("b22").childNodes[0].nodeValue=talks_tab[1];
    document.getElementById("b23").childNodes[0].nodeValue=talks_tab[2];
    document.getElementById("b24").childNodes[0].nodeValue=talks_tab[3];

    document.getElementById("b31").childNodes[0].nodeValue=capacite_tab[0];
    document.getElementById("b32").childNodes[0].nodeValue=capacite_tab[1];
    document.getElementById("b33").childNodes[0].nodeValue=capacite_tab[2];
    document.getElementById("b34").childNodes[0].nodeValue=capacite_tab[3];
}

function uk(){

    for( var i = 1; i <= 5; i++ ) {
        document.getElementById("c"+i).style.transform = "rotate(-180deg)";
    }


    $('body').css('background-image', 'url('+devoxx_uk_background+')');

    for (i=0;i<logo_be.length;i++){ logo_be[i].style.display = 'none'; }
    for (i=0;i<logo_ma.length;i++){ logo_ma[i].style.display = 'none'; }
    for (i=0;i<logo_fr.length;i++){ logo_fr[i].style.display = 'none'; }
    for (i=0;i<logo_uk.length;i++){ logo_uk[i].style.display = 'inline'; }
    for (i=0;i<logo_pl.length;i++){ logo_pl[i].style.display = 'none'; }
    for (i=0;i<logo_us.length;i++){ logo_us[i].style.display = 'none'; }

    if(daydiff(parseDate(today), parseDate(date_uk)) < 0){
        var str = "0000";
    }else{
        var str = "0000"+daydiff(parseDate(today), parseDate(date_uk));
    }


    var days = str.substr(str.length-4);
    var talks = "0000"+talks_uk;
    talks = talks.substr(talks.length-4);
    var capacite = "0000"+capacite_uk;
    capacite = capacite.substr(capacite.length-4);

    var days_tab = days.split("");
    var talks_tab = talks.split("");
    var capacite_tab = capacite.split("");


    document.getElementById("b12").childNodes[0].nodeValue=days_tab[1];
    document.getElementById("b13").childNodes[0].nodeValue=days_tab[2];
    document.getElementById("b14").childNodes[0].nodeValue=days_tab[3];


    document.getElementById("b22").childNodes[0].nodeValue=talks_tab[1];
    document.getElementById("b23").childNodes[0].nodeValue=talks_tab[2];
    document.getElementById("b24").childNodes[0].nodeValue=talks_tab[3];

    document.getElementById("b31").childNodes[0].nodeValue=capacite_tab[0];
    document.getElementById("b32").childNodes[0].nodeValue=capacite_tab[1];
    document.getElementById("b33").childNodes[0].nodeValue=capacite_tab[2];
    document.getElementById("b34").childNodes[0].nodeValue=capacite_tab[3];
}

function poland(){

    for( var i = 1; i <= 5; i++ ) {
        document.getElementById("c"+i).style.transform = "rotate(-240deg)";
    }


    $('body').css('background-image', 'url('+devoxx_poland_background+')');

    for (i=0;i<logo_be.length;i++){ logo_be[i].style.display = 'none'; }
    for (i=0;i<logo_ma.length;i++){ logo_ma[i].style.display = 'none'; }
    for (i=0;i<logo_fr.length;i++){ logo_fr[i].style.display = 'none'; }
    for (i=0;i<logo_uk.length;i++){ logo_uk[i].style.display = 'none'; }
    for (i=0;i<logo_pl.length;i++){ logo_pl[i].style.display = 'inline'; }
    for (i=0;i<logo_us.length;i++){ logo_us[i].style.display = 'none'; }

    if(daydiff(parseDate(today), parseDate(date_poland)) < 0){
        var str = "0000";
    }else{
        var str = "0000"+daydiff(parseDate(today), parseDate(date_poland));
    }


    var days = str.substr(str.length-4);
    var talks = "0000"+talks_poland;
    talks = talks.substr(talks.length-4);
    var capacite = "0000"+capacite_poland;
    capacite = capacite.substr(capacite.length-4);

    var days_tab = days.split("");
    var talks_tab = talks.split("");
    var capacite_tab = capacite.split("");


    document.getElementById("b12").childNodes[0].nodeValue=days_tab[1];
    document.getElementById("b13").childNodes[0].nodeValue=days_tab[2];
    document.getElementById("b14").childNodes[0].nodeValue=days_tab[3];


    document.getElementById("b22").childNodes[0].nodeValue=talks_tab[1];
    document.getElementById("b23").childNodes[0].nodeValue=talks_tab[2];
    document.getElementById("b24").childNodes[0].nodeValue=talks_tab[3];

    document.getElementById("b31").childNodes[0].nodeValue=capacite_tab[0];
    document.getElementById("b32").childNodes[0].nodeValue=capacite_tab[1];
    document.getElementById("b33").childNodes[0].nodeValue=capacite_tab[2];
    document.getElementById("b34").childNodes[0].nodeValue=capacite_tab[3];
}

function usa(){

    for( var i = 1; i <= 5; i++ ) {
        document.getElementById("c"+i).style.transform = "rotate(-300deg)";
    }


    $('body').css('background-image', 'url('+devoxx_usa_background+')');

    for (i=0;i<logo_be.length;i++){ logo_be[i].style.display = 'none'; }
    for (i=0;i<logo_ma.length;i++){ logo_ma[i].style.display = 'none'; }
    for (i=0;i<logo_fr.length;i++){ logo_fr[i].style.display = 'none'; }
    for (i=0;i<logo_uk.length;i++){ logo_uk[i].style.display = 'none'; }
    for (i=0;i<logo_pl.length;i++){ logo_pl[i].style.display = 'none'; }
    for (i=0;i<logo_us.length;i++){ logo_us[i].style.display = 'inline'; }

    if(daydiff(parseDate(today), parseDate(date_usa)) < 0){
        var str = "0000";
    }else{
        var str = "0000"+daydiff(parseDate(today), parseDate(date_usa));
    }


    var days = str.substr(str.length-4);
    var talks = "0000"+talks_usa;
    talks = talks.substr(talks.length-4);
    var capacite = "0000"+capacite_usa;
    capacite = capacite.substr(capacite.length-4);

    var days_tab = days.split("");
    var talks_tab = talks.split("");
    var capacite_tab = capacite.split("");


    document.getElementById("b12").childNodes[0].nodeValue=days_tab[1];
    document.getElementById("b13").childNodes[0].nodeValue=days_tab[2];
    document.getElementById("b14").childNodes[0].nodeValue=days_tab[3];


    document.getElementById("b22").childNodes[0].nodeValue=talks_tab[1];
    document.getElementById("b23").childNodes[0].nodeValue=talks_tab[2];
    document.getElementById("b24").childNodes[0].nodeValue=talks_tab[3];

    document.getElementById("b31").childNodes[0].nodeValue=capacite_tab[0];
    document.getElementById("b32").childNodes[0].nodeValue=capacite_tab[1];
    document.getElementById("b33").childNodes[0].nodeValue=capacite_tab[2];
    document.getElementById("b34").childNodes[0].nodeValue=capacite_tab[3];
}


/////////////////////////////////////////////////////////////////////////////////////



function belgique_1(){

    $('body').css('background-image', 'url('+devoxx_belgique_background+')');

    for (i=0;i<logo_be.length;i++){ logo_be[i].style.display = 'inline'; }
    for (i=0;i<logo_ma.length;i++){ logo_ma[i].style.display = 'none'; }
    for (i=0;i<logo_fr.length;i++){ logo_fr[i].style.display = 'none'; }
    for (i=0;i<logo_uk.length;i++){ logo_uk[i].style.display = 'none'; }
    for (i=0;i<logo_pl.length;i++){ logo_pl[i].style.display = 'none'; }
    for (i=0;i<logo_us.length;i++){ logo_us[i].style.display = 'none'; }

    //Veleur du days & talks & capacité

    if(daydiff(parseDate(today), parseDate(date_belgique)) < 0){
        var str = "0000";
    }else{
        var str = "0000"+daydiff(parseDate(today), parseDate(date_belgique));
    }

    var days = str.substr(str.length-4);
    var talks = "0000"+talks_belgique;
    talks = talks.substr(talks.length-4);
    var capacite = "0000"+capacite_belgique;
    capacite = capacite.substr(capacite.length-4);

    var days_tab = days.split("");
    var talks_tab = talks.split("");
    var capacite_tab = capacite.split("");


    document.getElementById("b12").childNodes[0].nodeValue=days_tab[1];
    document.getElementById("b13").childNodes[0].nodeValue=days_tab[2];
    document.getElementById("b14").childNodes[0].nodeValue=days_tab[3];


    document.getElementById("b22").childNodes[0].nodeValue=talks_tab[1];
    document.getElementById("b23").childNodes[0].nodeValue=talks_tab[2];
    document.getElementById("b24").childNodes[0].nodeValue=talks_tab[3];

    document.getElementById("b31").childNodes[0].nodeValue=capacite_tab[0];
    document.getElementById("b32").childNodes[0].nodeValue=capacite_tab[1];
    document.getElementById("b33").childNodes[0].nodeValue=capacite_tab[2];
    document.getElementById("b34").childNodes[0].nodeValue=capacite_tab[3];
}

function maroc_1(){

    $('body').css('background-image', 'url('+devoxx_maroc_background+')');

    for (i=0;i<logo_be.length;i++){ logo_be[i].style.display = 'none'; }
    for (i=0;i<logo_ma.length;i++){ logo_ma[i].style.display = 'inline'; }
    for (i=0;i<logo_fr.length;i++){ logo_fr[i].style.display = 'none'; }
    for (i=0;i<logo_uk.length;i++){ logo_uk[i].style.display = 'none'; }
    for (i=0;i<logo_pl.length;i++){ logo_pl[i].style.display = 'none'; }
    for (i=0;i<logo_us.length;i++){ logo_us[i].style.display = 'none'; }

    if(daydiff(parseDate(today), parseDate(date_maroc)) < 0){
        var str = "0000";
    }else{
        var str = "0000"+daydiff(parseDate(today), parseDate(date_maroc));
    }


    var days = str.substr(str.length-4);
    var talks = "0000"+talks_maroc;
    talks = talks.substr(talks.length-4);
    var capacite = "0000"+capacite_maroc;
    capacite = capacite.substr(capacite.length-4);

    var days_tab = days.split("");
    var talks_tab = talks.split("");
    var capacite_tab = capacite.split("");


    document.getElementById("b12").childNodes[0].nodeValue=days_tab[1];
    document.getElementById("b13").childNodes[0].nodeValue=days_tab[2];
    document.getElementById("b14").childNodes[0].nodeValue=days_tab[3];


    document.getElementById("b22").childNodes[0].nodeValue=talks_tab[1];
    document.getElementById("b23").childNodes[0].nodeValue=talks_tab[2];
    document.getElementById("b24").childNodes[0].nodeValue=talks_tab[3];

    document.getElementById("b31").childNodes[0].nodeValue=capacite_tab[0];
    document.getElementById("b32").childNodes[0].nodeValue=capacite_tab[1];
    document.getElementById("b33").childNodes[0].nodeValue=capacite_tab[2];
    document.getElementById("b34").childNodes[0].nodeValue=capacite_tab[3];
}

function france_1(){

    $('body').css('background-image', 'url('+devoxx_france_background+')');

    for (i=0;i<logo_be.length;i++){ logo_be[i].style.display = 'none'; }
    for (i=0;i<logo_ma.length;i++){ logo_ma[i].style.display = 'none'; }
    for (i=0;i<logo_fr.length;i++){ logo_fr[i].style.display = 'inline'; }
    for (i=0;i<logo_uk.length;i++){ logo_uk[i].style.display = 'none'; }
    for (i=0;i<logo_pl.length;i++){ logo_pl[i].style.display = 'none'; }
    for (i=0;i<logo_us.length;i++){ logo_us[i].style.display = 'none'; }

    if(daydiff(parseDate(today), parseDate(date_france)) < 0){
        var str = "0000";
    }else{
        var str = "0000"+daydiff(parseDate(today), parseDate(date_france));
    }


    var days = str.substr(str.length-4);
    var talks = "0000"+talks_france;
    talks = talks.substr(talks.length-4);
    var capacite = "0000"+capacite_france;
    capacite = capacite.substr(capacite.length-4);

    var days_tab = days.split("");
    var talks_tab = talks.split("");
    var capacite_tab = capacite.split("");


    document.getElementById("b12").childNodes[0].nodeValue=days_tab[1];
    document.getElementById("b13").childNodes[0].nodeValue=days_tab[2];
    document.getElementById("b14").childNodes[0].nodeValue=days_tab[3];


    document.getElementById("b22").childNodes[0].nodeValue=talks_tab[1];
    document.getElementById("b23").childNodes[0].nodeValue=talks_tab[2];
    document.getElementById("b24").childNodes[0].nodeValue=talks_tab[3];

    document.getElementById("b31").childNodes[0].nodeValue=capacite_tab[0];
    document.getElementById("b32").childNodes[0].nodeValue=capacite_tab[1];
    document.getElementById("b33").childNodes[0].nodeValue=capacite_tab[2];
    document.getElementById("b34").childNodes[0].nodeValue=capacite_tab[3];
}

function uk_1(){

    $('body').css('background-image', 'url('+devoxx_uk_background+')');

    for (i=0;i<logo_be.length;i++){ logo_be[i].style.display = 'none'; }
    for (i=0;i<logo_ma.length;i++){ logo_ma[i].style.display = 'none'; }
    for (i=0;i<logo_fr.length;i++){ logo_fr[i].style.display = 'none'; }
    for (i=0;i<logo_uk.length;i++){ logo_uk[i].style.display = 'inline'; }
    for (i=0;i<logo_pl.length;i++){ logo_pl[i].style.display = 'none'; }
    for (i=0;i<logo_us.length;i++){ logo_us[i].style.display = 'none'; }

    if(daydiff(parseDate(today), parseDate(date_uk)) < 0){
        var str = "0000";
    }else{
        var str = "0000"+daydiff(parseDate(today), parseDate(date_uk));
    }


    var days = str.substr(str.length-4);
    var talks = "0000"+talks_uk;
    talks = talks.substr(talks.length-4);
    var capacite = "0000"+capacite_uk;
    capacite = capacite.substr(capacite.length-4);

    var days_tab = days.split("");
    var talks_tab = talks.split("");
    var capacite_tab = capacite.split("");


    document.getElementById("b12").childNodes[0].nodeValue=days_tab[1];
    document.getElementById("b13").childNodes[0].nodeValue=days_tab[2];
    document.getElementById("b14").childNodes[0].nodeValue=days_tab[3];


    document.getElementById("b22").childNodes[0].nodeValue=talks_tab[1];
    document.getElementById("b23").childNodes[0].nodeValue=talks_tab[2];
    document.getElementById("b24").childNodes[0].nodeValue=talks_tab[3];

    document.getElementById("b31").childNodes[0].nodeValue=capacite_tab[0];
    document.getElementById("b32").childNodes[0].nodeValue=capacite_tab[1];
    document.getElementById("b33").childNodes[0].nodeValue=capacite_tab[2];
    document.getElementById("b34").childNodes[0].nodeValue=capacite_tab[3];
}

function poland_1(){

    $('body').css('background-image', 'url('+devoxx_poland_background+')');

    for (i=0;i<logo_be.length;i++){ logo_be[i].style.display = 'none'; }
    for (i=0;i<logo_ma.length;i++){ logo_ma[i].style.display = 'none'; }
    for (i=0;i<logo_fr.length;i++){ logo_fr[i].style.display = 'none'; }
    for (i=0;i<logo_uk.length;i++){ logo_uk[i].style.display = 'none'; }
    for (i=0;i<logo_pl.length;i++){ logo_pl[i].style.display = 'inline'; }
    for (i=0;i<logo_us.length;i++){ logo_us[i].style.display = 'none'; }

    if(daydiff(parseDate(today), parseDate(date_poland)) < 0){
        var str = "0000";
    }else{
        var str = "0000"+daydiff(parseDate(today), parseDate(date_poland));
    }


    var days = str.substr(str.length-4);
    var talks = "0000"+talks_poland;
    talks = talks.substr(talks.length-4);
    var capacite = "0000"+capacite_poland;
    capacite = capacite.substr(capacite.length-4);

    var days_tab = days.split("");
    var talks_tab = talks.split("");
    var capacite_tab = capacite.split("");


    document.getElementById("b12").childNodes[0].nodeValue=days_tab[1];
    document.getElementById("b13").childNodes[0].nodeValue=days_tab[2];
    document.getElementById("b14").childNodes[0].nodeValue=days_tab[3];


    document.getElementById("b22").childNodes[0].nodeValue=talks_tab[1];
    document.getElementById("b23").childNodes[0].nodeValue=talks_tab[2];
    document.getElementById("b24").childNodes[0].nodeValue=talks_tab[3];

    document.getElementById("b31").childNodes[0].nodeValue=capacite_tab[0];
    document.getElementById("b32").childNodes[0].nodeValue=capacite_tab[1];
    document.getElementById("b33").childNodes[0].nodeValue=capacite_tab[2];
    document.getElementById("b34").childNodes[0].nodeValue=capacite_tab[3];
}


function usa_1(){

    for( var i = 1; i <= 5; i++ ) {
        document.getElementById("c"+i).style.transform = "rotate(-300deg)";
    }


    $('body').css('background-image', 'url('+devoxx_usa_background+')');

    for (i=0;i<logo_be.length;i++){ logo_be[i].style.display = 'none'; }
    for (i=0;i<logo_ma.length;i++){ logo_ma[i].style.display = 'none'; }
    for (i=0;i<logo_fr.length;i++){ logo_fr[i].style.display = 'none'; }
    for (i=0;i<logo_uk.length;i++){ logo_uk[i].style.display = 'none'; }
    for (i=0;i<logo_pl.length;i++){ logo_pl[i].style.display = 'none'; }
    for (i=0;i<logo_us.length;i++){ logo_us[i].style.display = 'inline'; }

    if(daydiff(parseDate(today), parseDate(date_usa)) < 0){
        var str = "0000";
    }else{
        var str = "0000"+daydiff(parseDate(today), parseDate(date_usa));
    }


    var days = str.substr(str.length-4);
    var talks = "0000"+talks_usa;
    talks = talks.substr(talks.length-4);
    var capacite = "0000"+capacite_usa;
    capacite = capacite.substr(capacite.length-4);

    var days_tab = days.split("");
    var talks_tab = talks.split("");
    var capacite_tab = capacite.split("");


    document.getElementById("b12").childNodes[0].nodeValue=days_tab[1];
    document.getElementById("b13").childNodes[0].nodeValue=days_tab[2];
    document.getElementById("b14").childNodes[0].nodeValue=days_tab[3];


    document.getElementById("b22").childNodes[0].nodeValue=talks_tab[1];
    document.getElementById("b23").childNodes[0].nodeValue=talks_tab[2];
    document.getElementById("b24").childNodes[0].nodeValue=talks_tab[3];

    document.getElementById("b31").childNodes[0].nodeValue=capacite_tab[0];
    document.getElementById("b32").childNodes[0].nodeValue=capacite_tab[1];
    document.getElementById("b33").childNodes[0].nodeValue=capacite_tab[2];
    document.getElementById("b34").childNodes[0].nodeValue=capacite_tab[3];
}

//////////////////////////////////////////////Paramettre/////////////////////////////////////////////////////
// Date Month/Day/Year
var date_belgique = myData.be.date;
var talks_belgique = myData.be.talks;
var capacite_belgique = myData.be.capacity;


var date_maroc = myData.ma.date;
var talks_maroc= myData.ma.talks;
var capacite_maroc = myData.ma.capacity;

var date_france = myData.fr.date;
var talks_france= myData.fr.talks;
var capacite_france = myData.fr.capacity;

var date_uk = myData.uk.date;
var talks_uk= myData.uk.talks;
var capacite_uk = myData.uk.capacity;

var date_poland = myData.pl.date;
var talks_poland= myData.pl.talks;
var capacite_poland = myData.pl.capacity;

var date_usa = myData.usa.date;
var talks_usa= myData.usa.talks;
var capacite_usa = myData.usa.capacity;

var devoxx_belgique = ["be","nl","no","se","dk","fi","au"];
var devoxx_maroc    = ["ma"];
var devoxx_france   = ["fr"];
var devoxx_uk       = ["uk"];
var devoxx_poland   = ["pl"];
var devoxx_usa      = ["us","br","ca","mx","ar","bs","bb"];


var devoxx_belgique_background = myData.be.assets.background;
var devoxx_maroc_background    = myData.ma.assets.background;
var devoxx_france_background  = myData.fr.assets.background;
var devoxx_uk_background     = myData.uk.assets.background;
var devoxx_poland_background   = myData.pl.assets.background;
var devoxx_usa_background   = myData.usa.assets.background;



////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ip = myip;

$.getJSON('https://geoip.voxxed.com/index.php/api/'+ip+'/fr', function(data) {
    //data is the JSON string
    if(data.country != null){
        var name = data.country.code;
        var name_lower = name.toLowerCase();

        if(devoxx_belgique.indexOf(name_lower) != -1){
            document.getElementById("c1").style.display = "block";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "none";

            belgique_1();
        }else if(devoxx_maroc.indexOf(name_lower) != -1){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "block";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "none";

            maroc_1();
        }else if(devoxx_france.indexOf(name_lower) != -1){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "block";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "none";

            france_1();
        }else if(devoxx_uk.indexOf(name_lower) != -1){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "block";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "none";

            uk_1();
        }else if(devoxx_poland.indexOf(name_lower) != -1){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "block";
            document.getElementById("c6").style.display = "none";

            poland_1();
        }else if(devoxx_usa.indexOf(name_lower) != -1){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "block";
            usa_1();
        }else{
            var day_belgique = daydiff(parseDate(today), parseDate(date_belgique));
            var day_maroc    = daydiff(parseDate(today), parseDate(date_maroc));
            var day_france   = daydiff(parseDate(today), parseDate(date_france));
            var day_uk = daydiff(parseDate(today), parseDate(date_uk));
            var day_poland = daydiff(parseDate(today), parseDate(date_poland));
            var day_usa = daydiff(parseDate(today), parseDate(date_usa));

            var p = [day_belgique,day_maroc,day_france,day_uk,day_poland,day_usa];

            Array.prototype.min = function() {
              return Math.min.apply(null, this);
            };

            if(day_belgique == p.min()){
            document.getElementById("c1").style.display = "block";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "none";

            belgique_1();
            }else if(day_maroc == p.min()){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "block";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "none";

            maroc_1();
            }else if(day_france == p.min()){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "block";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "none";

            france_1();
            }else if(day_uk == p.min()){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "block";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "none";

            uk_1();
            }else if(day_poland == p.min()){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "block";
            document.getElementById("c6").style.display = "none";

            poland_1();
            }else if(day_usa == p.min()){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "block";

            usa_1();
            }

        }
    }else{
        var day_belgique = daydiff(parseDate(today), parseDate(date_belgique));
        var day_maroc    = daydiff(parseDate(today), parseDate(date_maroc));
        var day_france   = daydiff(parseDate(today), parseDate(date_france));
        var day_uk = daydiff(parseDate(today), parseDate(date_uk));
        var day_poland = daydiff(parseDate(today), parseDate(date_poland));
        var day_usa = daydiff(parseDate(today), parseDate(date_usa));

        var p = [day_belgique,day_maroc,day_france,day_uk,day_poland,day_usa];

        Array.prototype.min = function() {
          return Math.min.apply(null, this);
        };

        if(day_belgique == p.min()){
            document.getElementById("c1").style.display = "block";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "none";

            belgique_1();
            }else if(day_maroc == p.min()){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "block";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "none";

            maroc_1();
            }else if(day_france == p.min()){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "block";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "none";

            france_1();
            }else if(day_uk == p.min()){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "block";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "none";

            uk_1();
            }else if(day_poland == p.min()){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "block";
            document.getElementById("c6").style.display = "none";

            poland_1();
            }else if(day_usa == p.min()){
            document.getElementById("c1").style.display = "none";
            document.getElementById("c2").style.display = "none";
            document.getElementById("c3").style.display = "none";
            document.getElementById("c4").style.display = "none";
            document.getElementById("c5").style.display = "none";
            document.getElementById("c6").style.display = "block";

            usa_1();
            }
    }

});

//

//Paramettre


var logo_be = document.getElementsByName('logo_be[]'); // Poland
var logo_ma = document.getElementsByName('logo_ma[]'); // Morocco
var logo_fr = document.getElementsByName('logo_fr[]'); // France
var logo_uk = document.getElementsByName('logo_uk[]'); // United State
var logo_pl = document.getElementsByName('logo_pl[]'); // Belgium
var logo_us = document.getElementsByName('logo_us[]'); // 4 Kids


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = mm+'/'+dd+'/'+yyyy;

$('.one').click(function(){
    belgique();
});

$('.two').click(function(){
    maroc();
});

$('.three').click(function(){
    france();
});

$('.four').click(function(){
    uk();

});

$('.five').click(function(){
    poland();
});

$('.six').click(function(){
    usa();
});

$(window).load(function(){

    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');

        $.fn.preload = function() {
            this.each(function(){
                $('<img/>')[0].src = this;
            });
        }

        $([devoxx_belgique_background,
            devoxx_maroc_background,
            devoxx_france_background,
            devoxx_uk_background,
            devoxx_poland_background,
            devoxx_usa_background])

        .preload();

    }, 3000);

});
