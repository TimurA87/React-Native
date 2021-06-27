//import { mocks, mockImages } from "./mock";
import camelize from "camelize";
import { host } from "../../utils/env";

// export const restaurantsRequest = (location) => {
//   return new Promise((resolve, reject) => {
//     const mock = mocks[location];
//     if (!mock) {
//       return reject("not found");
//     }
//     resolve(mock);
//   });
// };

export const restaurantsRequest = (location) => {
  return fetch(`${host}/placesNearby?location=${location}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaraunt) => {
    return {
      ...restaraunt,
      address: restaraunt.vicinity,
      isOpenNow: restaraunt.opening_hours && restaraunt.opening_hours.open_now,
      isClosedTemporarily: restaraunt.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

// export const restaurantsTransform = ({ results = [] }) => {
//   const mappedResults = results.map((restaraunt) => {
//     restaraunt.photos = restaraunt.photos.map((p) => {
//       return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
//     });
//     return {
//       ...restaraunt,
//       address: restaraunt.vicinity,
//       isOpenNow: restaraunt.opening_hours && restaraunt.opening_hours.open_now,
//       isClosedTemporarily: restaraunt.business_status === "CLOSED_TEMPORARILY",
//     };
//   });
//   return camelize(mappedResults);
// };
