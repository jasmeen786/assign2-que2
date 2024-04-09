
// Extract query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');
const fullName = urlParams.get('name');
const address = urlParams.get('address');
const status = urlParams.get('status');

// Calculate fee based on status
let fee = 0;
if (status === 'student') {
    fee = 10;
} else if (status === 'staff') {
    fee = 50;
}

// Display confirmation details with line breaks
const confirmationDetails = `
ID: ${userId}<br>
Full Name: ${fullName}<br>
Address: ${address}<br>
Status: ${status}<br>
Fee: $${fee}`;

document.getElementById('confirmationDetails').innerHTML = confirmationDetails;

