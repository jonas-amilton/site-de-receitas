import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

async function doGet(url: string) {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false, data: { msg: "Server error get." } };
  }
}

export { doGet };
