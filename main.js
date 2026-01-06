
  const links = document.querySelectorAll(".navlinks a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });
const form = document.querySelector(".form");
const success = document.getElementById("success-message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    form.reset();
    success.style.display = "block";
  }
});


  const hamburger = document.getElementById("hamburger");
  const navlinks = document.getElementById("navlinks");

  hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("active");
  });

const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
btn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
