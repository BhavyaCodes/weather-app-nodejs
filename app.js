const request = require('postman-request')
const weatherApiKey = require('./apikey.js').weatherKey
const mapBoxApiKey = require('./apikey.js').mapBoxKey


const weatherUrl = `http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=37.8267,-122.4233&units=f`
const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapBoxApiKey}`


request({url:weatherUrl , json:true} , (error, response)=>{  //json: true parses response
    if (error){
        console.log('Unable to connect to weather service')
    }
    else if(response.body.error){
        console.log('unable to find location')
    } 
    else {
        console.log('temperature: ', response.body.current.temperature,'f')
        console.log('feels like: ', response.body.current.feelslike,'f')
        console.log('weather description: ',response.body.current.weather_descriptions[0])

    }
})


request({url:mapBoxUrl, json:true} , (error,response)=>{
    if (error){
        console.log('unable to connect to location service')
    }
    else if(response.body.features.length===0){
        console.log("Unable to find location. Try another search")
    }
    else{
        console.log(response.body.features[0].place_name)
        const longitude = response.body.features[0].center[0];
        const latitude = response.body.features[0].center[1];
        console.log(longitude,latitude)
    }
    
})