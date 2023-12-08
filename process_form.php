<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email information
    $to = "your@example.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Thank you for contacting us! We will get back to you shortly.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
