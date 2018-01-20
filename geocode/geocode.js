const request = require("request"); //install npm request

var requestAPI = (address) => {
  //based on npm doc, followed instruction
  request({
    url : `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json: true}
    , (error, response,body) => {
      // console.log(JSON.stringify(body,undefined,2)) //print JSON in string
      if(error){
        console.log("Unable to connect to Google server")
      } else if (body.status === "ZERO_RESULTS"){
        console.log("Unable to find that address")
      } else if (body.status === "OK"){
        console.log(`Address: ${body.results[0].formatted_address}`) //convert it to string to see everything
        console.log(`Lat: ${body.results[0].geometry.location.lat} `)
        console.log(`Log: ${body.results[0].geometry.location.lng} `)
      } else {
        console.log("Something went wrong ")
      }
  })
}

module.exports = {
  requestAPI
};
