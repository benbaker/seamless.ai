import React from 'react';
import Results from './Results'
import Title from './Title'
import Search from './Search'
import request from 'request'
import {url} from './config'

export default class Body extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading:false,
      error:false,
      results:[]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(companies) {
    console.log(companies)
    const opts = {url:url,qs:{companies:companies.split(',')},json:true}
    this.setState({loading:true})
    request.get(opts, (e, r, results) => {
      if(e) {
        this.setState({error:true,loading:false})
      }
      if(results) {
        this.setState({results:results,loading:false})
      }
    })
  }
  render() {
    return (
      <div>
        <Title />
        <Search onClick={this.handleClick} {...this.state}/>
        <Results {...this.state}/>
      </div>
    );
  }
}


