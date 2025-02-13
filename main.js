
// Function to handle smooth scroll when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default anchor behavior

      // Get the target section id from the href attribute
      const targetId = this.getAttribute('href').substring(1); // Remove the "#" from the href
      scrollToSection(targetId); // Use the scrollToSection function
  });
});
