import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Rick Noack",
      title:
        "Former French president Sarkozy found guilty of illegal campaign financing, likely will avoid prison - The Washington Post",
      description:
        "Sarkozy was already found guilty in a separate trial earlier this year, also connected to the 2012 campaign.",
      url: "https://www.washingtonpost.com/world/europe/france-president-sarkozy-convicted-campaign/2021/09/30/b5e8baac-21cc-11ec-a8d9-0827a2a4b915_story.html",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ESDV44RB2MI6ZM6WRTPL4YGT4I.jpg&w=1440",
      publishedAt: "2021-09-30T12:33:45Z",
      content:
        "He appealed that earlier verdict, delaying it from taking effect, and his lawyer said Thursday that he would also appeal the second conviction. Given that short prison sentences in France can typical… [+2788 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Peter Schacknow",
      title:
        "Stocks making the biggest moves premarket: CarMax, McCormick, fuboTV, Merck and more - CNBC",
      description:
        "These are the stocks posting the largest moves before the bell.",
      url: "https://www.cnbc.com/2021/09/30/stocks-making-the-biggest-moves-premarket-carmax-mccormick-fubotv.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/105284990-Webp.net-resizeimage_28.jpg?v=1585830129",
      publishedAt: "2021-09-30T11:53:13Z",
      content:
        "Check out the companies making headlines before the bell:\r\nCarMax (KMX) The auto retailer missed estimates by 18 cents with quarterly earnings of $1.72 per share, although revenue topped analyst proj… [+2905 chars]",
    },
    {
      source: {
        id: null,
        name: "HuffPost",
      },
      author: "Ron Dicker",
      title:
        "Ellen Pompeo Says She Cussed Out Denzel Washington On 'Grey's Anatomy' Set - HuffPost",
      description:
        "The two locked horns during an episode Washington directed.",
      url: "https://www.huffpost.com/entry/ellen-pompeo-denzel-washington-greys-anatomy_n_6155800ee4b0487c855af1a7",
      urlToImage:
        "https://img.huffingtonpost.com/asset/615582ae240000220d50684c.jpg?ops=1778_1000",
      publishedAt: "2021-09-30T11:19:00Z",
      content:
        "Ellen Pompeo said she harshly snapped back at Denzel Washington when he directed an episode of Greys Anatomy.\r\nWashington, a two-time Oscar-winning actor, was helming 2016s The Sound of Silence episo… [+1064 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title:
        "Britney Spears' father Jamie Spears suspended from conservatorship - CBS News",
      description:
        '"This suspension is directly what Britney wanted, she does not want Jamie in her life," Britney\'s lawyer said in court.',
      url: "https://www.cbsnews.com/news/britney-spears-conservatorship-father-jamie-suspended/",
      urlToImage:
        "https://cbsnews1.cbsistatic.com/hub/i/r/2021/02/10/4435644d-3edf-4993-a982-6169e1f7b67d/thumbnail/1200x630/0612cd6e19fc6214c0091283c8f10650/ap20231686145341.jpg",
      publishedAt: "2021-09-30T11:16:31Z",
      content:
        "A Los Angeles judge has suspended Britney Spears' father Jamie Spears from the conservatorship that's controlled the singer's life, career and finances for 13 years. The decision is a major victory f… [+2760 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Megan Specia",
      title:
        "Sarah Everard’s Killer, Wayne Couzens, Sentenced to Life in Prison - The New York Times",
      description:
        "Ms. Everard’s killing this year inspired a national call to action in Britain to address violence against women. The court heard this week how Wayne Couzens used his police ID and handcuffs in abducting her.",
      url: "https://www.nytimes.com/2021/09/30/world/europe/sarah-everard-wayne-couzens-sentencing.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/09/30/world/30uk-everard/30uk-everard-facebookJumbo.jpg",
      publishedAt: "2021-09-30T11:12:16Z",
      content:
        "The degree of preparation and length of time over which Mr. Couzens planned his attack, as well as the brutality he demonstrated, also factored into the judgment, he said.\r\nJudges in Britain are usua… [+948 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=1dd6ff2496fc4cc18fc20e263c5aa085";
    let data = await fetch(url).then(res => res.json());
    this.setState({articles : data.articles});
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>

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
      </div>
    );
  }
}

export default News;
// 1dd6ff2496fc4cc18fc20e263c5aa085
