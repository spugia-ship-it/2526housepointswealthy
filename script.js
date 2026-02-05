const testHeights = [40, 80, 120, 160, 200, 100];

testHeights.forEach((value, i) => {
  const bar = document.getElementById(`bar${i + 1}`);
  bar.style.height = value + "px";
});
