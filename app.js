const yargs = require("yargs")

const geocode = require("./geocode/geocode.js")

// node app.js -a "address to fetch data"
// node app.js --address "11220"
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

//encode method to replace space in string
var encodedAddress = encodeURIComponent(argv.address);

geocode.requestAPI(encodedAddress)
