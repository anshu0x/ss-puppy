// const browser = await puppeteer.launch();
const express = require("express");
const bot = require("./routes/bot");

const app = express();
app.use("/bot", bot)

const port = 3000 || process.env.PORT;
app.get("/",(req,res)=>{
  res.send("hello")
})

app.listen(port, () => {
  console.log("Server is running");
});
