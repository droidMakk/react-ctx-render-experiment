import React from "react";
import { StateInspector } from "reinspect";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import { StoreProvider } from "./Store";
import Profile from "./Profile";
import Cart from "./Cart";
import "./styles.css";

export default function App() {
  return (
    <StateInspector name="react-ctx-render-experiment">
      <StoreProvider>
        <Row justify="center" gutter={16}>
          <Col lg={12} md={24} sm={24} xs={24}>
            <Profile />
          </Col>
          <Col lg={12} md={24} sm={24} xs={24}>
            <Cart />
          </Col>
        </Row>
      </StoreProvider>
    </StateInspector>
  );
}
