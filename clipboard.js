
spans = document.querySelectorAll(".email");
for (const span of spans) {
  span.onclick = function() {
    document.execCommand("copy");
  }

  span.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", span.textContent);
      console.log(event.clipboardData.getData("heyitsnaim@gmail.com"))
    }
  });
}