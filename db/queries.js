require('./mongoose')
const User = require('./models/user');
const Card = require('./models/card')

const createUser = async (data) => {
    try{
        const user = new User(data)
        await user.save()
        console.log(`Created ${user}`)
        return user
    } catch (error) {
        console.error(error);
    }
}

const findUser = async (data) => {
    try{
        const user = await User.findOne(data)
        return user
    } catch (error) {
        console.log(error);
    }
}

const getUsers = async () => {
    try {
        const users = await User.find({}) 
        console.log(users);
        return users
    } catch (error) {
        console.log(error);
    }
}


const createCard = async (data) =>{
    try {
        const card = new Card(data)
        await card.save()
        console.log(`Created: ${card}`)
    } catch (error) {
        console.log(error)
    }
}

const findCards = async (data) => {
    try {
        const cards = await Card.findOne(data)
        return cards
    } catch (error) {
        console.log(error);
    }
}

module.exports = {findCards,
    createUser,
    findUser
    }

// findCards({
//     user: 'Wojtek'
// })



// createCard({
//     name: 'Wojtek',
//     text: 'Zadanie numer 3'
// })



// createUser({
//     name: 'Wojtek',
//     password: '1234'
// })