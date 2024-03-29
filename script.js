const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   // Formdaki giriş alanlarını al
   const emailInput = document.getElementById('subject').value.trim();
   const nameInput = document.getElementById('name').value.trim();
   const messageInput = document.getElementById('message').value.trim();

   // Eğer herhangi bir giriş alanı boşsa işlemi iptal et ve hata mesajı göster
   if (emailInput === '' || nameInput === '' || messageInput === '') {
       swal({ 
          text: "Please fill out all fields before submitting.",
          icon: "error", 
          button: "OK"
       });
       btn.value = 'Send Email'; // Buton metnini eski haline getir
       return; // İşlemi durdur
   }

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_py17py8';

   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
       swal({ 
          text: "Your message has been sent successfully!",
          icon: "success", 
          button: "Back",
       });
       // Formu temizle
       document.getElementById('form').reset();
       btn.value = 'Send Email'; // Buton metnini eski haline getir
   })
   .catch((error) => {
       swal({ 
          text: "An error occurred, please try again later.",
          icon: "error", 
          button: "OK",
       });
       btn.value = 'Send Email'; // Buton metnini eski haline getir
   });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

  

  