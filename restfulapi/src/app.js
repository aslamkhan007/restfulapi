const express = require("express");
require("./db/conn");
const Student = require("./modals/students")
const app = express();
const port = process.env.PORT || 3000;


app.get("/students",(req ,res )=>{{
    res.send(`hello world from the other side `)
}})


app.use(express.json());
//  create a new student
app.post("/students",(req ,res )=>{{
    //  res.send(req.body)
    const user = new Student(req.body);
    user.save().then(()=>{
        console.log('saved');
        res.send(user);

    }).catch((e)=>{
        console.log(e);
        res.send(e);
    })
    console.log(req.body)
    // res.send(`hello world from the other side `)
}})

app.listen(port,()=>{
    console.log(`connecton is setup at ${port}`);
})