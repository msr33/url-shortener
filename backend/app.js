const dotenvs = require("dotenv");
dotenvs.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { nanoid } = require("nanoid"); 
const Url = require("./models/UrlDB")
require('dotenv').config({ path: __dirname + '/.env' });

const app = express();
app.use(cors());
app.use(express.json());

console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Connected Successfully"))
  .catch(err => console.error(" MongoDB Connection Error:", err.message));

const router = express.Router();

//Routes

//new
router.post("/shorten", async (req, res) => {
  const  longUrl = req.body.longUrl;
  
  if (!longUrl) return res.status(400).json({ message: "Please enter a URL" });

  try {
    const shortCode = nanoid(6);
    const newUrl = new Url({ longUrl, shortCode });
    await newUrl.save();
    //console.log("hii helloS");
    res.json({ shortUrl: `https://url-shortener-1-vbox.onrender.com/${shortCode}`, longUrl });
  } catch (error) {
    res.status(500).json({ message: "Hello Server error" });
  }
});


//All
router.get("/all", async (req, res) => {
  try {
    const urls = await Url.find();
    res.json(urls);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});


router.get("/:shortCode", async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shortCode });
    if (url) {
      url.clicks++;
      await url.save();
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json({ message: "URL not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "not Server error" });
  }
});

app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT} Successfully`));