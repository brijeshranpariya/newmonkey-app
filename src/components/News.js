// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Alert from './Alert';
export class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }
  static defaultProps = {
    country: 'in',
    pagesize: 4,
    category: 'general'
  }
  
  constructor(props) {
    super(props);
    this.state = {
      // articles: this.articles,  this line is used when we are using above article array at line 8.
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0
    }
    document.title = `${this.props.category} news`;
  }
  // https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=fe2ff415329146789e091b59888abc9b&page=1&pagesize=8

  async updateNews(props) {
    this.props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`
    this.setState({ loading: true })
    // we used async to make this function to wait for fetch all the data and then process further
    let data = await fetch(url);
    // console.log(data);
    this.props.setprogress(30);
    let parseddata = await data.json();
    this.props.setprogress(60);
    // console.log(parseddata);
    this.setState({
      loading: false,
      articles: parseddata.articles,
      totalarticles: parseddata.totalResults
    })
    this.props.setprogress(100);
    // console.log("#####"+this.state.articles);
  }
  //we use componentdidmount method for fetching the data from API.
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=${this.props.pagesize}`
    // this.setState({ loading: true })
    // // we used async to make this function to wait for fetch all the data and then process further
    // let data = await fetch(url);
    // let parseddata = await data.json();
    // this.setState({
    //   loading: false,
    //   articles: parseddata.articles,
    //   totalarticles: parseddata.totalResults
    // })
    this.updateNews();
  }

  // we commented both the codes because we have made common function updatenews() for that code 
  // handlenextclick = async () => {
  //   // if (!(this.state.page + 1 > Math.ceil(this.state.totalarticles / this.props.pagesize))) {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
  //   //   this.setState({ loading: true })
  //   //   // we used async to make this function to wait for fetch all the data and then process further
  //   //   let data = await fetch(url);
  //   //   let parseddata = await data.json();
  //   //   this.setState({
  //   //     loading: false,
  //   //     page: this.state.page + 1,
  //   //     articles: parseddata.articles
  //   //   })
  //   // }
  //   this.setState({
  //     page: this.state.page + 1
  //   })
  //   this.updateNews();
  // }
  // handlepreviousclick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
  //   // this.setState({ loading: true })
  //   // // we used async to make this function to wait for fetch all the data and then process further
  //   // let data = await fetch(url);
  //   // let parseddata = await data.json();
  //   // this.setState({
  //   //   loading: false,
  //   //   page: this.state.page - 1,
  //   //   articles: parseddata.articles
  //   // })
  //   this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.updateNews();
  // }
  fetchMoreData = async () => {
    console.log("hiiii");
    // console.log("hii i"); 
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
    this.setState({ page: this.state.page + 1 })
    this.setState({ loading: true })
    // we used async to make this function to wait for fetch all the data and then process further
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata.articles);
    this.setState({
      loading: false,
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
    })
    console.log(this.state.page);
  }


  render() {
    return (
      <>
        <h1 className='text-center position-relative'>Newsmonkey - Top {this.props.category} Headlines</h1>
        {/* below line is saying that if the loading is true then only show the spinner component  */}
        {/* {this.state.loading && <Spinner />} */}
        {/* <button className='position-fixed' onClick={this.fetchmoredata}>Load More</button>     */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >

          <div className="container">
            <div className="row">
              {/* below we have written condition for not showing our news when loading is true */}
              { this.state.articles.map((element) => {  //this function is returning us the article in the form of object , u can see that by console.log(element)
                // console.log(element)
                return <div className="col-md-3" key={element.url}>
                  {/* we need to give a key to the returning part for uniquely identify the each member of an array which we have mapped */}
                  <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author ? element.author : "unknown"} date={element.publishedAt} />
                </div>
              })} 
              {/* {this.state.articles} */}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepreviousclick}>&larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalarticles / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>next&rarr;</button>
        </div> */}

      </>
    )
  }
}

export default News