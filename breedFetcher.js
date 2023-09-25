const request = require("request");

const fetchBreedDescription = (breedName) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    try {
      if (error) {
        throw error;
      }

      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("Breed not found");
        return;
      }

      const description = data[0].description;
      console.log(description);
    } catch (error) {
      console.error(error);
    }
  });
};

const breedName = process.argv[2];

if (!breedName) {
  console.log("Please provide a breed name");
  process.exit(1);
}

fetchBreedDescription(breedName);
