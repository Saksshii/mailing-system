document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const recipients = document.getElementById('recipients').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const recipientArray = recipients.split(',').map(email => email.trim());

    let emailContent = '';

    recipientArray.forEach(email => {
        if (email) {
            emailContent += `To: ${email}\nSubject: ${subject}\n\n${message}\n\n---\n\n`;
        }
    });

    document.getElementById('output').innerText = emailContent;
});
