)# Website-for-app
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Praveen Sharma | Cinematographer</title>
  <link rel="stylesheet" href="style.css"/>
  <!-- Inside <head> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

</head>
<body>

  <nav class="navbar">
    <div class="container">
      <div class="logo" style="font-size: larger; color:aliceblue">📷 P_sharma</div>
      <ul class="nav-links" id="navLinks" style="color: white;">
        <li><a href="#about" style="color: aliceblue;">About</a></li>
        <li><a href="#portfolio" style="color: aliceblue;">Portfolio</a></li>
        <li><a href="#contact" style="color: aliceblue;">Contact</a></li>
      </ul>
      <button class="nav-toggle" onclick="toggleMenu()">☰</button>
    </div>
  </nav>

  <header class="hero">
    <h2>Cinematographer|Visual storyteller</h2>
    <p>Capturing Life one  frame at a time </p>
  </header>

<section id="about">
  <h2>About Me</h2>
  <div class="about-container">
    <img src="(![preveen s](https://github.com/user-attachments/assets/e424fc5d-5295-4bae-8553-59b1a9e21165)" alt="Profile Picture" class="profile-pic">
    <img src="(![preveen s](https://github.com/user-attachments/assets/716db9ec-8540-471f-943d-f72965e9e667))" alt="profile picture" class="profile-pic">
    <div class="about-text">
      <h3><span class="icon">👤</span> Hello' I am Praveen Sharma</h3>
      <p><strong>🎥 Passion:</strong> Cinematographer</p>
      <p><strong>📍 Location:</strong> Delhi, India</p>
      <p>I’m a visual storyteller with a deep love for capturing real, raw moments. My approach blends classic cinematography with modern storytelling, helping brands and artists bring their vision to life.</p>
    </div>
  </div>
  <section id="socials">
  <h2 style="color: black;">Connect with Me</h2>
  <div class="social-icons" style="color: black;">
    <a href="https://www.instagram.com/framesbyprvn?igsh=ZmYxMmtwbG14eWVh" target="_blank" class="icon instagram" onclick="activateIcon(this)">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="https://www.snapchat.com/@praveen_s1890" target="_blank" class="icon snapchat" onclick="activateIcon(this)">
      <i class="fab fa-snapchat-ghost"></i>
    </a>
    <a href="https://wa.me/9672931796" target="_blank" class="icon whatsapp" onclick="activateIcon(this)">
      <i class="fab fa-whatsapp"></i>
    </a>
    <a href="https://www.facebook.com/YOUR_USERNAME" target="_blank" class="icon facebook" onclick="activateIcon(this)">
      <i class="fab fa-facebook-f"></i>
    </a>
  </div>
</section>
</section>

<section id="photographer">
  <h2 style="color: white;">Cinematographer Details</h2>
  <div class="photographer-container">
    <div class="photographer-info">
      <h3><i class="fas fa-user"></i> Praveen Sharma</h3>
      <p><strong><i class="fas fa-camera-retro"></i> Specialization:</strong> Documentary films, Short films, Ad shoot</p>
      <p><strong><i class="fas fa-briefcase"></i> Experience:</strong> 5+ Years in Professional Cinematography</p>
      <p><strong><i class="fas fa-award"></i> Education:</strong> Dungar College Bikaner, Rajasthan</p>
      <p><strong><i class="fas fa-phone"></i> Contact:</strong> +91 96729 31796</p>
      <p><strong><i class="fas fa-envelope"></i> Email:</strong> sharma2004praveen@gmail.com</p>
    </div>
  </div>
</section>



  <section id="portfolio">
    <h2>Portfolio</h2>
    <div class="gallery">
      <img src="c:\Users\USER\OneDrive\Pictures\PHOTO\psclick00003.jpg" alt="Work 1" />
      <img src="c:\Users\USER\OneDrive\Pictures\PHOTO\psclick00002.jpg" alt="Work 2" />
      <img src="c:\Users\USER\OneDrive\Pictures\PHOTO\psclick00004.jpg" alt="Work 3" />
    </div>
  </section>

<section id="contact">
  <h2>Contact Me</h2>
  <div class="contact-container">
    
    <!-- Left: Contact Details -->
    <div class="contact-details">
      <div class="detail-item">
        <i class="fas fa-envelope" style="color: black;"></i>
        <span>sharma2004praveen@gmail.com</span>
      </div>
      <div class="detail-item">
        <i class="fas fa-phone" style="color: black;"></i>
        <span>+91 96729 31796</span>
      </div>
      <div class="detail-item">
        <i class="fas fa-map-marker-alt" style="color: black;"></i>
        <span>Delhi, India</span>
      </div>
      <div class="detail-item">
        <i class="fas fa-clock"  style="color: black;"></i>
        <span>Mon - Sat: 10am - 6pm</span>
      </div>
    </div>

    <!-- Right: Contact Form -->
    <form id="contactForm" method="POST" action="/contact" class="contact-form">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>

    <!-- Success message -->
    <div id="formResponse" class="form-response"></div>

  </div>
</section>



  <footer style="color: black; background-color: white; text-align: center; padding: 10px 0;">
    <p>&copy; 2025 Praveen Sharma. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>



