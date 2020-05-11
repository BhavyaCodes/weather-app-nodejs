const request = require('postman-request')
const weatherApiKey = require('./apikey.js').weatherKey

const forecast = (latitude,longitude,callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${latitude},${longitude}&units=f`
    request({url, json: true}, (error,{body})=>{
        if (error){
            callback('Unable to connect to weather services',undefined)
        } else if (body.error){
            callback(body.error.code,undefined)
        }
        else{
            callback(undefined,{
                location : body.location.name,
                temperature: body.current.temperature,
                feelsLike : body.current.feelslike,
                weatherDescriptions : body.current.weather_descriptions
            })
        }
    })
}

module.exports = forecast