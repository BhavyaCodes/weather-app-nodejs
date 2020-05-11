const request = require('postman-request')
const forecast = require('./utils/forecast.js')
const geocode = require('./utils/geocode.js')

const location = process.argv[2]

if (!location){
    console.log("Please enter a location")
}
else{
    geocode(process.argv[2],(error, {longitude,latitude,location}={})=>{
        if (error){
            console.log(error)
        }
    
        forecast( latitude, longitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }    
    
            console.log(location)
            console.log(forecastData)
    
        })    
    })    
}