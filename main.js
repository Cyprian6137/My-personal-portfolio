//button secondary on click view to//
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Section with id '${sectionId}' not found.`);
    }
  }
  
  // Function to handle the smooth scroll when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
        
        // Get the target section id from the href attribute
        const targetId = this.getAttribute('href').substring(1); // Remove the "#" from the href
        const targetSection = document.getElementById(targetId);
        
        // Scroll to the target section
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
