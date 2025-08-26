// import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000/" });

// export const shortenUrl = (longUrl) => API.post("/shorten", { longUrl });
// export const getAllUrls = () => API.get("/all");

// const BASE_URL = "http://localhost:5000";

// // POST request: shorten a URL
// export const shortenUrl = async (longUrl) => {
//   const response = await fetch(`${BASE_URL}/shorten`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ longUrl }),
//   });

//   if (!response.ok) {
//     throw new Error(`Error: ${response.status}`); // if server returns error
//   }

//   return await response.json(); // same as axios response.data
// };

// // GET request: fetch all URLs
// export const getAllUrls = async () => {
//   const response = await fetch(`${BASE_URL}/all`);
  
//   if (!response.ok) {
//     throw new Error(`Error: ${response.status}`);
//   }

//   return await response.json();
// };

import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;
//console.log("Backend API URL:", process.env.REACT_APP_BACKEND_URL);
export const shortenUrl = (longUrl) => axios.post(`${BASE_URL}/shorten`, { longUrl }).then(res => res.data);
export const getAllUrls = () => axios.get(`${BASE_URL}/all`).then(res => res.data);
