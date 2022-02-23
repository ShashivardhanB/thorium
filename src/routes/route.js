const express = require('express');
const router = express.Router();

router.get('/movies', function(req, res) {
    res.send('["pusha","shiva","devadas","hit","varma"]');
})

router.get('/movies/:index', function(req, res) {
   movies=["pusha","shiva","devadas","hit","varma"]
   let movie = req.params.index
   if(movie>movies.length-1){
   res.send('"doesnot exist"')
   } else {
    res.send(movies[movie])
   }
})

router.get('/films',function(req, res) {
    films=       [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Demo"
       }]
       

   res.send(films)
      
    })
      
    router.get('/films:index',function(req, res) {
        films=       [ {
            "id": 1,
            "name": "The Shining"
           }, {
            "id": 2,
            "name": "Incendies"
           }, {
            "id": 3,
            "name": "Rang de Basanti"
           }, {
            "id": 4,
            "name": "Finding Demo"
           }]
           let film = req.params.index
           if(film>films.length-1){
            res.send('"doesnot exist"')
            } else {
             res.send(films[film])
            }
        })

module.exports = router;