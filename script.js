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
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        // Fonction pour afficher et masquer le menu
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x'); // Si tu veux changer l'icône (comme croix)
            navbar.classList.toggle('active'); // Toggle la classe pour afficher/masquer le menu
        };
    } else {
        console.error('menu-icon ou navbar non trouvé');
    }

    // Fonction de scroll pour ajouter la classe active à l'élément de navigation correspondant
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
                    if (document.querySelector('header nav ul li a[href*="' + id + '"]')) {
                        document.querySelector('header nav ul li a[href*="' + id + '"]').classList.add('active');
                    }
                });
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