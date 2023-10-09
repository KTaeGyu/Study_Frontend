import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  <div>
    <img src={coverImg} />
    <h2>{title}</h2>
    <p>{summary}</p>
    <ul>
      {genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </ul>
    <hr />
  </div>;
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
