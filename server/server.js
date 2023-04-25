const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
const path = require('path')
const port = 4000

const a  = require('./modules/slider')


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/slider', express.static('public/images/slider'))

const localUrl = 'http://127.0.0.1:4000/';
const sliderImgArray = ['abb-bankbanner-1.webp', 'abb-png.webp', 'banner-2.webp', 'new-project1.webp']

const sliderArray = sliderImgArray.map(item=>localUrl.concat('slider/',item))
console.log('sliderArray:  ',sliderArray)

app.get("/getSliderArray", (req, res) => {

  res.send(sliderArray)
  
})

// app.post('/postData', (req, res)=>{
//   console.log(req.body.text)
//   db.push(req.body.text)
//   res.send('elave edildi')
// })

// app.post('/deleteData', (req, res)=>{
//   // console.log(req.body.id)
//   db.splice(Number(req.body.id), 1)
//   res.send('silindi')
// })

// app.post('/updateData', (req, res)=>{
//   console.log(req.body.data.id)
//   db[Number(req.body.data.id)] = req.body.data.text
//   res.send('yenilendi')
// })







app.listen(port)