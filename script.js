function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".home-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function handleSubmit(event) {
  event.preventDefault(); 

  
  document.getElementById("contactForm").reset();
  

  alert("Thank you for your message! We will get back to you shortly.");
}