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
},

deleteHouse: (req,res) => {
    const{id} = +req.params.id;
    let index = houses.findIndex(element => element.id === id);
    houses.splice(index,1)
    res.status(200).send(houses)

}




}