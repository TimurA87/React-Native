import camelize from "camelize";
import { host } from "../../utils/env";

//import { locations } from "./location.mock";

// export const LocationRequest = (searchTerm) => {
//   return new Promise((resolve, reject) => {
//     const locationMock = locations[searchTerm];

//     if (!locationMock) {
//       reject("location not found");
//     }

//     resolve(locationMock);
//   });
// };

export const LocationRequest = (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const LocationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
