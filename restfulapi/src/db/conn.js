const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentsapi",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connecion is succesfull")
}).catch((e)=>{
    console.log("no connection")
})