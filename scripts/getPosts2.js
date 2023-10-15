document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = `https://api.noroff.dev/api/v1/social/posts/#all-entries`;
  /* let token; */

  window.addEventListener("load", (event) => {
    const token = localStorage.getItem("kobraz_token");
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
          const cardsContainer = document.getElementById("cards-container");

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

            const card = document.createElement("div");
            card.classList.add("card");

            const cardContent = `
              <h2>${title}</h2>
              <p>${body}</p>
              <div class="tags">Tags: ${tags.join(", ")}</div>
              <div class="auth">Author: ${author}</div>
              <div class="created">Created: ${created}</div>
              <div class="media"><img src="${media}"></div>
            `;

            card.innerHTML = cardContent;
            cardsContainer.appendChild(card);
          });
        })
        .catch((err) => {
          console.error("Error fetching data from API: ", err);
        });
    }
  });
});
