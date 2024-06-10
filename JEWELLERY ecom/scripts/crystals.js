
gsap.from(".images_section_images", {
    scrollTrigger: ".images_section_inner", // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    duration: 1,
    y: 200,
    stagger: 0.3,
  });
  