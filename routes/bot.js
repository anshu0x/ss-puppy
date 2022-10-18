const express = require("express");
const puppeteer = require("puppeteer");
const path = require("path");
const bot = express.Router();
const fs = require("fs")
bot.get("/", async (req, res) => {
  if (!fs.existsSync("screenshots")) {
    fs.mkdirSync("screenshots");
  }
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://whatsapp.com/");
  await page.screenshot({ path: `screenshots/1.jpeg` });
  res.download(path.join(__dirname, "../screenshots", "1.jpeg"));
});

module.exports = bot;
