import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api");
      const data = await response.json();
      setBackendData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => {
          return <p key={i}>{user}</p>;
        })
      )}
    </div>
  );
}

export default App;
