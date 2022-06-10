const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, response) => {
  if (error) {
    console.log("It didn't work!" , error);
  } else {
    for (const item of response) {
      console.log(`Next pass at ${new Date(item.risetime * 1000)} for ${item.duration} seconds!`);
    }
  }
});