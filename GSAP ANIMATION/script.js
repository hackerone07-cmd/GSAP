// gsap.to(".box",{
//     x:1200,
//     duration: 2,
//     delay: 1,
//     rotate:360,
//     repeat:-1,
//     backgroundColor:"pink",
//     borderRadius: "50%",
//     yoyo: true,
// })
// gsap.to(".box",{
//     x:1500,
//     duration: 1.5,
//     delay: 1,
//     rotate:360,

// const { transform } = require("next/dist/build/swc");

// })
// gsap.to(".box2",{
//     x:1500,
//     duration: 1.5,
//     backgroundColor: "yellow",
//     delay: 2.5,
//     rotate:360,

// })
// gsap.to(".box3",{
//     x:1500,
//     duration: 1.5,
//    scale:0.5,
//    borderRadius:"50%",
//    delay:4,

// })

// var tl = gsap.timeline()

// tl.to(".box",{
//     x:1500,
//     duration: 1.5,

//     delay: 2.5,
//     rotate:360,
// })

// tl.to(".box2",{
//     x:1500,
//     duration: 1.5,

//     rotate:360,
// })
// tl.to(".box3"{
//     x:1500,
//     duration: 1.5,
//     rotate:360,
// })

// gsap.from("h1",{
//  opacity: 0,
//  duration:2,
//  y:30,
//  delay:1,
//  stagger:0.3,
// })

// gsap.from(".box2",{
//     x:1200,

//     duration: 5,
//     delay: 2
// })

// var tl = gsap.timeline()

// tl.from("h2",{
//     y: -10,
//     opacity:0,
//     delay:0.5,
//     duration:1,

// })
// tl.from("h4",{
//     y: -10,
//     opacity:0,
//     duration:1,

//     stagger: 0.3,
// })

// gsap.from(".page1 .box",{
//    scale:0,
//    delay:1,
//  duration:1,
//  rotate:360,
// })
// gsap.from(".page2 .box",{
//     scale:0,
//     delay:1,
//   duration:1,
//   rotate:360,
//   scrollTrigger:{
//     trigger:" .page2 .box",
//     scroller: "body",
//     markers:true,
//     start:
//   }
//  })
//  gsap.from(".page3 .box",{
//     scale:0,
//     delay:1,
//   duration:1,
//   rotate:360,
//  })

// gsap.from(".page2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,

//     scrollTrigger:{
//         trigger:".page2 h1",
//         scroller:"body",
//         marker:  true,
//         start:"top 50%",

//     }

// })

// gsap.from(".page2 h2",{
//     opacity:0,
//     duration:2,
//     x:-500,

//     scrollTrigger:{
//         trigger:".page2 h2",
//         scroller:"body",
//         markers:  true,
//         start:"top 50%",

//     }

// })

// gsap.from(".
//     duration:page2 .box",{
//     opacity:0,1.5,
//     scale:0,
// rotate: 720,

//     scrollTrigger:{
//       trigger:".page2 .box",
//         scroller:"body",
//         marker:  true,
//         start:"top 60%",
//        end: "top 100%",
//        scrub:2,
//     }
// } )

// gsap.to(".page2 h1",{
//     transform:"translateX(-170%)",
//  duration:7,
//     scrollTrigger:{
//         trigger:".page2",
//        scroller: "body",
//        markers:true,
//        start:"top 0%",
//        end:"top -100%",
//        scrub:2,
//        pin:true,
//     }
// })

var path = "M 10 100 Q 500 100 990 100"

var finalpath = "M 10 100 Q 500 100 990 100"
var string = document.querySelector(".string")

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q 500 100 ${dets.y} ${dets.x} 990 100`
  gsap.to("svg path", {
    attr: { d:path },
    duration: 0.3,
    ease:"power3.out",
  })
})

string.addEventListener("mouseleave", function (dets) {
    finalpath = `M 10 100 Q 500 100 ${dets.y} 990 100`
    gsap.to("svg path", {
      attr: { d: finalpath },
      duration: 0.3,
      ease:"power2",
    })
  })
