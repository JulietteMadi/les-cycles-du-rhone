<?php

$bikeType = array(
    "electricBike" => "Vélo électrique",
    "VTT"  => "VTT",
    "VTC" => "VTC / Vélo de ville",
    "streetBike" => "Vélo de route",
    "childBike" => "Vélo pour enfants",
    "oldBike" => "Vélo ancien (avant 1980)",
    "brompton" => "Brompton",
    "folding" => "Vélo pliant (hors Brompton)",
    "otherBike" => "Autre",
);

$problemSource = array(
    "transmission" => "Transmission",
    "braking" => "Freinage",
    "wheel" => "Roue",
    "direction" => "Direction",
    "saddle" => "Selle",
    "service" => "Révision / remise en état",
    "otherNeed" => "Autre (bruit, problème non-identifié, ..)",
);

$subject = "Echanges avec " . $_POST["name"];

$message  = "Nom: " . $_POST["name"] . "\r\n";
$message .= "Code postal: " . $_POST["postalCode"] . "\r\n";
$message .= "Email: " . $_POST["email"] . "\r\n";
$message .= "Téléphone: " . $_POST["phone"] . "\r\n";
$message .= "Type de vélo: " . $bikeType[$_POST["bikeType"]] . "\r\n";
$message .= "Origine du problème: " . $problemSource[$_POST["need"]] . "\r\n";
$message .= "Message détaillé: " . $_POST["description"] . "\r\n";

$success = mail("juliette.madinier@gmail.com", $subject, $message);

echo "Mail success: $success";

echo "<a href=\"/\">Retour au site</a>";

?>
