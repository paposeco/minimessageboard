const changetitle = function() {
  const title = document.getElementById("pagetitle");
  if (title !== null) {
    if (title.textContent.endsWith("|")) {
      title.textContent = title.textContent.replace(" |", "");
    } else {
      const content = title.textContent;
      title.textContent = `${content} |`;
    }
  }
};

window.onload = () => {
  setInterval(changetitle, 500);
};
