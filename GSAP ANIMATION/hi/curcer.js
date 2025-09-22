var main= document.querySelector(".main")
var curser= document.querySelector(".curser")

main.addEventListener("mousemove", function(dets){
   gsap.to(curser,{
    x:dets.x,
    y:dets.y,
   })
    
})