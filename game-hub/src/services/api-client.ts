import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7024eb3434e0476893fad8a7743de4f4",
  },
});
