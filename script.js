let url="https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&orderBy=onsaleDate&limit=20&ts=1&apikey=e82a7ac69be4009f8e720e1da06e38d5&hash=a7032a8c92cac5410f59776629bed48c";

function getListe(url){
    $.getJSON(url, function (data) {
        console.log(data);
        let liste=data.data.results;
        console.log(liste);
        $('#result').html("");
        let result="";
        result +="<ul>";
        for (let i=0; i<liste.length; i++){
            result+="<li>";
            let img="";
            if (typeof liste[i].images[0] !="undefined") {
                 img = '<img height="300px" src="' + liste[i].images[0].path + "/portrait_xlarge." + liste[i].images[0].extension + '"';
            }
            else {
                 img='<img height="300px" width="200px" src="tuturu.png">';
            }
            result+=img;
            result+="<br><div>"+liste[i].title+'</div></li>'
        }
        result+="</ul>";
        $('#nav').html(buildNav(data));
        $('#result').html(result);
        $('#copy').html(data.attributionHTML);
    });
}

function buildUrl(limite,debut,fin,off){
    let url="";
    let key="&ts=1&apikey=e82a7ac69be4009f8e720e1da06e38d5&hash=a7032a8c92cac5410f59776629bed48c";
    let fir="https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&orderBy=onsaleDate&";
    let date="&dateRange="+debut+"-01-01%2C"+fin+"-01-01";
    let offset="&offset="+off;
    url=fir+date+offset+key;
    return url;

}

function buildNav(data){
    let lenght=data.data.total;
    if (lenght>100){
        lenght=100;
    }
    let nav="";
    for (let i=0;i<lenght;i+=10){
        let j=i+9
        let f=j+1;
    nav+="<li class='nav-item'><a href='#' class='nav-link' onclick='offset("+i+")'>"+i+" "+j+"</a></li>";
    }
    console.log(lenght);
    return nav;
}

function offset(off){
click(off);
offF=off+10;
$('#navid').html("<div>Affichage du resultat de "+off+" à "+offF+"</div>");
}

function click(off){
    //let limite=$('#nombre').val();
    let limite=10;
    let slide =$('#slide').slider('getValue').val();
    slide=slide.split(",");
    console.log(slide[0]);
    let debut=slide[0];
    let fin=slide[1];
    $('#deb').html(debut);
    $('#fin').html(fin);
    url=buildUrl(limite,debut,fin,off);
    console.log(url);
    getListe(url);
}

$(function () {
    $('#slide').slider();

    $('#go').click(function () {

    click(0);
        $('#navid').html("<div>Affichage du resultat de 1 à 10</div>");
    });


});