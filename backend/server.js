const app=require("./app");
const dotenv=require("dotenv");

//Handling uncaught exception

process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server due to uncaught exception `);
    process.exit(1);
    
})

//Config
dotenv.config({path:"backend/config/config.env"});


//Connecting to database
const connectDatabase=require("./config/database");
connectDatabase();
const server=app.listen(process.env.PORT, ()=>{
    console.log(`server working on http://localhost:${process.env.PORT}`);

})


// Unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server due to unhandled promise rejection`);
    server.close(()=>{
        process.exit(1);
    })
})