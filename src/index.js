function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function signupUser(email) {
  console.log(email);
}

const signupButton = document.getElementById("signup-button");
signupButton.onclick = e => {
  const email = document.getElementById("email-input");
  const input = email.value;
  const valid = isValidEmail(input);

  if (!valid) {
    signupButton.style.backgroundColor = "rgb(255, 123, 123)";
    signupButton.style.color = "#333";
    signupButton.innerText = "Email looks invalid";
    setTimeout(() => {
      signupButton.style.backgroundColor = "#e6f3f4";
      signupButton.style.color = "#436770";
      signupButton.innerText = "APPLY NOW";
    }, 2000);
  } else {
    signupUser(input);
    signupButton.style.backgroundColor = "#b8f4c2";
    signupButton.style.color = "#333";
    signupButton.innerText = "All done ✌️";
    email.style.display = "none";
    signupButton.style.width = "100%";
    setTimeout(() => {
      signupButton.style.backgroundColor = "#e6f3f4";
      signupButton.style.color = "#436770";
      signupButton.innerText = "APPLY NOW";
      email.value = "";
      email.placeholder = "anotherslimshady@gmail.com";
      email.style.display = "block";
      signupButton.style.width = "unset";
    }, 3000);
  }
};
