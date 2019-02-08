let url="https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&orderBy=onsaleDate&limit=20&ts=1&apikey=e82a7ac69be4009f8e720e1da06e38d5&hash=a7032a8c92cac5410f59776629bed48c";

function getListe(url){
    $.getJSON(url, function (data) {
        console.log(data);
        let liste=data.data.results;
        console.log(liste);
        let result="";
        result +="<ul>";
        for (let i=0; i<liste.length; i++){
            result+="<li>"+liste[i].title+'</li>';
        }
        result+="</ul>";
        $('#result').html(result);
    });
}

$(function () {
    getListe(url);
});