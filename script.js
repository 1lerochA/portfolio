// S'assurer que le DOM est bien chargé avant d'ajouter des événements
document.addEventListener("DOMContentLoaded", function() {
    // Vérifier si l'élément existe avant de lui ajouter un événement
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        // Fonction pour afficher et masquer le menu
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };
    } else {
        console.error('menu-icon ou navbar non trouvé');
    }

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
