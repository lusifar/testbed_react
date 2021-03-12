import React from "react";
import classes from "./Main.module.scss";

import { Route, Switch, NavLink } from "react-router-dom";

import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

import List from "../List/List";
import Favorite from "../Favorite/Favorite";

interface TProps {}

const Main: React.FC<TProps> = (props) => {
  return (
    <div className={classes.Main}>
      <Container>
        <Row>
          <Col>
            <Navbar variant="dark" bg="dark" expand="lg">
              <Navbar.Brand>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/"
                >
                  TESTBED
                </NavLink>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav" />
              <Navbar.Collapse className="text-right" id="navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link as={NavLink} exact={true} to="/">
                    Lists
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/favorite">
                    Favorites
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Switch>
              <Route path="/" exact>
                <List />
              </Route>
              <Route path="/favorite">
                <Favorite />
              </Route>
              <Route render={() => <h1>Page NoFound...</h1>}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
