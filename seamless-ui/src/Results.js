import React from 'react';
import ResultItem from './ResultItem'
import { Row, Col } from 'react-bootstrap'

export default class Result extends React.Component {
  render() {
    if(!this.props.results.length){
      return null
    }
    return (
      <Row className="results">
        <Col sm={12} md={6} mdOffset={3}>
          <div className={'container'}>
            <br />
            <small className='text-muted'>
              {this.props.results.length} results
            </small>
            {this.props.results.map((result,i) => {
              return <ResultItem key={i} {...result} />
            })}
          </div>
        </Col>
      </Row>
    )
  }
}