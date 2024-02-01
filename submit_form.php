<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Example: Send an email
    $to = "your@email.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // Format the email body
    $email_body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Send the email
    mail($to, $subject, $email_body, $headers);

    // You can redirect to a thank you page or show a success message
    header("Location: thank_you.html");
    exit();
}
?>
