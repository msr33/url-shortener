import React, { useState } from "react";
import App from "./App";
import AdminPage from "./AdminPage";

function Main() {
  const [page, setPage] = useState("home"); // "home" or "admin"

  return (
    <div>
      <nav style={{ padding: "10px" }}>
        <button onClick={() => setPage("home")} style={{borderRadius: "5px", padding:"5px"}}>Home</button>
        <button onClick={() => setPage("admin")} style={{borderRadius: "5px", padding:"5px"}} >Admin</button>
      </nav>

      {page === "home" && <App />}
      {page === "admin" && <AdminPage />}
    </div>
  );
}

export default Main;