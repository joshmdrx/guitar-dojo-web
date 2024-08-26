gsap.registerPlugin(ScrollTrigger);

// Define different animations for different screen sizes
gsap.matchMedia().add("(min-width: 769px)", () => {
  // Animation for desktops and tablets
  gsap.utils.toArray(".step").forEach((step, i) => {
    gsap.fromTo(
      step,
      {
        z: -40,
        scale: 0.7,
        opacity: 0,
        yPercent: 50,
      },
      {
        z: 0,
        scale: 1,
        opacity: 1,
        yPercent: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  });
});

gsap.matchMedia().add("(max-width: 768px)", () => {
  gsap.utils.toArray(".step").forEach((step, i) => {
    gsap.fromTo(
      step,
      {
        z: -20,
        scale: 0.8,
        opacity: 0,
        yPercent: 20,
      },
      {
        z: 0,
        scale: 1,
        opacity: 1,
        yPercent: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: step,
          start: "top 90%", // Start the animation earlier
          end: "top 60%", // End the animation later
          scrub: 1.5, // Create a smoother, slightly delayed transition
        },
      }
    );
  });
});
