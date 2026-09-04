<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit();
}

// Read RESEND_API_KEY from server env or fallback
$resendApiKey = getenv('RESEND_API_KEY') ?: 're_YOUR_RESEND_API_KEY_HERE';
$destinationEmail = getenv('DESTINATION_EMAIL') ?: 'cohtag@gmail.com';

$fullName = htmlspecialchars($data['fullName'] ?? 'N/A');
$dob = htmlspecialchars($data['dob'] ?? 'N/A');
$nationality = htmlspecialchars($data['nationality'] ?? 'N/A');
$phone = htmlspecialchars($data['phone'] ?? 'N/A');
$email = htmlspecialchars($data['email'] ?? 'N/A');
$placeOfWork = htmlspecialchars($data['placeOfWork'] ?? 'N/A');
$region = htmlspecialchars($data['region'] ?? 'N/A');
$staffId = htmlspecialchars($data['staffId'] ?? 'N/A');
$rank = htmlspecialchars($data['rank'] ?? 'N/A');

$passportPicture = htmlspecialchars($data['passportPicture'] ?? '#');
$pinUpload = htmlspecialchars($data['pinUpload'] ?? '#');
$registrationCertificate = htmlspecialchars($data['registrationCertificate'] ?? '#');

$emailHtml = "
<h2>New COHTAG Membership Registration</h2>
<p>A new membership registration has been submitted. Details below:</p>
<table style=\"width: 100%; border-collapse: collapse;\">
  <tr><td style=\"padding: 8px; border: 1px solid #ddd;\"><strong>Full Name</strong></td><td style=\"padding: 8px; border: 1px solid #ddd;\">{$fullName}</td></tr>
  <tr><td style=\"padding: 8px; border: 1px solid #ddd;\"><strong>Date of Birth</strong></td><td style=\"padding: 8px; border: 1px solid #ddd;\">{$dob}</td></tr>
  <tr><td style=\"padding: 8px; border: 1px solid #ddd;\"><strong>Nationality</strong></td><td style=\"padding: 8px; border: 1px solid #ddd;\">{$nationality}</td></tr>
  <tr><td style=\"padding: 8px; border: 1px solid #ddd;\"><strong>Phone Number</strong></td><td style=\"padding: 8px; border: 1px solid #ddd;\">{$phone}</td></tr>
  <tr><td style=\"padding: 8px; border: 1px solid #ddd;\"><strong>Email Address</strong></td><td style=\"padding: 8px; border: 1px solid #ddd;\">{$email}</td></tr>
  <tr><td style=\"padding: 8px; border: 1px solid #ddd;\"><strong>Place of Work</strong></td><td style=\"padding: 8px; border: 1px solid #ddd;\">{$placeOfWork}</td></tr>
  <tr><td style=\"padding: 8px; border: 1px solid #ddd;\"><strong>Region</strong></td><td style=\"padding: 8px; border: 1px solid #ddd;\">{$region}</td></tr>
  <tr><td style=\"padding: 8px; border: 1px solid #ddd;\"><strong>Staff ID</strong></td><td style=\"padding: 8px; border: 1px solid #ddd;\">{$staffId}</td></tr>
  <tr><td style=\"padding: 8px; border: 1px solid #ddd;\"><strong>Current Rank</strong></td><td style=\"padding: 8px; border: 1px solid #ddd;\">{$rank}</td></tr>
</table>

<h3>Uploaded Documents</h3>
<ul>
  <li><strong>Passport Picture:</strong> <a href=\"{$passportPicture}\">View Document</a></li>
  <li><strong>PIN Upload:</strong> <a href=\"{$pinUpload}\">View Document</a></li>
  <li><strong>Registration Certificate:</strong> <a href=\"{$registrationCertificate}\">View Document</a></li>
</ul>
";

$payload = [
    'from' => 'COHTAG Portal <onboarding@resend.dev>',
    'to' => [$destinationEmail],
    'subject' => "New Membership Registration: {$fullName}",
    'html' => $emailHtml
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $resendApiKey,
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['success' => true, 'response' => json_decode($response)]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email', 'details' => json_decode($response)]);
}
