const WHATSAPP_NUMBER = "52XXXXXXXXXX";
const message = encodeURIComponent("Hola NUVÉA ✨ Me gustaría agendar una valoración para conocer los servicios de micropigmentación.");
document.querySelectorAll("[data-whatsapp]").forEach(link => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
});
const toggle=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
