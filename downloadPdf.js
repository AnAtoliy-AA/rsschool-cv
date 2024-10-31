document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("download-pdf")
    .addEventListener("click", function () {
      window.print();
    });
});
