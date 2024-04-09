
        document.getElementById("registrationForm").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission
            const userId = document.getElementById("userId").value;
            const fullName = document.getElementById("fullName").value;
            const address = document.getElementById("address").value;
            const status = document.getElementById("status").value;

            // Redirect to confirmation page with query parameters
            window.location.href = `confirmation.html?id=${userId}&name=${encodeURIComponent(fullName)}&address=${encodeURIComponent(address)}&status=${status}`;
        });
    