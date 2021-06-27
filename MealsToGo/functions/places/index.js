const { mocks, addMockImage } = require("./mock");

module.exports.placesRequest = (request, response) => {
  const { location } = request.query;
  const data = mocks[location];
  data.results = data.results.map(addMockImage);
  if (data) {
    response.json(data);
  }
};
