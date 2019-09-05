import React, { Fragment } from "react"
import { Row, Col, Typography } from "antd"

const about = ({ src }) => {
  const { Title, Paragraph } = Typography
  return (
    <Fragment>
      <Row
        style={{
          margin: "0",
          padding: "64px",
        }}
        type="flex"
        justify="center"
        gutter={32}
      >
        <Col lg={8}>
          <img
            style={{
              borderRadius: "10px",
              boxShadow: "-5px 5px 10px",
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            alt="Graduation"
            src={src}
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
    </Fragment>
  )
}

export default about
