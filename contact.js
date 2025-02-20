function sendEmail(e) {
    e.preventDefault(); // Empêche le rechargement de la page lors de l'envoi du formulaire

    // Envoi du formulaire à EmailJS avec le service, le template et ta clé API
    emailjs.sendForm('service_h3md7bp', 'template_hu5s7fs', e.target, 'jXg14OMTd1NcqRSSF')
      .then((result) => {
          console.log(result.text);
          alert("Votre message a été envoyé !");
      }, (error) => {
          console.log(error.text);
          alert("Une erreur est survenue. Veuillez réessayer.");
      });
}
