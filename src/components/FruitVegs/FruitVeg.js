import React, { Component } from 'react';
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';

export default class FruitVeg extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const {
      Id,
      Title,
      Genus,
      Description,
      Family,
      Width,
      Height,
      ImageURLs: { FullSize, Thumb }
    } = this.props.fruitVegData;
    return (
      <React.Fragment>
        {' '}
        <Modal
          centered
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            {Title} - {Genus}
          </ModalHeader>
          <ModalBody>
            <Card className="d-flex justify-content-center align-items-center">
              <CardImg
                onClick={this.toggle}
                top
                width="100%"
                style={{
                  cursor: 'pointer',
                  width: Width,
                  height: Height
                }}
                src={FullSize}
                alt="Card image cap"
              />
              <CardBody className="d-flex justify-content-center flex-column align-items-center">
                <CardTitle>
                  {Title} - {Genus}
                </CardTitle>
                <CardSubtitle>{Family}</CardSubtitle>
                <CardText style={{ textAlign: 'justify' }}>
                  {Description}
                </CardText>
              </CardBody>
            </Card>
          </ModalBody>
        </Modal>
        <Col className="pb-4" key={Id} sm="4" md="3">
          <Card className=" pt-4 d-flex justify-content-center align-items-center">
            <CardImg
              onClick={this.toggle}
              top
              width="100%"
              style={{ width: '65%', cursor: 'pointer' }}
              src={Thumb}
              alt="Card image cap"
            />
            <CardBody className="d-flex justify-content-center flex-column align-items-center">
              <CardTitle>
                {Title} - {Genus}
              </CardTitle>
              <CardSubtitle>{Family}</CardSubtitle>
              <CardText style={{ textAlign: 'justify' }}>
                {Description}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}
