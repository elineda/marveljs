<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">

    <title>laravel</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" href="slider/css/slider.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header><div class="container">
        <h1>Recherche des comics</h1>
    </div></header>

<div class="container">
    Nombre de comic à afficher (100 maximum)

<input id="slide" type="text" class="span2" value="" data-slider-min="1950" data-slider-max="2019" data-slider-step="1" data-slider-value="[1975,2000]"/>

<button type="button" id="go">allons-y</button>
<nav><ul id="nav" class="nav"></ul></nav></div>
<div id="navid" class="container"></div>

<div id="result" class="container">

</div>


<div id="copy"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<script src="slider/js/bootstrap-slider.js"></script>
<script src="script.js"></script>


</body>
</html>
