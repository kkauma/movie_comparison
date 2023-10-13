const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "a4f7df47",
      s: "avengers",
    },
  });
  console.log(response.data);
};

fetchData();
