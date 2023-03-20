let scheduled = null;
window.addEventListener("mousemove", event => {
  if (!scheduled) {
    setTimeout(() => {
      document.body.textContent = ` `;
      scheduled = null;
    }, 100);
  }
  scheduled = event;
  let dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});