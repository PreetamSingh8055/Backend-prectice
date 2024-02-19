const express=require("express");
const app=express();
const port=8080;

// console.dir(app);
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

    //routing 
    app.get("/", (req,res)=>{    // this method take only get type of request
        res.send("hello, this is a basic path");
    });

    app.get("/apple",(req,res)=>{
        res.send("you contacted apple path");
    });
    
    app.get("/orange",(req,res)=>{
        res.send("you contacted orange path");
    });

    app.get("*",(req,res)=>{
        res.send("<h1>404 Error</h1> <br> <h3>this page is not exist</h3>")
    });

    app.post("/",(req, res)=>{
        res.send("this is a post method")
    })
    
   

    // app.use((req, res)=>{     // this method take all type of request like get,post,patch, delete etc

        // [check request object what return]
        // console.log(req);
    
        // [sending the string response]
        // res.send("this is a basic response");
    
        // [sending the object response]
        // res.send({
        //     name:"apple",
        //     color:"red",
        // })
    
        // [send html response]
        // let code="<h1>Friends</h1><ul><li>Sawan</li><li>Arun</li><li>Sehjot</li></ul>";
        // res.send(code);


        // console.log("request received");
    // });

    
