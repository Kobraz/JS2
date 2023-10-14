document.addEventListener("DOMContentLoaded", async () => {
  const profileInfo = document.getElementById("profile-info");
  const token = localStorage.getItem("kobraz_token");
  const name = localStorage.getItem("name");

  if (token) {
    try {
      const response = await fetch(
        `https://api.noroff.dev/api/v1/social/profiles/${name}?_following=true&_followers=true&_posts=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const profile = await response.json();
        displayProfile(profile);
      } else {
        console.error("Failed to fetch profile data from API");
      }
    } catch (error) {
      console.error("Error fetching profile data from API:", error);
    }
  } else {
    window.location.href = "./login.html";
  }
});

function displayProfile(profile) {
  const { name, email, avatar, posts } = profile;

  const cardsContainer = document.getElementById("cards-container");
  const card = document.createElement("div");
  card.classList.add("card");

  const cardContent = `
  <div class="_name">Name: ${name}</div>
  <div class="_email">E-mail: ${email}</div>
  <div class="_avatar">Avatar: ${avatar}</div>
  <div class="_posts">Posts: ${posts}</div>
  `;

  card.innerHTML = cardContent;
  cardsContainer.appendChild(card);
}
