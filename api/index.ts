// const express = require("express")
import express from 'express';

const PORT:any = process.env.PORT || 5000
const app:any = express()

app.get("/", (req, res) => {
  res.send("Welcome to your App!")
})

app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})