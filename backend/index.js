import express from "express";

const app = express();
const port = 3000;

const savedDocInfo = {};

app.get("/usable-docs", (req, res) => {
  const docs = req.body;
  if (docs) {
    const prompt = `what is the short form of ${docs} in small letters (give me one work answer) `;
  }

  res.send("Hello World!");
});

app.get("/", (req, res) => {
  const requiredDoc = req.body;

  if (requiredDoc) {
    if (savedDocInfo.hasOwnProperty(requiredDoc.toLowerCase())) {
      res.send(savedDocInfo[requiredDoc]);
    } else {
      res.send("No data");
    }
  } else {
    res.send("Please provide a document type");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
