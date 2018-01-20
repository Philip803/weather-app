const request = require("request"); //install npm request
const yargs = require("yargs")

const argv = yargs.options({
  a: {
    demand: true,
    alias: "address",
    describe: "Address to fetch weather for",
    string: true
  }
})
.help()
.alias("help","h")
.argv;

console.log(argv)

var encodedAddress = encodeURIComponent(argv.address)
//enter node app.js -a "address to fetch data"

//based on npm doc, follow instruction
request({
  url : `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true}
  , (error, response,body) => {
    // console.log(JSON.stringify(body,undefined,2)) //print JSON in string
    console.log(`Address: ${body.results[0].formatted_address}`) //convert it to string to see everything
    console.log(`Lat: ${body.results[0].geometry.location.lat} `)
    console.log(`Log: ${body.results[0].geometry.location.lng} `)

})
