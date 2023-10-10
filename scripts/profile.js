const form = document.getElementById("form");

window.addEventListener("DOMContentLoaded", (event) => {
  const token = localStorage.getItem("kobraz_token");
  if (token) {
    window.location.href = "./profile.html";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.currentTarget[0].value;
  const password = e.currentTarget[1].value;

  fetch(`https://api.noroff.dev/api/v1/social/profiles`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Failed to fetchdata from API");
      }
    })
    .then((data) => {
      console.log({ data });
      if (data.accessToken) {
        //1. accessToken to local storage
        localStorage.setItem("kobraz_token", data.accessToken);
        //2. direct the user to profile page
        window.location.href = "./profile.html";
      } else {
        console.log("Data does not exist");
      }
    })
    .catch((err) => {
      console.log(err);
      console.error("Error fetching data from API: ", err);
    });
});
