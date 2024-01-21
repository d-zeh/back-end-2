const houses = require('./db.json');
let globalId = 4;

module.exports = {

getHouses: (req,res) => {
    res.status(200).send(houses)
},
createHouse: (req,res) => {
    const {address, price, imageURL} = req.body;
    let id = globalId
    let newHouse = {
        id,
        address,
        price,
        imageURL
    }
    globalId++;
    houses.push(newHouse)
    res.status(200).send(houses)
}




}