import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country:'in',
    
    category:'general'
  }
  static propTypes={
     country:propTypes.string,
     pageSize:propTypes.number,
     category:propTypes.string
  }

  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a1e521c3f244908bd83f3824251502c&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData=await data.json()
      this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
      
  }
  handlePrevClick=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a1e521c3f244908bd83f3824251502c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData=await data.json()
      
    this.setState(
      {
        page : this.state.page-1,
        articles:parsedData.articles,
        loading:false
      
      }

    )

  }
   handleNextClick=async ()=>{
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){

    
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a1e521c3f244908bd83f3824251502c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parsedData=await data.json()
      
    this.setState(
      {
        page : this.state.page+1,
        articles:parsedData.articles,
        loading:false
      
      }

    )
    
    }
    
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-4">NewsZilla - Top Headlines</h1>
        {this.state.loading&& <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return(
            
              <div key={element.url} className="col-md-4">
               <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} />
             </div>
             ) 
              
          
          
        })}
        
        
          
        </div>
        <div className="container">
        <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        
        </div>
      </div>
    );
  }
}

export default News;
