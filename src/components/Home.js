import React from "react";
import { Divider, Window, WindowHeader, WindowContent, Fieldset, LoadingIndicator, Anchor } from "react95";
import { API_URL, ARTICLES_REQUEST } from "../constants";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newsItems: [],
      loading: true,
    }

    this.refreshFeed = this.refreshFeed.bind(this);
  }

  fetchNews = () => axios.get(API_URL + ARTICLES_REQUEST);

  componentDidMount() {
    this.fetchNews()
      .then(response => {
        console.log(response.data.articles);
        this.setState({
          newsItems: [...response.data.articles, ...this.state.newsItems],
          loading: false,
        });
      })
      .catch(error => console.log(error));

    setInterval(function () {
      this.fetchNews()
        .then(response => {
          console.log(response.data.articles);
          this.setState({
            newsItems: [...response.data.articles, ...this.state.newsItems],
          });
        })
        .catch(error => console.log(error));
    }, 300000);
  }

  refreshFeed() {
    this.setState({
      loading: true,
      newsItems: [],
    });

    this.fetchNews()
      .then(response => {
        console.log(response.data.articles);
        this.setState({
          newsItems: [...response.data.articles, ...this.state.newsItems],
          loading: false,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const NewsItem = (article) => (
      <div key={article.url}>
        <Fieldset label={article.source.name}>
          <Anchor href={article.url} target='_blank' rel="noreferrer">{article.title}</Anchor>
          <p>
            <a href={article.url} target='_blank' rel="noreferrer">{article.description}</a>
          </p>
          <br />
          <Divider />

          <p className="float-left">Published at: {new Date(article.publishedAt).toLocaleString()}</p>
        </Fieldset>
        <br />
      </div>
    );

    const newsItems = this.state.newsItems.map(e => NewsItem(e));

    const newsItemMarkup = (
      <>
        {/* <Tooltip text="Feed is refreshed automatically" enterDelay={100} leaveDelay={500}>
          <Button style={{ width: "100%" }} onClick={this.refreshFeed}>Refresh</Button>
        </Tooltip>
        <br /> */}
        {newsItems}
      </>
    );

    return (
      <div className="content">
        <Window>
          <WindowHeader>
            <span>Crypto news feed</span>
          </WindowHeader>
          <WindowContent className="container">
            {this.state.loading ? <LoadingIndicator></LoadingIndicator> : newsItemMarkup}
          </WindowContent>
        </Window>
      </div>

    );
  }
}

export default Home;