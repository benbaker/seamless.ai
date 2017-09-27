import React from 'react';
import SearchButton from './SearchButton'
import {Row, Col, FormGroup, FormControl} from 'react-bootstrap'

export default class Body extends React.Component {
  constructor(props){
    super(props)
    this.state = {value:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleClick() {
    this.props.onClick(this.state.value)
  }
  handleSubmit(event) {
    if(event.key === 'Enter'){
      this.handleClick()
    }
  }
  render() {
    return (
      <div>
        <Row className='aboveFold'>
          <div className='container text-center'>
            <Col sm={12} md={6} mdOffset={3}>
              <br />
              <b style={{color:"white"}}>
                Advanced Company Research
              </b>
              <FormGroup>
                <FormControl
                  type="text"
                  bsSize="lg"
                  value={this.state.value}
                  onKeyPress={this.handleSubmit}
                  placeholder="e.g. google, intel"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <SearchButton onClick={this.handleClick} loading={this.props.loading} />
            </Col>
          </div>
        </Row>
      </div>
    );
  }
}


