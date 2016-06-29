// Load the conf file
function function_get_data_from_json(){
    var result = null;
    $.ajax({
        async: false,
        url: "./conf.json",
        dataType: "json",
        success: function(data){
            result = data;
        }
      }
    );
    return result;
}

// Get Info related to each conf
var myData = function_get_data_from_json();
document.getElementById("logo_be").src = myData.be.assets.logo;
document.getElementById("logo_ma").src = myData.ma.assets.logo;
document.getElementById("logo_fr").src = myData.fr.assets.logo;
document.getElementById("logo_uk").src = myData.uk.assets.logo;
document.getElementById("logo_pl").src = myData.pl.assets.logo;
document.getElementById("logo_us").src = myData.usa.assets.logo;

$( ".img_be" ).attr( "src", myData.be.assets.icon);
$( ".img_ma" ).attr( "src", myData.ma.assets.icon);
$( ".img_fr" ).attr( "src", myData.fr.assets.icon);
$( ".img_uk" ).attr( "src", myData.uk.assets.icon);
$( ".img_pl" ).attr( "src", myData.pl.assets.icon);
$( ".img_us" ).attr( "src", myData.usa.assets.icon);

document.getElementById("desc_be").innerHTML = myData.be.description;
document.getElementById("desc_ma").innerHTML = myData.ma.description;
document.getElementById("desc_fr").innerHTML = myData.fr.description;
document.getElementById("desc_uk").innerHTML = myData.uk.description;
document.getElementById("desc_pl").innerHTML = myData.pl.description;
document.getElementById("desc_us").innerHTML = myData.usa.description;

document.getElementById("place_be").innerHTML = myData.be.place;
document.getElementById("place_ma").innerHTML = myData.ma.place;
document.getElementById("place_fr").innerHTML = myData.fr.place;
document.getElementById("place_uk").innerHTML = myData.uk.place;
document.getElementById("place_pl").innerHTML = myData.pl.place;
document.getElementById("place_us").innerHTML = myData.usa.place;

document.getElementById("link_be").href = myData.be.link;
document.getElementById("link_ma").href = myData.ma.link;
document.getElementById("link_fr").href = myData.fr.link;
document.getElementById("link_uk").href = myData.uk.link;
document.getElementById("link_pl").href = myData.pl.link;
document.getElementById("link_us").href = myData.usa.link;
