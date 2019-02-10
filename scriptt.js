
$(function () {
    $('#slide').slider({});

    $('#go').click(function () {

        let slide =$('#slide').slider('getValue').val();
        console.log(slide);
    });


});