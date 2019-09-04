import React, { Fragment } from "react"
import { Row, Col, Typography } from "antd"
import Lottie from "react-lottie"
import animationData from "../../assets/about.json"

const about = ({ src }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
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
        <Col lg={8}></Col>
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
