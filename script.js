const animatedSections = document.querySelectorAll(".reveal-section");
const animatedImages = document.querySelectorAll(".image-reveal");

const revealObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;

			entry.target.classList.add("is-visible");
			observer.unobserve(entry.target);
		});
	},
	{ threshold: 0.12 }
);

animatedSections.forEach((section) => revealObserver.observe(section));
animatedImages.forEach((image) => revealObserver.observe(image));
