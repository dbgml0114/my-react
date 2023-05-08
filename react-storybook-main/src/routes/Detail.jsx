import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
  };

  useEffect(() => {
    getMoive();
  }, []);

  const [movie, setMovie] = useState([]);

  return (
    <>
      <h1>Detail</h1>
      <img src={movie.large_cover_image} alt="" />
      <p>{movie.year}</p>
      <h2>{movie.title}</h2>
      <p>{movie.rating}</p>
    </>
  );
}

export default Detail;
