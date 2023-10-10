document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://api.noroff.dev/api/v1/social/posts";
  const token = localStorage.getItem("kobraz_token");

  fetch(apiUrl, { headers })
    .then((response) => response.json())
    .then((data) => {
      const cardsContainer = document.getElementById("cards-container");

      data.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h2");
        title.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = item.description;

        card.appendChild(title);
        card.appendChild(description);

        cardsContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
