import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  // c = 'jon snow';
  pagesize = 8;
  apikey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      // <div>{this.c}</div>~
      <Router>
        <Navbar />
        <LoadingBar
        color='red'
        progress={this.state.progress}
        height={3}
        // onLoaderFinished={()=>{}}
        >

        </LoadingBar>
        <Routes>
          <Route exact path='/' element={<News setprogress={this.setprogress} key="home" pagesize={this.pagesize} apikey={this.apikey} country={"in"} category={'general'} />} />
          <Route exact path='/Bussiness' element={<News setprogress={this.setprogress} key="Bussiness" pagesize={this.pagesize} apikey={this.apikey} country={"in"} category={'Bussiness'} />} />
          <Route exact path='/Entertainment' element={<News setprogress={this.setprogress} key="Entertainment" pagesize={this.pagesize} apikey={this.apikey} country={"in"} category={'Entertainment'} />} />
          <Route exact path='/general' element={<News setprogress={this.setprogress} key="general" pagesize={this.pagesize} apikey={this.apikey} country={"in"} category={'general'} />} />
          <Route exact path='/Health' element={<News setprogress={this.setprogress} key="Health" pagesize={this.pagesize} apikey={this.apikey} country={"in"} category={'Health'} />} />
          <Route exact path='/Science' element={<News setprogress={this.setprogress} key="Science" pagesize={this.pagesize} apikey={this.apikey} country={"in"} category={'Science'} />} />
          <Route exact path='/Sports' element={<News setprogress={this.setprogress} key="Sports" pagesize={this.pagesize} apikey={this.apikey} country={"in"} category={'Sports'} />} />
          <Route exact path='/Technology' element={<News setprogress={this.setprogress} key="Technology" pagesize={this.pagesize} apikey={this.apikey} country={"in"} category={'Technology'} />} />
        </Routes>
      </Router>
    )
  }
}
