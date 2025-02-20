function sendEmail(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Envoi du formulaire avec tous les champs
    emailjs.sendForm('service_h3md7bp', 'template_hu5s7fs', e.target, 'jXg14OMTd1NcqRSSF')
      .then((result) => {
          console.log(result.text); // Affiche le résultat dans la console
          alert("Votre message a été envoyé !");
      }, (error) => {
          console.log(error.text); // Affiche l'erreur dans la console
          alert("Une erreur est survenue. Veuillez réessayer.");
      });
}

// Attache l'événement de soumission du formulaire
document.getElementById('contact-form').addEventListener('submit', sendEmail);
