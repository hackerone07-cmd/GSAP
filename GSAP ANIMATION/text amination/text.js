function breakTheText() {
  var h1 = document.querySelector(".h1");
  var h1Text = h1.textContent;

  var splitedtext = h1Text.split("");
  var halfValue = splitedtext.length / 2;
  var clutter = "";
  splitedtext.forEach(function (elem, idx) {
    if (idx < halfValue) {
      clutter += `<span class = "a">${elem}</span>`;
    } else {
      clutter += `<span class = "b">${elem}</span>`;
    }
  })
  h1.innerHTML = clutter
}

breakTheText();

gsap.from("h1 a", {
  y: 80,

  duration: 0.8,
  delay: 0.5,
  stagger: 0.8,
  opacity: 0,
});

gsap.from("h1 .b", {
  y: 80,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
});
