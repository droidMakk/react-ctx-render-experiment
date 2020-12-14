import React from "react";
import { Row, Col, Image, Typography, Button, Input } from "antd";
import { EditOutlined, CloseCircleOutlined } from "@ant-design/icons";

export default () => {
  const [edit, setEdit] = React.useState(false);
  const profileField = React.useRef(null);
  const statusField = React.useRef(null);

  React.useEffect(() => {
    if (edit) {
      console.log("profile field ---", profileField.current);
      profileField.current.input.value = "Mikasa Ackerman";
      statusField.current.input.value =
        "This world is cruel. It is also very beautiful";
    }
  }, [edit]);

  return (
    <>
      <Row justify="space-between" gutter={16}>
        <Col span={8}>
          <Image src="https://i.pinimg.com/originals/9c/fd/82/9cfd82435cd64fad07e74cdeeb434a55.png" />
        </Col>
        <Col span={14}>
          <Typography.Title>Mikasa Ackerman</Typography.Title>
          <Typography.Paragraph>
            This world is cruel. It is also very beautiful
          </Typography.Paragraph>
          {edit && (
            <Row justify="space-between">
              <Col span={24} style={{ marginBottom: 15 }}>
                <Input placeholder="YOUR NAME" ref={profileField} />
              </Col>
              <Col span={24} style={{ marginBottom: 15 }}>
                <Input placeholder="YOUR STATUS" ref={statusField} />
              </Col>
              <Col span={24}>
                <Button type="primary">UPDATE</Button>
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
