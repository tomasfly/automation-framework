
import * as express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to your App!")
  })
  
  app.listen(port, function () {
    console.log(`Express server listening on port ${port}`)
  })
  