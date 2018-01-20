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

geocode.requestAPI(argv.address, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage)
  } else {
    console.log(JSON.stringify(results, undefined,2))
  }
})
