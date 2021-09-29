import axios from "axios";
import dataPath from "./data.txt";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getData = async (params) => {
  const res = await axios.get(dataPath);
  await sleep(700);
  return res.data;
}