let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a [href*=' + id + ' ]').classList.add(active)
            })
        }
    })
}

document.addEventListener("DOMContentLoaded", function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

// Initialiser EmailJS avec ton ID utilisateur
emailjs.init('jXg14OMTd1NcqRSSF'); // Remplace par ton propre ID utilisateur

// Capter la soumission du formulaire
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi traditionnel du formulaire

    // Récupérer les valeurs du formulaire
    const formData = new FormData(event.target);

    // Préparer les données à envoyer à EmailJS
    const emailData = {
        from_name: formData.get('from_name'),    // Nom de l'expéditeur
        reply_to: formData.get('reply_to'),      // Email de l'expéditeur
        phone: formData.get('phone'),            // Numéro de téléphone
        subject: formData.get('subject'),        // Sujet
        message: formData.get('message')         // Message
    };

    // Afficher le message de "sending" pendant l'envoi
    const btn = event.target.querySelector('input[type="submit"]');
    btn.value = 'Envoi...';

    // Envoi du formulaire avec EmailJS
    emailjs.send('service_h3md7bp', 'template_hu5s7fs', emailData)  // Utilise ton service et template ID
        .then((response) => {
            btn.value = 'Envoyer le message';  // Réinitialiser le texte du bouton
            alert('Message envoyé avec succès !');  // Confirmation de l'envoi
        }, (error) => {
            btn.value = 'Envoyer le message';  // Réinitialiser le texte du bouton
            alert('Erreur lors de l\'envoi du message : ' + JSON.stringify(error));  // Afficher l'erreur
        });
});
});