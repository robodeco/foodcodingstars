const FOOD2FORK = 'https://food2fork.com/api/search?key='
const APIKey = process.env.F2F_API_KEY;
const axios = require('axios');
const request = require('request');

module.exports = {
  Food2forkapi: function(req, res){

    const RecipeQuery = req.params.recipekeywords;
    console.log(RecipeQuery)
    const url = FOOD2FORK + APIKEY + "&q=" + RecipeQuery +"&sort=r";
    return axios.get(url)
    .then(function(response){
      res.json(response.data)
      console.log(response.data)
    })

    .catch(function(error){
      console.error(error)
    });
  }
}
