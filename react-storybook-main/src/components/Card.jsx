import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Link } from "react-router-dom";

function Card({ id, coverImage, title, summary, genres }) {
  return (
    <li className="card">
      <img src={coverImage} alt={coverImage} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </li>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  genres: PropTypes.array,
};

export default Card;
