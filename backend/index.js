import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const port = 3000;

const genAi = new GoogleGenerativeAI(process.env.API_KEY);
const savedDocInfo = {};

async function getDocRequirements(docInNeed) {
  const prompt = `What are the required documents needed inorder to apply for ${docInNeed}, return the result as an array json with key as: 'docs' - without any explanation with it`;
  const result = await genAi.generateContent(prompt);
  const response = await result.reponse;
  console.log(response);
}

app.get("/usable-docs", (req, res) => {
  const docs = req.body;
  if (docs) {
    const prompt = `what is the short form of ${docs} in small letters (give me one work answer) `;
  }

  res.send("Hello World!");
});

app.get("/", async (req, res) => {
  const requiredDoc = req.body;

  if (requiredDoc) {
    if (savedDocInfo.hasOwnProperty(requiredDoc.toLowerCase())) {
      res.send(savedDocInfo[requiredDoc]);
    } else {
      res.send("No data");
    }
  } else {
    response = await getDocRequirements();
    res.send(response);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
