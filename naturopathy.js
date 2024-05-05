document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = this.querySelector('input[type="text"]').value;
    let email = this.querySelector('input[type="email"]').value;
    let message = this.querySelector('textarea').value;
    // You can add code here to handle form submission, like sending the data to a server
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Thank you! We will get back to you soon.');
    this.reset();
});
