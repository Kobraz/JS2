const { doFetch } = require("./utils/doFetch");

async function main() {
  const posts = await doFetch(API_BASE_URL);
  console.log(posts);
}

main();
