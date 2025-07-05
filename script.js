function toggleTheme() {
  document.body.classList.toggle("light");
}

const scriptURL = "https://script.google.com/macros/s/AKfycbzVhQAKXdaXPm4zGU5-C9kdQfR-ZD05y2autZJ6zoghM0u-SRqSFp9ie1zKnaCI8GNVSg/exec";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        swal("Done", "Submitted Successfully.", "success");
        form.reset(); // Optional: Clears the form
      })
      .catch((error) => {
        swal("Error", "Something went wrong. Please try again!", "error");
        console.error("Error!", error.message);
      });
  });
});
