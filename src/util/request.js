import axios from "axios";
import dataPath from "./data.txt";

export const getData = async () => {
  let res = await axios.get(dataPath);
  return res.data;
}