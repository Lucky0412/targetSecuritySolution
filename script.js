// WhatsApp Form Submission
document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault(); // stop page reload
  
  let name = this.name.value;
  let email = this.email.value;
  let phone = this.phone.value;
  let message = this.message.value;
  
  let whatsappNumber = "27646727082"; // Target number. 27 = South Africa
  let text = `*New Quote Request - Target Security Solutions*%0A%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Phone:* ${phone}%0A
*Message:* ${message}%0A%0A
Sent from website`;

  let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank'); // opens WhatsApp

  alert("Redirecting to WhatsApp with your details...");
  this.reset(); // clear form
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});