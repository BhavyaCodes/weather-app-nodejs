const request = require('postman-request')

const forecast = require('./utils/forecast.js')

const geocode = require('./utils/geocode.js')


// geocode('ajmer',(error, data)=>{
//     console.log('error', error)
//     console.log('data',data)
// })



forecast(37.8267,-122.4233, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

