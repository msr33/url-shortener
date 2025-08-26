import React, { useEffect, useState } from "react";
import { getAllUrls } from "./api";

function AdminPage() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const data = await getAllUrls();
        setUrls(data || []); 
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };
    fetchUrls();
  }, []);

  return (
    <center>
    <div style={{ padding: "20px", color: "white" }}>
      <h1>Admin Panel - All Shortened URLs</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id}>
              <td>{url.longUrl}</td>
              <td>
                <a href={`https://url-shortener-1-vbox.onrender.com/${url.shortCode}`} target="_blank" rel="noreferrer" style={{color: "white", textDecoration: "none"}}>
                  {`https://url-shortener-1-vbox.onrender.com/${url.shortCode}`}
                </a>
              </td>
              <td>{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </center>
  );
}

export default AdminPage;
