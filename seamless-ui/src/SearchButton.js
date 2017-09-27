import React from 'react';
import { Button } from 'react-bootstrap'

export default class Feature extends React.Component {
  render() {
    if (this.props.loading) return (<Button disabled className='btn-search'>Loading...</Button>)
    return (
      <div className='text-center'>
        <Button className='btn-search' onClick={this.props.onClick}>
          <div className="pull-left btn-label">Search</div>
        </Button>
      </div>
    )
  }
}