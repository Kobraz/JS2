document.addEventListener("DOMContentLoaded", async () => {
    const profileInfo = document.getElementById("profile-info");
    const token = localStorage.getItem("kobraz_token");
    const name = localStorage.getItem("name");
    if (token) {
      try {
        let allUsers = [];
        let page = 1;
  
        while (true) {
          const response = await fetch(
            `https://api.noroff.dev/api/v1/social/profiles/${name}?token=${token}?page=${page}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          if (response.ok) {
            const users = await response.json();
  
            if (users.length === 0) {
              
              break;
            }
  
            allUsers = allUsers.concat(users); 
            page++; /
          } else {
            console.error("Failed to fetch profile data from API");
            break; 
          }
        }
  
        
        console.log(allUsers);
  
        
      } catch (error) {
        console.error("Error fetching profile data from API:", error);
      }
    } else {
      window.location.href = "./login.html"; 
    }
  });
  