module.exports={
    devServer:{
        before(app){
            app.get("/list",(req,res)=>{
                let DataList = require("./data/data")
                res.send(DataList)
            })
            
        }
    }
}