// console.log("my name is ghufran")


import express from 'express'
import cors from "cors"
import path from 'path'
const __dirname = path.resolve();


const app = express()
app.use(cors())


app.get('/ranking/:formate', (req, res) => {
  // console.log('hello pakistan' + new Date())

  let cricketplayerRating  = {


    TEST: {

      POS_1:'Kane Williamson',
      POS_2:'JEO Root',
      POS_3:'Steve Smith',
      POS_4:'Babar Azam',
      POS_5:'Marnus Labuschagne',
      POS_6:'Travis Head',
      POS_7:'Usman Khawaja',
      POS_8:'Daryl Mitchell',
      POS_9:'Harry Brook',
      POS_10:'Rohit Sharma',
      RAT_1:'883',
      RAT_2:'859',
      RAT_3:'842',
      RAT_4:'829',
      RAT_5:'826',
      RAT_6:'818',
      RAT_7:'796',
      RAT_8:'792',
      RAT_9:'773',
      RAT_10:'759'

    },

    ODI: {
      POS_1:'Babar Azam',
      POS_2:'Rassie van der Dussen',
      POS_3:'Fakhar Zaman',
      POS_4:'Imam-ul-Haq',
      POS_5:'Shubman Gill',
      POS_6:'Harry Tector',
      POS_7:'David Warne',
      POS_8:'Quinton de Kock ',
      POS_9:'Virat Kohli',
      POS_10:'Steve Smith',
      RAT_1:'886',
      RAT_2:'777',
      RAT_3:'755',
      RAT_4:'745',
      RAT_5:'743',
      RAT_6:'726',
      RAT_7:'726',
      RAT_8:'718',
      RAT_9:'705',
      RAT_10:'702'
    },

    T20: {
      POS_1:'Suryakumar Yadav',
      POS_2:'Mohammad Rizwan',
      POS_3:'Babar Azam',
      POS_4:'Aiden Markram',
      POS_5:'Rilee Rossouw',
      POS_6:'Muhammad Waseem',
      POS_7:'	Devon Conway',
      POS_8:'Dawid Malan ',
      POS_9:'Aaron Finch',
      POS_10:'Jos Buttler',
      RAT_1:'907',
      RAT_2:'811',
      RAT_3:'756',
      RAT_4:'748',
      RAT_5:'724',
      RAT_6:'716',
      RAT_7:'709',
      RAT_8:'705',
      RAT_9:'680',
      RAT_10:'670',
     



  },

 
}

let userInputcricketFormate = req.params.formate.toUpperCase();

console.log("userInputcricketFormate" , userInputcricketFormate)

let rankingFormate = cricketplayerRating[userInputcricketFormate]

if(rankingFormate ) {
  res.send(rankingFormate)
 } else{
    res.status(404).send(`Cricket Ranking is Not Available for ${req.params.formate}`);
  }




  });

  







  // req.send()






app.use('/', express.static(path.join(__dirname,'public')))


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})