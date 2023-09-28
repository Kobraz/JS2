const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.currentTarget[1].value;
  const password = e.currentTarget[2].value;
  // debugger;
  const payload = {
    email,
    password,
  };

  fetch("https://api.noroff.dev/api/v1/social/auth/login", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
