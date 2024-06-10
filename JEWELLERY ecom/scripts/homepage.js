
// gsap

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// home containenr

gsap.from(".homeContainer_innerDiv", {
  scrollTrigger: ".homeContainer_twoCard_inner", // start the animation when ".box" enters the viewport (once)
  opacity: 0,
  duration: 1,
  y: 200,
  stagger: 0.3,
  delay:.6,
});

// best seller

gsap.from(".best_seller_cardDiv", {
  scrollTrigger: ".best_sellers_imageDiv",
  opacity: 0,
  duration: 0.4,
  y: 200,
  stagger: 0.3,
  delay:.6,
});

// bridal

gsap.from(".jwel_img_div", {
  scrollTrigger: ".jwel_imgs",
  opacity: 0,
  duration: 1,
  y: 200,
  stagger: {
    from: "center",
    amount: 1,
  },
});

// gift card animation

gsap.from(".giftcard", {
  scrollTrigger: ".gift_ani",
  x: -300,
  duration: 2,
  opacity: 0,
  ease: "bounce",
});

// shop img

gsap.from(".shop_innerDiv", {
  scrollTrigger: ".shop_imageDiv",
  y: 200,
  opacity: 0,
  duration: 1,
  stagger: {
    from: "center",
    amount: 1,
  },
});

// recommendend for you

gsap.from(".home_left", {
  scrollTrigger: ".recommendation_last_inner",
  opacity: 0,
  duration: 1,
  x: 150,
  delay:.6,

});

gsap.from(".home_right_img", {
  scrollTrigger: ".recommendation_last_inner",
  stagger: 0.3,
  opacity: 0,
  duration: 1,
  x: -300,
  delay:.6,

});


