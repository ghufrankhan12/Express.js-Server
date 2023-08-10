// console.log("my name is ghufran")


import express from 'express'
// import cors from "cors"
import path from 'path'
const __dirname = path.resolve();


const app = express()
// app.use(cors())


app.get('/weather/:cityName', (req, res) => {
  // console.log('hello pakistan' + new Date())

  let weatherdata = {


    london: {
      city: 'london',
      tempInC: '30',
      humidity: "14"

    },

    china: {
      city: 'china',
      tempInC: '45',
      humidity: '19'
    }


  };


  let InPutCiTyNamE = req.params.cityName.toLowerCase();

  let weatherdatatosend = weatherdata[InPutCiTyNamE];

  if (weatherdatatosend) {
    res.send(weatherdatatosend);
  } else {
    res.status(404).send(`the information about this city ${req.params.cityName} is not found`)
  };




  // req.send()
})




app.use( express.static(path.join(__dirname,'public')))


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})