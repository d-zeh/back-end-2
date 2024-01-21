const houses = require('./db.json');
let globalId = 4;

module.exports = {

getHouses: (req,res) => {
    res.status(200).send(houses)
},




}