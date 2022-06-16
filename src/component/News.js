import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",

    category: "general",
  };
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0

    };
    document.title=`${(this.props.category).charAt(0).toUpperCase()+(this.props.category).slice(1)} - NewsZilla`;
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a1e521c3f244908bd83f3824251502c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async() => {
    this.setState({page:this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a1e521c3f244908bd83f3824251502c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
      
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-4">NewsZilla - Top {(this.props.category).charAt(0).toUpperCase()+(this.props.category).slice(1)} Headlines</h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={(this.state.loading)&&<Spinner/>}
        >
        <div className="container">
        <div className="row">
        
          {this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    author={element.author}
                    date={element.publishedAt}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
      
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        
      </div>
    );
  }
}

export default News;
