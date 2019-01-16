import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-menu/assets/index.css';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import verticals from './json/verticals';
import courses from './json/courses';
import categories from './json/categories';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="w-25 mt-5">
              <Menu mode="vertical" openAnimation="zoom">
                {verticals.map(({ Name: VerticalName, Id: VerticalId }) => (
                  <SubMenu
                    title={VerticalName}
                    key={`${VerticalName}${VerticalId}`}>
                    {categories
                      .filter(({ Verticals }) => VerticalId === Verticals)
                      .map(({ Id: CategoriesId, Name: CategoriesName }) => (
                        <SubMenu
                          key={`${CategoriesName}${CategoriesId}`}
                          title={
                            <span style={{ paddingRight: '20px' }}>
                              {CategoriesName}
                            </span>
                          }>
                          {courses
                            .filter(
                              ({ Categories }) => Categories === CategoriesId
                            )
                            .map(({ Id, Name, Author, Categories, State }) => (
                              <MenuItem key={`${Name}${Id}`}>{Name}</MenuItem>
                            ))}
                        </SubMenu>
                      ))}
                  </SubMenu>
                ))}
              </Menu>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
