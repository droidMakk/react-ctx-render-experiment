import React from "react";
import { Row, Col, List, Avatar, Button } from 'antd';

import { Store, types } from './Store';

const CartCard = (props) => {
  const { dispatch } = React.useContext(Store)

  const removeItem = () => {
    dispatch({ type: types.REMOVE_ITEM, payload: props.id })
  }

  return(
    <Col span={24} >
      <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={props.name}
            description={`${props.price} - ${props.id}`}
          />
          <Button onClick={removeItem} >REMOVE</Button>
        </List.Item>
    </Col>
  )
}

export default () => {
  const { state, dispatch } = React.useContext(Store)

  const clearCart = () => {
    dispatch({ type: types.RESET_CART })
  }

  return(
    <Row justify="center" >
      <Col span={24} >
        <Row justify="end" >
          <Button onClick={clearCart} >CLEAR</Button>
        </Row>
      </Col>
      {state.cart.map(v => <CartCard key={v.id+''} {...v} />)}
    </Row>
  );
};
