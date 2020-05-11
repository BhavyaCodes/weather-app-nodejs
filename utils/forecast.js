const request = require('postman-request')

const weatherApiKey = require('./apikey.js').weatherKey

const forecast = (latitude,longitude,callback)=>{
    const weatherUrl = `http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${latitude},${longitude}&units=f`
    request({url: weatherUrl, json: true}, (error,response)=>{
        if (error){
            callback('Unable to connect to weather services',undefined)
        } else if (response.body.error){
            callback(response.body.error.code,undefined)
        }
        else{
            callback(undefined,{
                location : response.body.location.name,
                temperature: response.body.current.temperature,
                feelsLike : response.body.current.feelslike,
                weatherDescriptions : response.body.current.weather_descriptions
            })
        }
    })
}

module.exports = forecast