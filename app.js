const request = require('postman-request')
const apikey = require('./apikey.js')
// console.log(apikey.key)
const url = `http://api.weatherstack.com/current?access_key=${apikey.key}&query=37.8267,-122.4233`

request({url:url , json:true} , (error, response)=>{  //json: true parses response
    // console.log(response)
    // console.log(response.body)
    //const data = JSON.parse(response.body)
    //console.log(response.body.current)
    console.log('temperature: ', response.body.current.temperature)
    console.log('feels like: ', response.body.current.feelslike)
})