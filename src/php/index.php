<?php
include "class/gbi_portfolio.class.php";
?>

<!DOCTYPE html>
<html lang="fr">

<head>

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-MEBQKKN478"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-MEBQKKN478');
    </script>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Philippe Paquet - Créateur & Designer</title>

    <link rel="stylesheet" href="styles/main.css" />

    <link rel="stylesheet" href="https://unpkg.com/tippy.js@6/dist/tippy.css" />
    <link rel="stylesheet" href="https://unpkg.com/tippy.js@6/animations/shift-away-subtle.css" />




    <link rel="icon" type="image/png" href="assets/favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="assets/favicon/favicon.svg" />
    <link rel="shortcut icon" href="assets/favicon/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="MyWebSite" />
    <link rel="manifest" href="assets/favicon/site.webmanifest" />


    <!-- Ce script est utile pour que mes boutons de header fonctionnent-->

    <script>
        // Ce script s'exécute IMMÉDIATEMENT, avant tout defer
        (function() {
            if (!window.location.hash) return;

            // Sauvegarder le hash
            const hash = window.location.hash;

            // Supprimer le hash pour empêcher le scroll automatique
            if (history.replaceState) {
                history.replaceState(null, null, window.location.pathname + window.location.search);
            } else {
                // Fallback pour très vieux navigateurs
                window.location.hash = '';
            }

            // Stocker le hash pour le récupérer plus tard
            sessionStorage.setItem('pendingHash', hash);
        })();
    </script>

    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <script src="https://unpkg.com/tippy.js@6"></script>

    <script src="scripts/main.js" defer></script>
</head>

<body>

    <header class="header" data-component="Header">
        <div class="wrapper">
            <a href="index.php" class="logo_header">
                <div class="logo_image">
                    <img src="assets/icons/icon_logo.svg" alt="">
                </div>
                <!--  
              <p class="logo__p">
                Pp
              </p>
              -->

            </a>

            <div class="menu_header">
                <nav>
                    <ul>

                        <li>
                            <a href="index.php#competences" class="btn_round_small btn_nav_header">
                                <h4>À propos</h4>
                            </a>
                        </li>

                        <li>
                            <a href="index.php#projets" class="btn_round_small btn_nav_header">
                                <h4>Projets</h4>
                            </a>
                        </li>

                        <li>
                            <a href="index.php#contact" class="btn_round_small btn_nav_header">
                                <h4>Contact</h4>
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>

            <button class="header__toggle js-toggle btn_round_small">
                <h4 class="btn_menu_mobile">Menu</h4>
                <h4 class="btn_x_mobile">
                    <svg class="icon">
                        <use href="#icon-icon_x"></use>
                    </svg>
                </h4>
            </button>

        </div>
    </header>

    <div id="smooth-wrapper" data-component="Scroller" data-pin-items="true" data-scroller-title="true">
        <div id="smooth-content">
            <div class="fond_footer">
                <section class="hero_accueil section_notop">
                    <div class="wrapper">
                        <!--<div class="hero_accueil__titre">-->
                        <div class="hero_accueil__prenom">
                            <h1 class="prenom" data-component="TextAnim" data-speed="1.05">Philippe</h1>
                            <div class="points" data-speed="1.05"></div>
                        </div>
                        <h1 class="hero_accueil__nom" data-component="TextAnim" data-speed="1.05">Paquet</h1>
                        <!--</div>-->
                        <!---->

                        <!--<div class="hero_accueil__container">-->
                        <div class="hero_accueil__media_container">
                            <a href="#projets" class="hero_accueil__media border">
                                <video autoplay muted loop>
                                    <source src="assets/videos/video_hero_accueil.mp4" type="video/mp4" />
                                </video>
                            </a>
                            <svg class="icon icon_hero_accueil" data-speed="0.95">
                                <use href="#icon-icon_pattern_cercle"></use>
                            </svg>
                        </div>

                        <div class="hero_accueil__content">
                            <h3 data-speed="1.05">
                                Créateur
                                <em>&</em>
                                designer
                            </h3>

                            <div class="hero_accueil__content_container border_text">
                                <p>
                                    Étudiant en multimédia et
                                    <strong>passionné par la création</strong>
                                    , je cherche constamment de nouvelles opportunités pour enrichir mes connaissances.
                                </p>
                            </div>
                        </div>
                        <!--</div>-->
                    </div>
                </section>

                <section id="competences" class="competences_accueil section">
                    <div class="wrapper">
                        <h2 class="scrolling_title">Mes compétences</h2>

                        <div class="competences__row">
                            <a href="#" class="btn_round" data-tippy-content="<div class='tippycontent'> <div class='tippyelement'><svg class='icon icon_tippy'><use href='#icon-icon_ae'></use></svg> After effects</div> <div class='tippyelement'><svg class='icon icon_tippy'><use href='#icon-icon_reaper'></use></svg> Reaper</div> </div>">
                                <h4>
                                    Montage audio
                                    <em>&</em>
                                    vidéo
                                </h4>
                            </a>
                            <a href="#" class="btn_round" data-tippy-content="<div class='tippyelement'> <svg class='icon icon_tippy'><use href='#icon-icon_blender'></use></svg> Blender </div>">
                                <h4>Modélisation 3D</h4>
                            </a>
                            <a href="#" class="btn_round" data-tippy-content="<div class='tippycontent'> <div class='tippyelement'><svg class='icon icon_tippy'><use href='#icon-icon_ae'></use></svg> After effects</div>  <div class='tippyelement'> <svg class='icon icon_tippy'><use href='#icon-icon_blender'></use></svg>Blender</div> </div>">
                                <h4>
                                    Animation 2D
                                    <em>&</em>
                                    3D
                                </h4>
                            </a>
                        </div>
                        <div class="competences__row">
                            <a href="#" class="btn_round" data-tippy-content="<div class='tippycontent'><div class='tippyelement'><svg class='icon icon_tippy'><use href='#icon-icon_deriative'></use></svg>TouchDesigner</div><div class='tippyelement'><svg class='icon icon_tippy'><use href='#icon-icon_unity'></use></svg>Unity</div> </div>">
                                <h4>Médias interactifs</h4>
                            </a>
                            <a href="#" class="btn_round" data-tippy-content="<div class='tippycontent'> <div class='tippyelement'><svg class='icon icon_tippy'><use href='#icon-icon_ps'></use></svg> Photoshop</div> <div class='tippyelement'><svg class='icon icon_tippy'><use href='#icon-icon_figma'></use></svg> Figma </div> <div class='tippyelement'><svg class='icon icon_tippy'><use href='#icon-icon_ai'></use></svg> Illustrator</div> </div> ">
                                <h4>Design graphique</h4>
                            </a>
                            <a href="#" class="btn_round" data-tippy-content="<div class='tippycontent'> <div class='tippyelement'><svg class='icon icon_tippy'><use href='#icon-icon_html'></use></svg>HTML</div>  <div class='tippyelement'><svg class='icon icon_tippy'><use href='#icon-icon_css'></use></svg>CSS</div> <div class='tippyelement'><svg class='icon icon_tippy'><use href='#icon-icon_js__full'></use></svg>JavaScript</div> <div class='tippyelement'><svg class='icon icon_tippy'><use href='#icon-icon_php'></use></svg>PHP</div></div>">
                                <h4>Développement web</h4>
                            </a>
                        </div>
                        <div class="competences_accueil__text">
                            <h4>Parce que les images valent milles mots :</h4>
                            <a href="#projets" class="btn_fleche">
                                <div class="btn_fleche__container">
                                    <h4>Mes projets</h4>
                                    <svg class="icon">
                                        <use href="#icon-icon_fleche"></use>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <section class="moi_accueil section">
                    <div class="wrapper">
                        <div class="moi__jesuis border" data-speed="0.85">
                            <h2>Je suis</h2>
                            <nav class="moi_accueil__nav">
                                <ul>
                                    <li>
                                        <svg class="icon icon_list">
                                            <use href="#icon-icon_list"></use>
                                        </svg>
                                        <h4>Minutieux</h4>
                                    </li>
                                    <li>
                                        <svg class="icon icon_list">
                                            <use href="#icon-icon_list"></use>
                                        </svg>
                                        <h4>Curieux</h4>
                                    </li>
                                    <li>
                                        <svg class="icon icon_list">
                                            <use href="#icon-icon_list"></use>
                                        </svg>
                                        <h4>Créatif</h4>
                                    </li>
                                    <li>
                                        <svg class="icon icon_list">
                                            <use href="#icon-icon_list"></use>
                                        </svg>
                                        <h4>Autonome</h4>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="moi__photo border">
                            <img class="moi__photo_image" src="./assets/images/photo_apropos_01.webp" alt="Portrait de Philippe Paquet" />
                        </div>
                        <div class="moi__jaime border" data-speed="1.15">
                            <h2>J'aime</h2>
                            <nav class="moi_accueil__nav">
                                <ul>
                                    <li>
                                        <svg class="icon icon_list">
                                            <use href="#icon-icon_list"></use>
                                        </svg>
                                        <h4>Le cinéma</h4>
                                    </li>
                                    <li>
                                        <svg class="icon icon_list">
                                            <use href="#icon-icon_list"></use>
                                        </svg>
                                        <h4>
                                            Rire
                                            <em>&</em>
                                            faire rire
                                        </h4>
                                    </li>
                                    <li>
                                        <svg class="icon icon_list">
                                            <use href="#icon-icon_list"></use>
                                        </svg>
                                        <h4>Les jeux vidéos</h4>
                                    </li>
                                    <li>
                                        <svg class="icon icon_list">
                                            <use href="#icon-icon_list"></use>
                                        </svg>
                                        <h4>La philosophie</h4>
                                    </li>
                                </ul>
                            </nav>
                            <div class="btn_fleche_container">
                                <a href="https://youtu.be/cvDp9ouBMoE" target="_blank" class="btn_fleche">
                                    <div class="btn_fleche__container">
                                        <h4>Présentation</h4>
                                        <svg class="icon">
                                            <use href="#icon-icon_fleche"></use>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="grille_projets_accueil section_nobottom" id="projets">
                    <div class="wrapper">
                        <h2 class="scrolling_title">Mes projets</h2>
                        <div class="grille_projets_container">
                            <div class="projets_container" data-speed="1.15">
                                <div class="projet_container pattern_points">
                                    <a href="amarsissage.html" class="projet">
                                        <div class="projet__media border">
                                            <img src="./assets/images/thumbnail_amarsissage.webp" alt="Image à la une du projet Amarsissage d'urgence" />
                                        </div>
                                        <div class="projet__content border_text">
                                            <div class="titre_container">
                                                <h4>Amarsissage d’urgence</h4>
                                                <svg class="icon">
                                                    <use href="#icon-icon_fleche"></use>
                                                </svg>
                                            </div>
                                            <div class="projet__content_text">
                                                <p>Animation / modélisation 3D</p>
                                                <p>Hiver 2025</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="points" data-speed="1.05"></div>
                                </div>
                                <div class="projet_container">
                                    <a href="robot.html" class="projet">
                                        <div class="projet__media border">
                                            <img src="./assets/images/thumbnail_robot.webp" alt="Image à la une du projet Robot CGI" />
                                        </div>
                                        <div class="projet__content border_text">
                                            <div class="titre_container">
                                                <h4>Robot CGI</h4>
                                                <svg class="icon">
                                                    <use href="#icon-icon_fleche"></use>
                                                </svg>
                                            </div>
                                            <div class="projet__content_text">
                                                <p>Modélisation 3D / VFX</p>
                                                <p>Hiver 2025</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div class="projet_container pattern_croix">
                                    <a href="proxima.html" class="projet">
                                        <div class="projet__media border">
                                            <img src="./assets/images/thumbnail_mobile_proxima.webp" alt="Image à la une du projet Campagne marketing" />
                                        </div>
                                        <div class="projet__content border_text">
                                            <div class="titre_container">
                                                <h4>Campagne marketing</h4>
                                                <svg class="icon">
                                                    <use href="#icon-icon_fleche"></use>
                                                </svg>
                                            </div>
                                            <div class="projet__content_text">
                                                <p>Design / marketing</p>
                                                <p>Été 2024</p>
                                            </div>
                                        </div>
                                    </a>

                                    <svg class="icon" data-speed="1.05">
                                        <use href="#icon-icon_pattern_croix"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="projets_container projets_container_right" data-speed="1.30">
                                <div class="projet_container">
                                    <a href="bsc.html" class="projet">
                                        <div class="projet__media border">
                                            <img src="./assets/images/thumbnail_mobile_bsc.webp" alt="Image à la une du projet Baie-Sainte-Catherine" />
                                        </div>
                                        <div class="projet__content border_text">
                                            <div class="titre_container">
                                                <h4>Baie-Sainte-Catherine</h4>
                                                <svg class="icon">
                                                    <use href="#icon-icon_fleche"></use>
                                                </svg>
                                            </div>
                                            <div class="projet__content_text">
                                                <p>Design / developpement</p>
                                                <p>Hiver 2025</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div class="projet_container pattern_cercle">
                                    <a href="tag-ball.html" class="projet">
                                        <div class="projet__media border">
                                            <img src="./assets/images/thumbnail_mobile_tagball.webp" alt="Image à la une du projet Tag ball" />
                                        </div>
                                        <div class="projet__content border_text">
                                            <div class="titre_container">
                                                <h4>Tag ball</h4>
                                                <svg class="icon">
                                                    <use href="#icon-icon_fleche"></use>
                                                </svg>
                                            </div>
                                            <div class="projet__content_text">
                                                <p>Média interactif</p>
                                                <p>Hiver 2025</p>
                                            </div>
                                        </div>
                                    </a>

                                    <svg class="icon icon_cercle" data-speed="1.05">
                                        <use href="#icon-icon_pattern_cercle"></use>
                                    </svg>
                                </div>

                                <div class="projet_container">
                                    <a href="presque.html" class="projet">
                                        <div class="projet__media border">
                                            <img src="./assets/images/thumbnail_presque.webp" alt="Image à la une du projet Presque arrivé" />
                                        </div>
                                        <div class="projet__content border_text">
                                            <div class="titre_container">
                                                <h4>Presque arrivé...</h4>
                                                <svg class="icon">
                                                    <use href="#icon-icon_fleche"></use>
                                                </svg>
                                            </div>
                                            <div class="projet__content_text">
                                                <p>Animation 3D</p>
                                                <p>Hiver 2025</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" class="contact section_nobottom">
                    <div class="wrapper">
                        <div class="hero_contact" data-speed="1.05">
                            <h2 data-component="TextAnim">On jase ?</h2>
                            <div class="points"></div>
                        </div>

                        <div class="reseaux_contact__contact">
                            <a href="mailto:info@philippepaquet.ca" class="btn_reseau btn_round">
                                <h4>
                                    info
                                    <em>@</em>
                                    philippepaquet.ca
                                </h4>
                            </a>
                            <a href="tel:438-408-9299" class="btn_reseau btn_round">
                                <h4>438 408-9299</h4>
                            </a>
                            <a href="#" class="btn_reseau btn_round">
                                <h4>curriculum vitae</h4>
                            </a>
                        </div>
                        <div class="reseaux_contact__reseaux">
                            <a href="https://www.behance.net/philippe-paquet#" target="_blank" class="btn_reseau btn_round">
                                <h4>Behance</h4>
                            </a>
                            <a href="https://www.linkedin.com/in/p-paquet?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" class="btn_reseau btn_round">
                                <h4>LinkedIn</h4>
                            </a>
                            <a href="https://youtube.com/@pilpaquet?si=e72375X4gp1imnDk" target="_blank" class="btn_reseau btn_round">
                                <h4>YouTube</h4>
                            </a>
                            <a href="https://www.instagram.com/philippepaquet?igsh=bWY3N3NuZ3Bob3Zs&utm_source=qr" target="_blank" class="btn_reseau btn_round">
                                <h4>Instagram</h4>
                            </a>
                        </div>

                        <div class="formulaire section_nobottom">
                            <h2 class="scrolling_title">Contactez-moi !</h2>
                            <div class="formulaire_contact__container">

                                                    <?php
                            if(isset($_GET["action"]) && (!empty($_GET["action"]))) {
                                $action = $_GET["action"];
                            
                                if($action === 'send' ){
                                
                                    // Créer une instance de l'objet tim_form
                                    $reservation = new tim_form();
                                
                                    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                                    
                                        // Assigner les valeurs du $_POST à l'objet
                                        $reservation->assignPostVariables();
                                    
                                        $to = $reservation->tim_form_courriel;
                                        $cc = tim_form::COURRIEL_CC;
                                        $bcc = NULL;
                                    
                                        $subject = "contact -  {$reservation->tim_form_nom} ";
                                    
                                        $reservation->envoyerEmail($to, $cc, $bcc, $subject);
                                        $tim_form_html = $reservation->afficherHTML();
                                    
                                        echo $tim_form_html;
                                    } 
                                }
                            }else{
                            
                                ?>

                                <form action="index.php?action=send" class="form" autocomplete="off" data-component="Form" method="post">
                                    <fieldset class="form__grid">
                                        <!-- Section 1 -->
                                        <div class="input input--1">
                                            <label class="input__label" for="fullname">
                                                <h4>Salut Philippe, je m’appelle</h4>
                                            </label>
                                            <input class="input__element border_text" type="text" name="tim_form_nom" id="fullname" placeholder="Votre nom complet" required />
                                        </div>

                                        <!-- Section 2 -->
                                        <div class="input input--2">
                                            <label class="input__label" for="email">
                                                <h4>Tu peux me répondre à</h4>
                                            </label>
                                            <input class="input__element border_text" type="email" name="tim_form_courriel" id="email" placeholder="VotreCourriel@domain.com" required />
                                        </div>

                                        <!-- Section 3 -->
                                        <div class="input textarea input--3">
                                            <label class="input__label" for="message">
                                                <h4>Je te contacte à propos de</h4>
                                            </label>
                                            <textarea class="input__element border_text" name="tim_form_commentaires" id="message" placeholder="Votre message" required></textarea>
                                            <footer class="form__footer">
                                                <button type="submit" class="btn_fleche form__btn">
                                                    <div class="btn_fleche__container">
                                                        <h4>Envoyer</h4>
                                                        <svg class="icon">
                                                            <use href="#icon-icon_fleche"></use>
                                                        </svg>
                                                    </div>
                                                </button>
                                            </footer>
                                        </div>
                                    </fieldset>
                                </form>
                            <?php 
                            }
                            ?>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section class="footer_spacer">
                <div class="wrapper"></div>
            </section>
        </div>
    </div>


    <footer class="footer_pied">
        <div class="wrapper">


            <div class="text_footer">
                <h3>Ensemble, nous donnerons vie à quelque chose d’exceptionnel !</h3>
                <h4>
                    2025 © Philippe Paquet
                </h4>
            </div>

            <div class="nav_footer">
                <ul>

                    <li>
                        <a href="https://www.behance.net/philippe-paquet#" target="_blank" class="btn_fleche">
                            <div class="btn_fleche__container">
                                <h4>Behance</h4>
                                <svg class="icon">
                                    <use href="#icon-icon_fleche"></use>
                                </svg>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/p-paquet?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" class="btn_fleche">
                            <div class="btn_fleche__container">
                                <h4>LinkedIn</h4>
                                <svg class="icon">
                                    <use href="#icon-icon_fleche"></use>
                                </svg>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://youtube.com/@pilpaquet?si=e72375X4gp1imnDk" target="_blank" class="btn_fleche">
                            <div class="btn_fleche__container">
                                <h4>YouTube</h4>
                                <svg class="icon">
                                    <use href="#icon-icon_fleche"></use>
                                </svg>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/philippepaquet?igsh=bWY3N3NuZ3Bob3Zs&utm_source=qr" target="_blank" class="btn_fleche">
                            <div class="btn_fleche__container">
                                <h4>Instagram</h4>
                                <svg class="icon">
                                    <use href="#icon-icon_fleche"></use>
                                </svg>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>


        </div>
    </footer>

    </div>
    </div>
</body>

</html>