// lib/getMyAllData.js
import { readFile } from "fs/promises";
import path from "path";

export default async function getMyAllData() {
  const filePath = path.join(process.cwd(), "app", "MyDataFiles", "myData1.json");

  try {
    const fileContents = await readFile(filePath, "utf-8");
    return JSON.parse(fileContents);
  } catch (err) {
    throw new Error("Error reading local JSON file: " + err.message);
  }
}


