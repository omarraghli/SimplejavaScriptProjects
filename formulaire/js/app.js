$(function(){
    $('.message').fadeOut();
    $('#sub').click(function(){
        if($('#nom').val()==""){
            $('#nom').next('.message').fadeIn().text('Entrez un nom ce champ est obligatoir!');
        }
        else if(!$('#nom').val().match(/^[a-zA-ZÀ-ú\-\s]*$/)  ){
            $('#nom').next('.message').fadeIn().text('entrez un nom correcte!');

        }
        else {
            $('#nom').next('.message').fadeOut();
        }


        if($('#prenom').val()==""){
            $('#prenom').next('.message').fadeIn().text('Entrez un prénom ce champ est obligatoir!');
        }
        else if(!$('#prenom').val().match(/^[a-zA-ZÀ-ú\-\s]*$/)  ){
            $('#prenom').next('.message').fadeIn().text('entrez un prenom correcte!');
        }
        else {
            $('#prenom').next('.message').fadeOut();
        }


        if($('#adresse').val()==""){
            $('#adresse').next('.message').fadeIn().text('Entrez une adresse postale ce champ est obligatoir!');
        }
        else{
            $('#adresse').next('.message').fadeOut();
        }


        if($('#email').val()==""){
            $('#email').next('.message').fadeIn().text('Entrez un email ce champ est obligatoir')
        }
        else if(!$('#email').val().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i)){
            $('#email').next('.message').fadeIn().text('Entrez une adresse email valide');
        }
        else{
            $('#email').next('.message').fadeOut();
        }

        if($('#login').val()==""){
            $('#login').next('.message').fadeIn().text('Entrez un login ce champ est obligatoir');
        }
        else if(!$('#login').val().match(/^[a-z0-9_-]{3,16}$/igm)){
            $('#login').next('.message').fadeIn().text('Entrez un login valid');
        }
        else{
            $('#login').next('.message').fadeOut();
        }
        var goodpass=false;
        if($('#motdepasse').val()==""){
            $('#motdepasse').next('.message').fadeIn().text('Entrez un mot de passe');
        }
        
        else if(!$('#motdepasse').val().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)){
            $('#motdepasse').next('.message').fadeIn().text('votre mot de passe doit avoir au moin un nombre et un majuscule majuscules et if faut qu il soit composé d au moin 8 caractère');
            console.log('gta5')
        }
        else{
            $('#motdepasse').next('.message').fadeOut();
             goodpass=true;
        }
        if($('#confirmermdp').val()==""){
            $('#confirmermdp').next('.message').fadeIn().text('Confirmer votre mot de passe');
        }
        else if($('#motdepasse').val()==$('#confirmermdp').val() && goodpass==true){
            $('#confirmermdp').next('.message').fadeOut();
        }


        if($('#telephon').val()==""){
            $('#telephon').next('.message').fadeIn().text('Entrez votre numéro de téléphon ce champ est obligatoir')
        }
        else if(!$('#telephon').val().match(/(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/g)){
            $('#telephon').next('.message').fadeIn().text('Entrez un numéro marocain valide!')
        }
        else{
            $('#telephon').next('.message').fadeOut();
        }

        if($('#Pays').val()=="default"){
            $('#Pays').next('.message').fadeIn().text('Choisissez un pays');
        }
        else{
            $('#Pays').next('.message').fadeOut();  
        }
        if($("#radio1").is(":checked") || $("#radio2").is(":checked")) {
            $("#radio").next(".message") .fadeOut();
        }
        else if(!$("#radio1").is(":checked") && !$("#radio2").is(":checked")){
            $("#radio").next(".message").fadeIn().text("remplir ce champ");
           
         }
    });
});