import express from 'express'
import {nanoid} from 'nanoid'
import fs from 'fs'
import path from "path";
import { fileURLToPath } from "url";


const app=express()
let redircturl="";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post('/short',(req,res)=>{
    const {url}=req.body
    redircturl=url
    console.log(url)
    const uniqueid=nanoid(5)
    res.json({success:true,shortURL:`http://localhost:1598/${uniqueid}`})
})

app.get('/',((req,res)=>{
    res.sendFile(__dirname + '/index.html')
    // res.json("welcome")

}))
app.get('/:uniqueid',(req,res)=>{
    res.redirect(redircturl)
})
app.listen(1598,console.log("server started on 1598"))
