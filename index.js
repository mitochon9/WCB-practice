document.querySelector(".button").addEventListener("click", function (e) {
  party.confetti(this, {
    count: party.variation.range(40, 60),
  });
});
