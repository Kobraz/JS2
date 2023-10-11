document.addEventListener("DOMContentLoaded", async () => {
  const profileInfo = document.getElementById("profile-info");
  const token = localStorage.getItem("kobraz_token");

  if (token) {
    try {
      // Fetch the user profile based on the token
      const response = await fetch(
        `https://api.noroff.dev/api/v1/social/profiles?token=${token}`,
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
        // Output the entire response for debugging purposes
        console.log(profile);

        // Display the user profile
        profileInfo.innerHTML = `
          <h2>User Profile</h2>
          <p>Name: ${profile.name}</p>
          <p>Email: ${profile.email}</p>
          <!-- Add more profile fields as needed -->
        `;
      } else {
        console.error("Failed to fetch profile data from API");
      }
    } catch (error) {
      console.error("Error fetching profile data from API:", error);
    }
  } else {
    window.location.href = "./login.html"; // Redirect to the login page if there is no token
  }
});
