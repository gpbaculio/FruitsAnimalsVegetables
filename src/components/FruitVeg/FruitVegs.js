import React, { Component } from 'react';
import { Row, Container } from 'reactstrap';
import axios from 'axios';
import FruitVeg from './FruitVeg';

export default class FruitVegs extends Component {
  state = {
    data: []
  };
  componentDidMount = async () => {
    const { data } = await axios.get(
      'http://styleguide.effectivedigital.com/interview/api/fruitveg'
    );
    this.setState({ data });
  };
  render() {
    const { data } = this.state;
    return (
      <Container>
        <Row className="pt-4">
          {data.map(animalData => (
            <FruitVeg key={animalData.Id} animalData={animalData} />
          ))}
        </Row>
      </Container>
    );
  }
}
