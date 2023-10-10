document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://api.noroff.dev/api/v1/social/posts";
  let token;

  window.addEventListener("load", (event) => {
    token = localStorage.getItem("kobraz_token");
    if (token) {
      console.log("accessToken:", token);

      fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Failed to fetch data from API");
          }
        })
        .then((data) => {
          // Assuming data is an array with one or more objects
          data.forEach((post) => {
            const title = post.title;
            const body = post.body;
            const tags = post.tags;
            const media = post.media;
            const reactions = post.reactions;
            const comments = post.comments;
            const created = post.created;
            const updated = post.updated;
            const id = post.id;
            const author = post.author;
            const count = post._count;

            // Now you can use these values for each post
            console.log("Title:", title);
            console.log("Body:", body);
            console.log("Tags:", tags);
            console.log("Media:", media);
            console.log("Reactions:", reactions);
            console.log("Comments:", comments);
            console.log("Created:", created);
            console.log("Updated:", updated);
            console.log("ID:", id);
            console.log("Author:", author);
            console.log("Count:", count);
          });
        })
        .catch((err) => {
          console.error("Error fetching data from API: ", err);
        });
    }
  });
});
