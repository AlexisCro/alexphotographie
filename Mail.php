<?php
    // Je récupère et définis mes variables
    $prenom       = $_POST['prenom'];
    $nom          = $_POST['nom'];
    $mail         = $_POST['mail'];
    $msg          = $_POST['msg'];
    $destinataire = 'alexphotographie.ac@gmail.com';
    $sujet        = 'Demande contact photographe mariage';
    $headers      = 'MIME-version: 1.0\n';
    $headers      = 'Content-type: text/html; charset = iso-8859-1\n';

    $body = "<h1>Message via le formulaire du site de photographie</h1>
    <p>Nom  : ".$nom.   "<br/>
    Prénom  : ".$prenom."<br/>
    Mail    : ".$mail.  "<br/>
    Demande : ".$msg.   "</p>";


    if(mail($destinataire, $sujet, $body, $headers) == true){
        echo   "<h1 style=\"font-size:35px; text-align:center; border-width:6px; 
        border-style:double; marfin-left:50%; tranform:translateX(-50%)\";>
        Votre message a bien été envoyé. <br/>
        Vous allez être redirigé vers la page du site.</h1>
        <p style=\"text-align:center; font-size:25px; color:blue;\">Si vous n'êtes pas redirigé automatiquement, <br/>
        cliquez sur le lien suivant: <a href=\"http://alexphotographie:8080/Mariage.html\">je veux être redirigé</a>";
        
        header('Refresh: 3; URL=http://alexphotographie:8080/Mariage.html');
                
            
    }else{
        echo "<h1 style=\"font-size:35px; text-align:center; border-width:6px; 
        border-style:double; border-color:red; color:red; marfin-left:50%; tranform:translateX(-50%)\";>Une erreure s\'est produite veuillez ré-essayer plus tard.<br/>
        Si demande urgente, l\'adresse mail est sur la page d\'accueil du site.</h1>
        <p style=\"text-align:center; font-size:25px; color:blue;\">Si vous n'êtes pas redirigé automatiquement, <br/>
        cliquez sur le lien suivant: <a href=\"http://alexphotographie:8080/Mariage.html\">je veux être redirigé</a>";  
        header('Refresh: 4; URL=http://alexphotographie:8080/Mariage.html');
} 
        
    ?>