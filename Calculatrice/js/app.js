$(function(){

    $('.but').click(function(){
        var valeur;
      valeur =  $("#operation").text() + $(this).text();
      $("#operation").text(valeur);

    });
    $('#c').click(function(){
      $('#operation,#result').text(" ");
    });
    $('#ce').click(function(){
      $('#operation').text($('#operation').text().slice(0,-1));
    });
    $('#equal').click(function(){
      $('#result').text(eval($("#operation").text()));
    });


});