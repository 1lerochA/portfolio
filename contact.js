function sendEmail(event) {
    event.preventDefault();  // Empêche la soumission par défaut et le rechargement de la page

    // Récupérer les valeurs du formulaire
    const form = document.getElementById("contact-form");

    // Récupérer les champs du formulaire
    const from_name = form.from_name.value;
    const email = form.email.value;
    const sujet = form.sujet.value;
    const message = form.message.value;

    // Appel à EmailJS pour envoyer l'email
    emailjs.send("service_h3md7bp", "template_hu5s7fs", {
        from_name: from_name,
        email: email,
        sujet: sujet,
        message: message,
        to_name: "Destinataire" // Utilise une valeur ou une variable pour cela
    })
    .then(function(response) {
        console.log("Message envoyé avec succès", response);
        alert("Message envoyé avec succès !");
    })
    .catch(function(error) {
        console.log("Erreur lors de l'envoi du message", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    });
}
