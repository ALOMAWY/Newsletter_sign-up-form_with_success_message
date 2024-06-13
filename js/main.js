let img = document.getElementById("preview-image");

document.documentElement.clientWidth > 375
  ? (img.src = "assets/images/illustration-sign-up-desktop.svg")
  : (img.src = "assets/images/illustration-sign-up-mobile.svg");

let email = document.getElementById("email");

let button = document.querySelector("button");

let container = document.querySelector(".container");

button.addEventListener("click", () => {
  let emailValue = email.value;
  let emailPattern = /\w{2,}@\w{2,}.(com|org|net|io)/gi;
  let errorSpan = document.querySelector("." + email.dataset.error);

  if (!emailPattern.test(emailValue)) {
    email.style.borderColor = "var(--color-tomato)";

    errorSpan.style.display = "block";
  } else {
    errorSpan.style.display = "none";

    email.style.borderColor = "var(--color-gray)";

    let successIcon = `
    <div class="text-content">
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>

<h1 class="title">Thanks for subscribing!</h1>

<p>A confirmation email has been sent to <span>${emailValue}.</span>Please open it and click the button inside to confirm your subscription.</p>

</div>

<button>Dismiss message</button>
`;

    container.innerHTML = successIcon;

    container.classList.remove("checkout");
    container.classList.add("success");
  }
});
