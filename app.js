// const yargs = require("yargs")
//
// const geocode = require("./geocode/geocode.js")
//
// // node app.js -a "address to fetch data"
// // node app.js --address "11220"
// const argv = yargs.options({
//   a: {
//     demand: true,
//     alias: "address",
//     describe: "Address to fetch weather for",
//     string: true
//   }
// })
// .help()
// .alias("help","h")
// .argv;
//
// geocode.requestAPI(argv.address, (errorMessage, results) => {
//   if(errorMessage) {
//     console.log(errorMessage)
//   } else {
//     console.log(JSON.stringify(results, undefined,2))
//   }
// })

// https://api.darksky.net/forecast/7699e3e0ca9b801b66d8a7ff5baa15fb/40.6385229,-74.0153231

const request = require("request")

var requestAPI = (address , callback) => {
  request({
    url : `https://api.darksky.net/forecast/7699e3e0ca9b801b66d8a7ff5baa15fb/40.6385229,-74.0153231`,
    json: true
  },(error , response, body) => {
    if(!error && response.statusCode === 200){
      console.log(body.currently.temperature)
    } else {
      console.log("Unable to fetch weather.")
    }
  })
}

requestAPI()
