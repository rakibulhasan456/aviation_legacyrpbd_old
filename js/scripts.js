// Select all elements with the data-animate attribute
const animatedElements = document.querySelectorAll('[data-animate]');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add the animate class when visible
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the element is visible
});

// Observe each target element
animatedElements.forEach(element => observer.observe(element));


// Parallax effect for the scene images
document.querySelectorAll('.scene, .parallax-text').forEach((elem) => {
    const modifier = elem.getAttribute('data-modifier');

    basicScroll.create({
        elem: elem,
        from: 0,
        to: 519,
        direct: true,
        props: {
            '--translateY': {
                from: '0',
                to: `${10 * modifier}px`
            }
        }
    }).start();
});


// Management Section

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('[data-animate]');

  const onScroll = () => {
    const trigger = window.innerHeight * 0.9;
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < trigger) {
        card.classList.add('animate');
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll(); // Trigger on load
});

//button secton
