const request = require("request"); //install npm request

//based on npm doc, follow instruction
request({
  url : "http://maps.googleapis.com/maps/api/geocode/json?address=pier%2040",
  json: true}
  , (error, response,body) => {
    console.log(JSON.stringify(body,undefined, 2)) //convert it to string to see everything 
})
