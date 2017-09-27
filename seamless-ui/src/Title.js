import React from 'react';
import {Row} from 'react-bootstrap'

export default class Body extends React.Component {
  render() {
    return (
      <Row className="titleBar">
        <div className='container text-center'>
            <ben>
              Created by <b> Ben Baker </b>
            </ben>
        </div>
      </Row>
    );
  }
}


