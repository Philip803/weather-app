const request = require("request"); //install npm request

var requestAPI = (address, callback) => {
  //based on npm doc, followed instruction

  //encode method to replace space in string
  var encodedAddress = encodeURIComponent(address);

  request({
    url : `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true}
    , (error, response,body) => {
      // console.log(JSON.stringify(body,undefined,2)) //print JSON in string
      if(error){
        callback("Unable to connect to Google server")
      } else if (body.status === "ZERO_RESULTS"){
        callback("Unable to find that address")
      } else if (body.status === "OK"){
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        })
      } else {
        callback("Something went wrong ")
      }
  })
}

module.exports.requestAPI = requestAPI
// module.exports = {
//   requestAPI
// };
