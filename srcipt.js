


// Initialize LocomotiveScroll
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

// Sync ScrollTrigger with LocomotiveScroll
locoScroll.on("scroll", ScrollTrigger.update);

// Setup ScrollTrigger to use LocomotiveScroll as proxy
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Refresh ScrollTrigger and LocomotiveScroll on window updates
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// GSAP animation for #page3 h1
gsap.to("#page3 h1", {
    xPercent: -320,
    ease: "power1",
    scrollTrigger: {
        trigger: "#page3",
        start: "top top",
        end: "top -100%",
        scrub: 1,
        pin: true,
        // markers: true, // Debug markers, remove in production
        scroller: "#main"
    }
});

// GSAP animation for #page3 .slide
gsap.to("#page3 .slide", {
    xPercent: -500,
    ease: "power1",
    scrollTrigger: {
        trigger: "#page3",
        start: "top top",
        end: "top -110%",
        scrub: 2,
        // markers: true, // Debug markers, remove in production
        scroller: "#main"
    }
});

