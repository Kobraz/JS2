document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("form");
  const profileInfo = document.getElementById("profile-info");

  const token = localStorage.getItem("kobraz_token");
  if (token) {
    fetch(`https://api.noroff.dev/api/v1/social/profiles/<name>`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch profile data from API");
        }
      })
      .then((res) => {
        profileInfo.innerHTML = `
          <h2>User Profile</h2>
          <p>Name: ${res.name}</p>
          <p>Email: ${res.email}</p>
          
        `;
        console.log(res.name);
        console.log(res.email);
      })
      .catch((err) => {
        console.error("Error fetching profile data from API: ", err);
      });
  } else {
    window.location.href = "./login.html";
  }
});
