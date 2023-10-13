const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "a4f7df47",
      i: "tt0848228",
    },
  });
  console.log(response.data);
};

fetchData();
