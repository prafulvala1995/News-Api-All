import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import propTypes from 'prop-types';
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";

export default class News extends Component {

    static defaultProps = {
      country: 'in',
      pageSize: 10,
      category: "",
    }

    static propTypes = {
      country: propTypes.string,
      pageSize: propTypes.number,
      category: propTypes.string,
    }

    constructor(){
        super();
        console.log("hello constructor in news" );
        this.state = {
            articles : [], 
            loading : false, 
            page: 1, 
            searchQuery: '' 
        }
    } 

    componentDidMount() {
      this.updatenews();
    }

    async componentDidUpdate(prevProps, prevState) {
      if (prevProps.category !== this.props.category || prevState.page !== this.state.page || prevState.searchQuery !== this.state.searchQuery) {
          await this.updatenews();
      }
  }


    async updatenews() {
      const { searchQuery } = this.state;

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=619fe2bb738b419e9d4cac9a89799a17&page=${this.state.page}&pageSize=10&q=${encodeURIComponent(searchQuery)}&searchIn=title`;

      if (searchQuery) {
        url += `&q=${encodeURIComponent(searchQuery)}&searchIn=title`;
    }

      this.setState({loading : true}); 
      let data = await fetch(url);
      let parsedData = await data.json(); 
      console.log (parsedData);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults ,
        loading : false
      });
      console.log(this.state.articles,"i am articleeeeeeeeeeeee")
  
    } 

    handleNext = () => {
      console.log("next");
      this.setState ({ page : this.state.page + 1 });
      }

      handleprev = () => {
          console.log("previous");
          this.setState ({ page : this.state.page - 1 });
      }

      handleSearchChange = (query) => {
          this.setState({ searchQuery: query });
      };

      handleSearch = () => {
          this.updateNews();
      };


  render() {
    return (
      <>
      <Header onSearchChange={this.handleSearchChange} onSearch={this.handleSearch} />
        <div className="container my-3" align="center">
            <h2> News -Top Headlines </h2>
            {this.state.loading && <Spinner/> }
            <div className="row">
            {
            this.state.articles.map((element) => {
                    return(
                        <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} discription={element.discription} imageUrl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url} 
                        author={element.author} date={element.publishedAt}/>
                    </div>
                    )
                })  
            }
            </div> 
            <dov className="container d-flex justify-content-around">
              <Button disabled={this.state.page<=1}  variant="outline-dark" onClick={this.handleprev}>Previous</Button>
              <Button disabled={this.state.page + 1 > Math.ceil (this.state.totalResults/10)} variant="outline-dark" onClick={this.handleNext}>Next</Button>
            </dov>
          <Footer/>
        </div>
      </>
    );
  }
}
