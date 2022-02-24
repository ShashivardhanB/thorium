const express = require('express');
const router = express.Router();

 let  players = [ {
     "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
      "swimming"
    ],
    "bookings": [{
  "bookingId": 1,
    "sportId": "" ,
    "centerId": "",
    "type": "private",
   "slot": '16286598000000',
   "bookedOn": '31/08/2021',
   "bookedFor": '01/09/2021'
  },
  {
   "bookingId": 2,
    "sportId": " ",
    "centerId": " ",
   "type": "private",
   "slot": '16286518000000',
   "bookedOn": '31/08/2001',
   "bookedFor": '01/09/2001'
  },]
  },
  {
   "name": "gopal",
   "dob": "1/09/1995",
  "gender": "male",
  "city": "delhi",
  "sports": [
  "soccer"
   ],
  "bookings": [{
   "bookingId": 1,

       "sportId": "" ,
        "centerId": "",
       "type": "private",
       "slot": '16286598000000',
       "bookedOn": '31/08/2021',
       "bookedFor": '01/09/2021'
        },
       {
        "bookingId": 2,
        "sportId": " ",
        "centerId": " ",
       "type": "private",
       "slot": '16286518000000',
       "bookedOn": '31/08/2001',
       "bookedFor": '01/09/2001'
       }, ]
     },
  {
  "name": "lokesh",
  "dob": "1/1/1990",
  "gender": "male",
  "city": "mumbai",
  "sports": [
   "soccer"
 ],
  "bookings": [{
  "bookingId": 1,
        "sportId": "" ,
       "centerId": "",
     "type": "private",
     "slot": '16286598000000',
       "bookedOn": '31/08/2021',
       "bookedFor": '01/09/2021'
        },
       {
        "bookingId": 2,
       "sportId": " ",
         "centerId": " ",
       "type": "private",
       "slot": '16286518000000',
       "bookedOn": '31/08/2001',
       "bookedFor": '01/09/2001'
      },]
   },
  ]
  let  array = [ ];
  for (let i=0;i<players.length;i++){
    const found = players[i].name;
    
    array.push(found);
  }
    router.post("/test-post", function(req, res) {
        let id = req.body.user
         const old = array.find(element => element == id);
          if (old !== id){
            players.push(id);
           }
      res.send({data:players})
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

module.exports = router;