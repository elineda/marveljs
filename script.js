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
            let img='<img height="300px" src="'+liste[i].images[0].path+"/portrait_xlarge."+liste[i].images[0].extension+'"';
            result+="<li>";
            result+=img;
            result+="<br><div>"+liste[i].title+'</div></li>'
        }
        result+="</ul>";
        $('#result').html(result);
        $('#copy').html(data.copyright);
    });
}

function buildUrl(limite,debut,fin){
    let url="";
    let key="&ts=1&apikey=e82a7ac69be4009f8e720e1da06e38d5&hash=a7032a8c92cac5410f59776629bed48c";
    let fir="https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&orderBy=onsaleDate&limit=";
    let date="&dateRange="+debut+"-01-01%2C"+fin+"-01-01";
    url=fir+limite+date+key;
    return url;

}

$(function () {
    $('#go').click(function () {
        let debut=$('#debut').val();
        let fin=$('#fin').val();
        let limite=$('#nombre').val();
        url=buildUrl(limite,debut,fin);
        console.log(url);
        getListe(url);

    });


});