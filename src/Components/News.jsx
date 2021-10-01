import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=1dd6ff2496fc4cc18fc20e263c5aa085&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url).then((res) => res.json());
    this.setState({ articles: data.articles, totalResults = data.totalResults });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1dd6ff2496fc4cc18fc20e263c5aa085&page=${this.state.page - 1
      }&pageSize=${this.props.pageSize}`;

    let data = await fetch(url).then((res) => res.json());

    this.setState({ page: this.state.page - 1, articles: data.articles });
  };

  handleNextClick = async () => {


    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1dd6ff2496fc4cc18fc20e263c5aa085&page=${this.state.page + 1
      }&pageSize=${this.props.pageSize}`;

    let data = await fetch(url).then((res) => res.json());

    this.setState({ page: this.state.page + 1, articles: data.articles });

  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>

        <div className="row">
          {this.state?.articles?.map((article) => {
            return (
              <div className="col-md-4" key={article?.url}>
                <NewsItem
                  imageUrl={article?.urlToImage}
                  title={article?.title?.slice(0, 45)}
                  newsUrl={article?.url}
                  description={article?.description?.slice(0, 87)}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
            disabled={(this.state.page + 1) > (Math.ceil(this.state.totalResults / this.state.pageSize))}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
