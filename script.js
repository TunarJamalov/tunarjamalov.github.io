const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

  
   const emailInput = document.getElementById('subject').value.trim();
   const nameInput = document.getElementById('name').value.trim();
   const messageInput = document.getElementById('message').value.trim();

   
   if (emailInput === '' || nameInput === '' || messageInput === '') {
       swal({ 
          text: "Please fill out all fields before submitting.",
          icon: "error", 
          button: "OK"
       });
       btn.value = 'Send Email'; 
       return; 
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
       
       document.getElementById('form').reset();
       btn.value = 'Send Email'; 
   })
   .catch((error) => {
       swal({ 
          text: "An error occurred, please try again later.",
          icon: "error", 
          button: "OK",
       });
       btn.value = 'Send Email'; 
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
  

  

  