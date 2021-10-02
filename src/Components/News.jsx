import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsMonkey - ${this.capitalize(this.props.category)}`;
  }

  updateNews = async () => {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1dd6ff2496fc4cc18fc20e263c5aa085&${this.state.page}=1&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30);
    let data = await fetch(url).then((res) => res.json());
    this.props.setProgress(70);
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
    });
    this.props.setProgress(100);
  };

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1dd6ff2496fc4cc18fc20e263c5aa085&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url).then((res) => res.json());
    this.setState({
      articles: data.articles.concat(data.articles),
      totalResults: data.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px" }}>
          NewsMonkey - Top {this.capitalize(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={
            this.state.articles ? this.state.articles.length : 0
          }
          next={this?.fetchMoreData}
          hasMore={this?.state?.articles?.length !== this?.state?.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state?.articles?.map((article) => {
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
  }
}

export default News;
