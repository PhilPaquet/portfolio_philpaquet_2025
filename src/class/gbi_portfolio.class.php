<?php

date_default_timezone_set('America/Toronto');
/* ******************************************************* */

function var_dump_ret($mixed = null) {
    ob_start();
    var_dump($mixed);
    $content = ob_get_contents();
    ob_end_clean();
    return $content;
}

/* ================================================================================================== */
/* La classe  tim_form */

	class tim_form{

        const COURRIEL_CC = 'info@philippepaquet.ca';
        const COURRIEL_FROM = 'Portfolio de Philippe Paquet <info@philippepaquet.ca>';


        public $tim_form_nom = '';		
        public $tim_form_courriel = '';				
        public $tim_form_commentaires = '';


        // Méthode pour assigner les valeurs POST aux attributs de l'objet
        public function assignPostVariables() {
            foreach ($_POST as $key => $value) {
                if (property_exists($this, $key)) {
                    $this->$key = $value;
                }
            }
        }

    /* ================================================= */
    
    public function afficherHTML($msg = '') {


        $html = "
        $msg
        <h2 class='confirmation__form'>Merci !</h2><br>";
        

        return '<div class="tim_form">'. $html . '</div>';
    }

    /* ================================================= */
    
    public function afficherHTMLCourriel() {

        // Date et actuelle
        $datetime = date('Y-m-d');


        $html = "
        
        <html>
        <head>
        <title>Email en format HTML</title>
       
        <style>
            
            .tim_form span {
                display: inline-block;                
                font-size: 16px;
                margin-bottom: 8px;
                padding: 0;
            }
            .tim_form span.descriptions {
                width: 20%;
                max: width 200px;
            }
            .tim_form span.informations {
                display: inline-block;
            }

        </style>
         </head>
        <body>
            <div class='tim_form'>
                <h3>Salut {$this->tim_form_nom},</h3>
                <p>Merci pour ton message !<br><br>

                
                
                Je te répondrai dès que possible.<br><br>

                <strong> Voici les détails de  votre message.</strong></p>";

        $html .= "<h3>Ton courriel:</h3>";
        $html .= "<p><span class=\"informations\">{$this->tim_form_courriel}</span></p>";
        
        $html .= "<h3>Ton message:</h3>";
        $html .= "<p><span class=\"informations\">{$this->tim_form_commentaires}</span><br>";
        
        $html .= "</div>";


        $html .= " </body>
        </html>";

        return  $html ;
    }

    /* ================================================= */
    // Méthode pour envoyer un courriel avec les données en utilisant la fonction php mail
    public function envoyerEmail($to, $cc = null, $bcc = null, $subject = null) {
    
        // Contenu de l'email
        $message = $this->afficherHTMLCourriel();

        // Définir les en-têtes (headers) pour indiquer que le message est en HTML
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // En-tête supplémentaire (expéditeur)
        $headers .= 'From: Portfolio de Philippe Paquet <info@philippepaquet.ca>' . "\r\n";


        // Ajouter les adresses en CC et BCC
       if ($cc) {
            $headers .= 'Cc: ' . $cc . "\r\n";     // Adresse en CC
        }
        if ($bcc) {
            $headers .= 'Bcc: ' . $bcc . "\r\n";   // Adresse en BCC
        }


        // Envoi du courriel
        if ( mail($to, $subject, $message, $headers)) {
            return true; // 'Le message a été envoyé avec succès.';
        } else {
            return false; // "Le message n'a pas pu être envoyé.";
        }


    }


    }
    /* ------------------------------------------------------------------ */






