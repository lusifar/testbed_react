import React from "react";
import classes from "./Favorite.module.scss";

import { useSelector, useDispatch } from "react-redux";

import { Container, Row, Col, Alert } from "react-bootstrap";

import { itemAction } from "../../store/actions";

import { TItem, TAction, TActionAsync, TState } from "../../store/type";

interface TProps {}

interface TStateItem {
  item: TState;
}

const Favorite: React.FC<TProps> = (props) => {
  // react-redux
  const favorites = useSelector<TStateItem>(
    (state) => state.item.favorites,
  ) as TItem[];
  const dispatch = useDispatch<React.Dispatch<TAction>>();
  const dispatchAsync = useDispatch<React.Dispatch<TActionAsync>>();

  // handler
  const addListHandler = (id: string) => {
    const index = favorites.findIndex((item) => item.id === id);
    if (index !== -1) {
      const item = favorites[index];

      dispatchAsync(itemAction.removeFavoriteAsync(item));
      dispatch(itemAction.addList(item));
    }
  };

  return (
    <div className={classes.Favorite}>
      <Container className="pt-5">
        <Row>
          <Col>
            {favorites.map((item) => {
              return (
                <Alert
                  key={item.id}
                  variant="danger"
                  onClick={() => addListHandler(item.id)}
                >
                  {item.text}
                </Alert>
              );
            })}
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Favorite;
