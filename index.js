import express from "express";
import ejs from "ejs";
import axios from "axios";

const app=express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",async(req,res)=>{
    try{
        const response = await axios.get(`https://v2.jokeapi.dev/joke/Any`);
        const joke= response.data.setup;
        const description = response.data.delivery;

        res.render("index.ejs",{jokes : joke, descriptions: description });

    }
    catch(error){
        res.status(404).send("Error:",error.message);
    }
    
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});