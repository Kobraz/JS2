document.addEventListener("DOMContentLoaded", async () => {
  const profileInfo = document.getElementById("profile-info");
  const token = localStorage.getItem("kobraz_token");

  if (token) {
    try {
      const response = await fetch(
        "https://api.noroff.dev/api/v1/social/profiles",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        console.log(data);

        const profileData = data.profile;

        if (profileData) {
          profileInfo.innerHTML = `
            <h2>User Profile</h2>
            <p>Name: ${profileData.name}</p>
            <p>Email: ${profileData.email}</p>
            <!-- Add more profile fields as needed -->
          `;
          console.log(profileData.name);
          console.log(profileData.email);
        } else {
          console.error("Profile data not found in the API response.");
        }
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
