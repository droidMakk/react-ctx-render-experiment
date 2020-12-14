import React from "react";
import { Row, Col, Image, Typography, Button, Input } from "antd";
import { EditOutlined, CloseCircleOutlined } from "@ant-design/icons";

import { Store, types } from './Store';

export default () => {
  const [edit, setEdit] = React.useState(false);
  const { state, dispatch } = React.useContext(Store)
  const profileField = React.useRef(null);
  const statusField = React.useRef(null);

  React.useEffect(() => {
    if (edit) {
      profileField.current.value = state.profile.name;
      statusField.current.value = state.profile.status;
    }
  }, [edit]);

  const handleSubmit = () => {
    const payload = {
      name: profileField.current.value,
      status: statusField.current.value
    };
    dispatch({ type: types.UPDATE_PROFILE, payload })
    setEdit(false)
  }

  return (
    <>
      <Row justify="space-between" gutter={16}>
        <Col span={8}>
          <Image src="https://i.pinimg.com/originals/9c/fd/82/9cfd82435cd64fad07e74cdeeb434a55.png" />
        </Col>
        <Col span={14}>
          <Typography.Title>{state.profile.name}</Typography.Title>
          <Typography.Paragraph>{state.profile.status}</Typography.Paragraph>
          {edit && (
            <Row justify="space-between">
              <Col span={24} style={{ marginBottom: 15 }}>
                <input placeholder="YOUR NAME" ref={profileField} />
              </Col>
              <Col span={24} style={{ marginBottom: 15 }}>
                <input placeholder="YOUR STATUS" ref={statusField} />
              </Col>
              <Col span={24}>
                <Button type="primary" onClick={handleSubmit} >UPDATE</Button>
              </Col>
            </Row>
          )}
        </Col>
        <Col span={2}>
          <Button
            shape="circle"
            type="primary"
            onClick={() => setEdit(!edit)}
            icon={edit ? <CloseCircleOutlined /> : <EditOutlined />}
            size={3}
          />
        </Col>
      </Row>
    </>
  );
};
// Have not added validations, just a simple input field.
