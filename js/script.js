document.addEventListener('scroll', event => {
	document.body.style.cssText += `--scroll: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
	wrapper: ".wrapper_to_gsap",
	content: ".content_to_gsap"
})