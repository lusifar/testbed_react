import { v4 as uuidv4 } from "uuid";
import React, { useState, useRef } from "react";
import classes from "./List.module.scss";

import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Alert,
  Button,
} from "react-bootstrap";

import { itemAction } from "../../store/actions";

import { TItem, TAction, TActionAsync, TState } from "../../store/type";

interface TProps {}

interface TStateItem {
  item: TState;
}

const List: React.FC<TProps> = (props) => {
  // react-redux
  const lists = useSelector<TStateItem>((state) => state.item.lists) as TItem[];
  const dispatch = useDispatch<React.Dispatch<TAction>>();
  const dispatchAsync = useDispatch<React.Dispatch<TActionAsync>>();

  // useState
  const [btnDisabledState, setBtnDisabledState] = useState<boolean>(true);

  // useRef
  const itemTextEl = useRef<HTMLInputElement>(null);

  // handler
  const bottunSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // add the item into list
    const item = {
      id: uuidv4(),
      text: itemTextEl.current!.value,
    };
    dispatch(itemAction.addList(item));

    // clear text input and disable button
    itemTextEl.current!.value = "";
    setBtnDisabledState(true);
  };

  const inputChangeHandler = (e: React.FormEvent) => {
    if ((e.target as HTMLInputElement).value.length > 0) {
      setBtnDisabledState(false);
    } else {
      setBtnDisabledState(true);
    }
  };

  const addFavoriteHandler = (id: string) => {
    const index = lists.findIndex((item) => item.id === id);
    if (index !== -1) {
      const item = lists[index];

      dispatch(itemAction.removeList(item));
      dispatchAsync(itemAction.addFavoriteAsync(item));
    }
  };

  return (
    <div className={classes.List}>
      <Container className="pt-5">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Form onSubmit={bottunSubmitHandler}>
                  <Form.Group controlId="ItemText">
                    <Form.Control
                      type="input"
                      placeholder="Enter the item's text"
                      ref={itemTextEl}
                      onChange={inputChangeHandler}
                    ></Form.Control>
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    block
                    disabled={btnDisabledState}
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>

            <Card className="mt-3">
              <Card.Body>
                {lists.map((item) => {
                  return (
                    <Alert
                      key={item.id}
                      variant="success"
                      onClick={() => addFavoriteHandler(item.id)}
                    >
                      {item.text}
                    </Alert>
                  );
                })}
                {props.children}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default List;
