const NewsItem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className="badge p-2 bg-primary">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://images.news18.com/ibnlive/uploads/2021/07/1627283897_news18_logo-1600x900.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="news"
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
