const doFetch = async () => {
  try {
    const response = fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error("Could not fetch data");
  }
};

module.export = {
  doFetch,
};
