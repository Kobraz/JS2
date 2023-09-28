const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.currentTarget[0].value;
  const password = e.currentTarget[1].value;

  fetch(`https://api.noroff.dev/api/v1/social/auth/login?email=${email}&password=${password}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Failed to fetchdata from API");
      }
    })
    .then((data) => {
      if (data.exists) {
        console.log("Data exists:", data);
      } else {
        console.log("Data does not exist");
      }
    })
    .catch((err) => {
      console.log(err);
      console.error("Error fetching data from API: ", err);
    });
});
