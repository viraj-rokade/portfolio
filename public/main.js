let faviconImageNumber = 1;

const updateFaviconImgNum = () => {
  // Increment the favicon number and reset to 1 if it exceeds 3
  faviconImageNumber = faviconImageNumber < 3 ? faviconImageNumber + 1 : 1;

  // Update the favicon
  document.getElementById(
    "favicon"
  ).href = `circle-cropped${faviconImageNumber}.png`;
};

(() => {
  // Run the update function every 1500ms
  setInterval(updateFaviconImgNum, 1500);
})();
