import React from "react"
import { Row, Col, Typography } from "antd"

const about = () => {
  const { Title, Paragraph, Text } = Typography
  return (
    <Row
      style={{ margin: "0", paddingTop: "128px", backgroundColor: "#11171b" }}
      type="flex"
      justify="center"
      gutter={32}
    >
      <Col lg={8}>
        <img
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "25px",
          }}
          src="https://cdn.pixabay.com/photo/2017/06/21/09/24/retro-2426631_960_720.png"
        />
      </Col>
      <Col lg={8}>
        <Typography>
          <Title style={{ color: "white" }}>About Me</Title>
          <Paragraph strong style={{ color: "white" }}>
            B.S. in Computer Engineering - UCSB 2019
          </Paragraph>
          <Paragraph style={{ color: "white" }}></Paragraph>
        </Typography>
      </Col>
    </Row>
  )
}

export default about
