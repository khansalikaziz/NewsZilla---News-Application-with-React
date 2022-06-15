import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=4a1e521c3f244908bd83f3824251502c&page=1&pageSize=20";
      let data=await fetch(url);
      let parsedData=await data.json()
      this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
      
  }
  handlePrevClick=async ()=>{
    console.log("previous click")
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4a1e521c3f244908bd83f3824251502c&page=${this.state.page-1}&pageSize=20`;
      let data=await fetch(url);
      let parsedData=await data.json()
      this.setState(
        {
          page : this.state.page-1,
          articles:parsedData.articles
        
        }
  
      )

  }
   handleNextClick=async ()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=4a1e521c3f244908bd83f3824251502c&page=${this.state.page+1}&pageSize=20`;
      let data=await fetch(url);
      let parsedData=await data.json()
    this.setState(
      {
        page : this.state.page+1,
        articles:parsedData.articles
      
      }

    )

    }
    
  }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsZilla - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
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
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        
        </div>
      </div>
    );
  }
}

export default News;
