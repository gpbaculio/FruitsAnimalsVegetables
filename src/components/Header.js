import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-menu/assets/index.css';
import Menu, { Item as MenuItem } from 'rc-menu';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const headers = [
      { text: 'Animals', route: 'animals' },
      { text: 'Fruits & Vegetables', route: 'fruitVeg' }
    ];
    return (
      <Container>
        <Row>
          <Col>
            <div className="mt-5">
              <Menu mode="horizontal" openAnimation="zoom">
                {headers.map(({ text, route }) => (
                  <MenuItem key={`${route}`}>
                    <Link to={route} className={route}>
                      {text}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
