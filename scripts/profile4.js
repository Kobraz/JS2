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

  const cardContent = `
  <div class="_name">Name: ${name}</div>
  <div class="_email">E-mail: ${email}</div>
  <div class="_following">Following: ${following}</div>
  <div class="_followers">Followers: ${followers}</div>
  <div class="_posts">Posts: ${posts}</div>
  `;

  card.innerHTML = cardContent;
  cardsContainer.appendChild(card);
}
