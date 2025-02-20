// S'assurer que le DOM est bien chargé avant d'ajouter des événements
document.addEventListener("DOMContentLoaded", function() {
    // Menu icon toggle
    let menuIcon = document.querySelector('.menu-icon');
    let navbar = document.querySelector('.navbar');

    // Fonction pour afficher et masquer le menu
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Récupérer le formulaire de contact
    emailjs.init('jXg14OMTd1NcqRSSF'); // Remplacer par ton ID EmailJS

    // Capter la soumission du formulaire
    document.getElementById('contact-form').addEventListener('submit', function(event) {
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
});
