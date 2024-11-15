import PropTypes from "prop-types";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="bg-dark text-light card mb-3 justify-content-center  d-inline-flex my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "380px" }}
    >
      <img
        src={src}
        style={{ height: "200px", width: "360px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? `Brief: ${description}` : "No Description Available"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string,
};

export default NewsItem;
