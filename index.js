const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {

  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);

  fetchCoordsByIP(ip, (err, latLng) => {

    if (err) {
      console.log("It didn't work!" , err);
      return;
    }

    console.log('It worked! Returned coordinates:', latLng);

    fetchISSFlyOverTimes(latLng, () => {
      
    });

  });
});