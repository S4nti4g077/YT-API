const input = document.querySelector("#input");
const submit = document.querySelector("#submit");

const search = async () => {
  const inputValue = input.value;
  const options = {
    method: "GET",
    url: "https://youtube-music1.p.rapidapi.com/v2/search",
    params: { query: inputValue },
    headers: {
      "X-RapidAPI-Key": "eb25f7b524mshc6ceba9410eefdcp159a3djsn6774bd1cbf53",
      "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
    },
  };
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

submit.addEventListener("click", async function (e) {
  e.preventDefault();
  search();
});
