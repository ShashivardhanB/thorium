const axios = require('axios');
const res = require("express/lib/response");
const { use } = require("express/lib/router");
const jwt = require("jsonwebtoken");
const { findByIdAndUpdate } = require("../models/userModel");
const userModel = require("../models/userModel");


const districtDetails= async function (req,res) {
try{

    let id =req.query.district_id
    
    let date = req.query.date

    let details = {
        method:"get",
        url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${id}&date=${date}`

    }
    let slots = await axios(details);
    let data = slots.data
    res.status(200).send({mes:data})
}catch(err){
    res.status(500).send({mes:err.message})
}
}


const wheather= async function (req,res) {
    try{
    
        let city = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        
        let key = req.query.appid
        let temp1 =[]
        for(let i = 0;i<city.length;i++){
    
        let details = {
            method:"get",
            url : `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${key}`
            
        }
    
        let slots = await axios(details);
        let  data= slots.data.main.temp
        temp1.push({city:city[i],temp:data})
       temp1.sort(function (a, b) {
            return a.temp- b.temp;
          });
    }
        console.log(temp1)
        res.status(200).send({temp:temp1})

    }catch(err){
        res.status(500).send({mes:err.message})
    }
    }


    const memes= async function(req,res){
        
        try{
            var option = {
                method:"get",
                url:`https://api.imgflip.com/get_memes`
            }

            let memes = await axios(option);
            let data = memes.data
           res.status(200).send({data:data})

        }catch(err){
            res.status(500).send({mes:message})
        }
    }


const createMemes = async function(req,res){
    try{

        let id=req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let userName = req.query.username
        let passWord = req.query.password
        let option = {
            method:"post",
            url:`https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${userName}&password=${passWord}`
        }
        let memes = await axios(option)
        let data = memes.data
        res.status(200).send({data:data})

    }catch(err){
        res.status(500).send({err:err.message})
    }
}









module.exports.wheather=wheather;
module.exports.districtDetails=districtDetails;
module.exports.memes=memes;
module.exports.createMemes=createMemes;