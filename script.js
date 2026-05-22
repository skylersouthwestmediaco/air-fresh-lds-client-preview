const requestForm = document.querySelector(".request-form");

requestForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const button = requestForm.querySelector("button");
  const originalText = button.textContent;
  button.textContent = "Thanks, we'll call soon";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    requestForm.reset();
  }, 2600);
});
