import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cbcf81be3cd64c1987fc0f5b5319b5e9",
  },
});
