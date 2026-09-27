const animatedSections = document.querySelectorAll(".reveal-section");
const animatedImages = document.querySelectorAll(".image-reveal");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

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

menuToggle?.addEventListener("click", () => {
	const isOpen = siteNav.classList.toggle("is-open");
	menuToggle.setAttribute("aria-expanded", String(isOpen));
	menuToggle.querySelector("span").textContent = isOpen ? "CLOSE" : "MENU";
});

siteNav?.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", () => {
		siteNav.classList.remove("is-open");
		menuToggle?.setAttribute("aria-expanded", "false");
		if (menuToggle) menuToggle.querySelector("span").textContent = "MENU";
	});
});
