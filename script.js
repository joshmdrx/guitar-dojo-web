gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".step").forEach((step, i) => {
  gsap.fromTo(
    step,
    {
      z: -300, // Start even farther away to enhance the fly-in effect
      scale: 0.5, // Start slightly more scaled down for a dramatic effect
      opacity: 0, // Start with opacity 0 to create a fade-in effect
      yPercent: 50, // Start lower down the screen
    },
    {
      z: 0, // Bring to the original position
      scale: 1, // Scale back to normal size
      opacity: 1, // Fade in to full opacity
      yPercent: 0, // Move to the correct position on the screen
      ease: "linear", // Smooth easing for a more natural transition
      scrollTrigger: {
        trigger: step,
        start: "top 90%", // Start when the top of the step is near the bottom of the viewport
        end: "top 40%", // End when the top of the step is closer to the middle of the viewport
        scrub: true, // Link the animation to the scroll position for a smooth effect
      },
    }
  );
});
