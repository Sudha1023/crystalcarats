gsap.from(".first", {
  scrollTrigger: ".first",
  opacity: 0,
  duration: 1,
  delay:.3,
  x: -350,
});

gsap.from(".second", {
  scrollTrigger: ".second",
  opacity: 0,
  duration: 1,
  delay:.3,
  x: 350,
});