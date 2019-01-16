import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';
import axios from 'axios';
import Animal from './Animal';

export default class Animals extends Component {
  state = {
    data: []
  };
  componentDidMount = async () => {
    const { data } = await axios.get(
      'https://styleguide.effectivedigital.com/interview/api/animals'
    );
    this.setState({ data });
  };
  render() {
    const { data } = this.state;
    return (
      <Container>
        <Row className="pt-4">
          {data.map(animalData => (
            <Animal key={animalData.Id} animalData={animalData} />
          ))}
        </Row>
      </Container>
    );
  }
}
