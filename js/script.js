document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        form.classList.remove('was-validated');
        formAlert.classList.remove('d-none');
        formAlert.textContent = 'Thank you! Your message has been received.';
        form.reset();
      } else {
        form.classList.add('was-validated');
        formAlert.classList.add('d-none');
      }
    });
  }

  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});
