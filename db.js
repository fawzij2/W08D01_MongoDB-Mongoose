const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/test_server`,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true
}).then(
    ()=>{
        console.log("DB is working");
    },
    (err)=>{
        console.log(err);
    }
)