import { useEffect, useState } from "react";
import { getNews } from "../services/api";

export default function NewsFeed() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then((res) => {
      console.log("NEWS API:", res.data);
      setNews(res.data);
    });
  }, []);

  return (
    <div>
      <h2>News Feed</h2>

      {news.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {news.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "8px"
              }}
            >
              <h3>
                <strong>headline:</strong>{item.headline}</h3>

              <p>
                <strong>Symbol:</strong> {item.symbol}
              </p>

              <p>
                <strong>Sentiment:</strong> {item.sentiment}
              </p>

              <p>
                <strong>Source:</strong> {item.source}
              </p>

              <p>
                <strong>positive_score:</strong>{item.positive_score}
              </p>

              <p>
                <strong>negative_score:</strong>{item.negative_score}
              </p>

              <p>
                <strong>neutral_score:</strong>{item.neutral_score}
              </p>

              <p>
                <strong>Date:</strong> {item.date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}