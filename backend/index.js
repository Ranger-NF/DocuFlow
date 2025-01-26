// import fs from "fs";
import express from "express";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";

// let explainedDocs;
// fs.readFile("./data/doc-explained.json", function (err, data) {
//   if (err) throw err;
//   explainedDocs = JSON.parse(data);
// });
const app = express();
const port = 3000;

const genAi = new GoogleGenerativeAI(process.env.GAPI_KEY);
const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getDocRequirements(docInNeed) {
  const prompt = `What are all the required supporting documents needed inorder to apply for ${docInNeed}, return the result as an array json with key as: 'docs' - without any explanation with it (Please remove json code block format. Also add reference to official authority (consider state as Kerala) site with 'reference' as key`;
  const result = await model.generateContent(prompt);
  const response = result.response.text();
  const trimmedResult = response.replace(/```json|```/g, "").trim();

  let parsedResult;
  try {
    parsedResult = JSON.parse(trimmedResult);
    return parsedResult;
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
}

app.use(bodyParser.text());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with the actual origin
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.get("/", async (req, res) => {
  const requiredDoc = req.body;

  if (requiredDoc) {
    const response = await getDocRequirements(requiredDoc);

    // for (let doc in response.docs) {
    //   if (explainedDocs[response.docs[doc]]) {
    //     response.docs[doc] = explainedDocs[response.docs[doc]];
    //   }
    // }
    res.json(response);
  } else {
    res.send("Please provide a document name");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
