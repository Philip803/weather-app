//callback function call itself to display the object
var getUser = (id, callback) => {
  var user = {
    id : id ,
    name : "Sing"
  }
  setTimeout(() => {
    callback(user)  //pass in user to the function
  },3000)

}

getUser(30, (userObj) => {
  console.log(userObj.name) //define how to use the user in here
})
