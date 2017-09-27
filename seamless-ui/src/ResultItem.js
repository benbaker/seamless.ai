import React from 'react';
import {Row,Col} from 'react-bootstrap'

export default class ResultItem extends React.Component {
  render() {
    const item = this.props
    const title = item.link
      ? <a href={item.link}><b> {item.title} </b></a>
      : <b className='text-warning'> {item.title} </b>
    return (
      <Row className='resultItem'>
        <Col sm={12}>
          {title}
          <br />
          <b className='text-muted'> {item.name} </b>
          <small className='text-success'> {item.displayLink} </small>
        </Col>
      </Row>
    )
  }
}