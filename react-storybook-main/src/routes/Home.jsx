import { useState, useEffect } from "react";
import Card from "../components/Card";
import "../components/Card.scss";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  console.log(movies);
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="card_ls">
          {movies.map((item) => (
            <Card
              id={item.id}
              coverImage={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
              key={item.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
