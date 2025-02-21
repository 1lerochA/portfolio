document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    // Fonction pour afficher ou masquer le menu mobile
    const toggleNavbarDisplay = () => {
        if (window.innerWidth <= 1024) {
            // Si l'écran est petit, on affiche l'icône du menu burger
            menuIcon.style.display = 'block';
            navbar.style.display = 'none'; // On cache le menu par défaut
        } else {
            // Si l'écran est assez grand, on affiche la navbar classique
            menuIcon.style.display = 'none';
            navbar.style.display = 'block';
        }
    };

    // Vérifie la taille de la fenêtre au démarrage
    toggleNavbarDisplay();

    // Réajuste l'affichage du menu à chaque redimensionnement
    window.addEventListener('resize', toggleNavbarDisplay);

    // Lorsque l'on clique sur l'icône du menu burger, on affiche ou masque le menu
    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            navbar.classList.toggle('active');
        };
    } else {
        console.error('menu-icon ou navbar non trouvé');
    }

    // Fonction de scroll pour ajouter la classe active à l'élément de navigation
    window.onscroll = () => {
        let top = window.scrollY;
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                let activeLink = document.querySelector(`header nav ul li a[href*="${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };



    // Initialisation d'EmailJS
    emailjs.init('jXg14OMTd1NcqRSSF'); // Remplace par ton propre ID EmailJS

    // Capter la soumission du formulaire
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêcher l'envoi classique du formulaire

            // Récupérer les données du formulaire
            const formData = new FormData(event.target);

            // Préparer les données à envoyer à EmailJS
            const emailData = {
                from_name: formData.get('from_name'),  // Nom de l'expéditeur
                reply_to: formData.get('reply_to'),    // Email de l'expéditeur
                phone: formData.get('phone'),          // Numéro de téléphone (facultatif)
                subject: formData.get('subject'),      // Sujet
                message: formData.get('message')       // Message
            };

            // Afficher "Envoi..." pendant l'envoi
            const btn = event.target.querySelector('input[type="submit"]');
            btn.value = 'Envoi...';

            // Envoyer le formulaire via EmailJS
            emailjs.send('default_service', 'template_hu5s7fs', emailData)
                .then((response) => {
                    btn.value = 'Envoyer le message'; // Réinitialiser le bouton
                    alert('Message envoyé avec succès !'); // Confirmation
                }, (error) => {
                    btn.value = 'Envoyer le message'; // Réinitialiser le bouton
                    alert('Erreur lors de l\'envoi du message : ' + JSON.stringify(error)); // Afficher l'erreur
                });
        });
    } else {
        console.error('Le formulaire de contact est introuvable');
    }
});