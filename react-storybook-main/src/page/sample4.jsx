import { response } from "msw";
import { useState, useEffect } from "react";

function Sample4() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
      response.json().then((json) => {
        setData(json);
        setLoading(false);
      })
    );
  }, []);

  return (
    <div className="Sample">
      {loading ? <h1>Loading...</h1> : <h1>THE COINS({data.length})</h1>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}( {item.symbol}) : {item.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sample4;
