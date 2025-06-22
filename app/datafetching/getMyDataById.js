// lib/getMyAllData.js
import { readFile } from "fs/promises";
import path from "path";

export default async function getMyDataById(id) {
  const filePath = path.join(process.cwd(), "app", "MyDataFiles", "myData1.json");

  try {
    const fileContents = await readFile(filePath, "utf-8");
    const allData = JSON.parse(fileContents);

    // If it's an array, find the object with matching id
    const matched = allData.find(item => String(item.id) === String(id));

    if (!matched) {
      throw new Error(`No data found with id: ${id}`);
    }

    return matched;
  } catch (err) {
    throw new Error("Error reading data: " + err.message);
  }
}

