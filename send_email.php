<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $sujet = htmlspecialchars($_POST['sujet']);
    $message = htmlspecialchars($_POST['message']);

    // Destinataire de l'email
    $to = "alexislerocheleuil@gmail.com"; // Remplacez par votre adresse email

    // Sujet de l'email
    $subject = "Nouveau message de contact : $sujet";

    // Contenu de l'email
    $email_content = "Nom: $nom\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Téléphone: $telephone\n\n";
    $email_content .= "Message:\n$message\n";

    // En-têtes de l'email
    $headers = "From: $nom <$email>";

    // Envoi de l'email
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirige vers une page de confirmation
        header("Location: remerciement.html");
        exit;
    } else {
        echo "Une erreur est survenue lors de l'envoi de l'email.";
    }
} else {
    echo "Formulaire non soumis correctement.";
}
?>