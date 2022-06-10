const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then(times => {
    for (const time of times) {
      console.log(`Next pass at ${new Date(time.risetime * 1000)} for ${time.duration} seconds!`);
    }
  })
  .catch(error => {
    console.log('It didn\'t work:', error.message);
  });