import React, { useState } from "react";
import { shortenUrl } from "./api";
import "./App.css";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await shortenUrl(longUrl); // fetch returns data
      setShortUrl(data.shortUrl);
    } catch (err) {
      console.error("Error shortening URL:", err.message);
    }
  };

  return (
    <center>
    <div className="home">
      
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          style={{ width: "300px", height: "30px", borderRadius: "10px 0px 0px 10px" }}
        />
        <button type="submit" style={{ height: "36px", borderRadius: "0px 10px 10px 0px", marginLeft:"3px" }}>Shorten</button>
      </form>
      {shortUrl && (
        <p style={{ color:"white"}}>
          Short URL: <a href={shortUrl} style={{color:"white"}}>{shortUrl}</a>
        </p>
      )};

      

    </div>
    </center>
  );
}

export default App;