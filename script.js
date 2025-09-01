function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// Optional: Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
function activateIcon(el) {
  // Remove "active" from all icons
  document.querySelectorAll('.icon').forEach(icon => icon.classList.remove('active'));

  // Add "active" to clicked icon
  el.classList.add('active');

  // Remove the active state after 1 second (optional)
  setTimeout(() => {
    el.classList.remove('active');
  }, 1000);
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseBox = document.getElementById("formResponse");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const res = await fetch("/contact", {
        method: "POST",
        body: formData
      });

      if (res.redirected) {
        // Show custom colorful message instead of redirect
        responseBox.innerHTML = "🎉 <strong>Message Sent!</strong> I'll get back to you soon!";
        responseBox.classList.add("success");
        form.reset();
      } else {
        responseBox.innerHTML = "🎉 <strong>Message Sent!</strong> I'll get back to you soon!";
        responseBox.classList.add("success");
      }
    } catch (error) {
      responseBox.innerHTML = "🎉 <strong>Message Sent!</strong> I'll get back to you soon.";
      responseBox.classList.add("success");
    }
  });
});