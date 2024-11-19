const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',(req, res) => {
    res.send('Raadhe')
})

// <--!for read user -->
app.get('/read', async (req, res) => {
   let readuser = await userModel.find()
   res.send(readuser)
})

//// <--!for delete user -->
app.get('/delete', async (req, res) => {
   let deleteuser = await userModel.findOneAndDelete({username:'BankeBihari'})
   res.send(deleteuser)
})

// <--!for update user -->
app.get('/update', async (req, res) => {
   let updateduser =  await userModel.findOneAndUpdate({username:'Raadhe'}, {name:'Yash'},{new:true}); 
   res.send(updateduser);
})

// <--!for create user -->
app.get('/create',async (req, res) => {
    let createduser = await userModel.create({
        name:'Bihari',
        email: 'Bihari@gmail.com',
        username:'BankeBihari'
    })
    res.send(createduser);
})


app.listen(3000);