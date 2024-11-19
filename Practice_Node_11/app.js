const express = require('express');
const app = express();
const userModel = require('./model/user');
const postModel = require('./model/post');
// app.use(express.json());
// app.use(express.)

app.get('/',function(req,res){
    res.send('Raadhe Raadhe')
})

app.get('/create',async function(req,res){
    let user = await userModel.create({
        username:"Radha",
        email:"Radha@gmail.com",
        age:1000
    })
    res.send(user)
})

app.get('/post/create',async function(req,res){
    let post = await postModel.create({
        postdata:'Raadha Rani ki Jai',
        user:'66b79b3b5ef4986bb89b6f6f'
    })
    let user = await userModel.findOne({_id:"66b79b3b5ef4986bb89b6f6f"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
})

app.listen(3000);