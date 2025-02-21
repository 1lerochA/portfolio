document.addEventListener("DOMContentLoaded", function() {
    // Sélecteurs principaux
    const menuIcon = document.querySelector('.menu-icon');  // On cherche ici par la classe
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    // Fonction pour afficher/masquer le menu
    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');  // Pour changer l'icône en croix ou en burger
            navbar.classList.toggle('active');  // Affiche ou masque le menu en ajoutant/enlevant la classe active
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
                // Suppression de la classe 'active' sur tous les liens
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Ajout de la classe 'active' au lien correspondant à la section visible
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