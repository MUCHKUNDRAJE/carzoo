


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

gsap.to("#page5 #slider1",{
    x:0,
      ease: "power1",
      scrollTrigger: {
        trigger: "#page5",
        start: "top top",
        end: "top -110%",
        scrub: 2,
        // markers: true, // Debug markers, remove in production
        scroller: "#main"
    }

})

gsap.to("#page5 #slider2",{
    x:"-100%",
      ease: "power1",
      scrollTrigger: {
        trigger: "#page5",
        start: "top top",
        end: "top -110%",
        scrub: 2,
        // markers: true, // Debug markers, remove in production
        scroller: "#main"
    }

})
gsap.to("#page5 #slider3",{
    x:0,
      ease: "power1",
      scrollTrigger: {
        trigger: "#page5",
        start: "top top",
        end: "top -110%",
        scrub: 2,
        // markers: true, // Debug markers, remove in production
        scroller: "#main"
    }

})

var menu=document.querySelector("#menu");
var menubutton=document.querySelector("nav h1")

menubutton.addEventListener("click",function(){
    gsap.to(menu,{
        y:10,
    })
})

var tl = gsap.timeline();
tl.to("#loder",{
   opacity : 0,
   delay:1,
})
tl.to("#loder",{
   display:"none"
 },"anim")
tl.from("nav",{
    opacity:0,
  },"anim")
tl.from("#page1 h1",{
    x:50,
    opacity:0,
})
tl.from("#page1 h2",{
    x:-50,
    opacity:0,
})
tl.to("#div22",{
    x:700,
    duration:0.3,
    ease:"power2"
   
})


var boll=document.querySelector("#circle");
var main=document.querySelector("#main");
var nav =document.querySelector("nav");

main.addEventListener("mousemove",function(dets){
  gsap.to(boll, {
    x : dets.x,
    y :dets.y,
  })
})
nav.addEventListener("mousemove",function(dets){
    gsap.to(boll, {
      x : dets.x,
      y :dets.y,
    })
  })
  
