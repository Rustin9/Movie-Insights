import { useState } from "react";

export default function Home() {
  const [movie, setMovie] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch("/api/insights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movie }),
    });

    const json = await res.json();
    setData(json);
  };

  return (
    <div className="container">
      <h1 className="title">🎬 AI Movie Insights</h1>

      <div className="search-box">
        <input
          className="input"
          placeholder="Enter movie name (e.g. Inception)"
          onChange={(e) => setMovie(e.target.value)}
        />
        <button className="btn" onClick={fetchData}>
          Generate
        </button>
      </div>

      {data && (
        <>
          {/* Hook */}
          <div className="card verified">
            <span className="badge badge-green">Verified</span>
            <h3 className="section-title">🎯 Plot Hook</h3>
            <p>{data.hook}</p>
          </div>

          {/* Themes */}
          <div className="card speculative">
            <span className="badge badge-orange">Speculative Insight</span>
            <h3 className="section-title">🧠 Themes</h3>
            {data.themes?.map((t, i) => (
              <p className="list-item" key={i}>
                • {t}
              </p>
            ))}
          </div>

          {/* Trivia */}
          <div className="card">
            <span className="badge badge-green">Verified Facts</span>
            <h3 className="section-title">🎬 Trivia</h3>
            {data.trivia?.map((t, i) => (
              <p className="list-item" key={i}>
                • {t}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}