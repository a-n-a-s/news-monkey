import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ category, apiKey, pageSize, country, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    updateNews();
    document.title = `NewsMonkey - ${capitalize(category)}`;
    //eslint disable next line
  }, []);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    setLoading(true);
    setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setProgress(30);
    let data = await fetch(url).then((res) => res.json());
    console.log(data)
    setProgress(70);
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setProgress(100);
    setLoading(false);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`;
    setPage(page + 1);
    let data = await fetch(url).then((res) => res.json());
    setArticles(data.articles.concat(data.articles));
  };

  return (
    <>
    {console.log(articles)}
      <h1 className="text-center " style={{ margin: "35px" , marginTop:"90px" }}>
        NewsMonkey - Top {capitalize(category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={fetchMoreData}
        hasMore={articles?.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles?.map((article) => {
              return (
                <div className="col-md-4" key={article?.url}>
                  <NewsItem
                    imageUrl={article?.urlToImage}
                    title={article?.title?.slice(0, 45)}
                    newsUrl={article?.url}
                    description={article?.description?.slice(0, 87)}
                    date={article?.publishedAt}
                    author={article?.author}
                    source={article?.source?.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
