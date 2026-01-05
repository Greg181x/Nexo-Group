<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $message = htmlspecialchars($_POST["message"]);

  $to = "business.nexo.official@gmail.com"; // EMAILUL TĂU
  $subject = "Mesaj nou de pe site";
  $body = "Nume: $name\nEmail: $email\n\nMesaj:\n$message";
  $headers = "From: $email";

  mail($to, $subject, $body, $headers);

  header("Location: contact.html?sent=1");
}
?>
