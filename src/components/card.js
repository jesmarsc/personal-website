import React from "react"
import { Row, Col } from "antd"

const Card = ({ title, children, src }) => {
  const imageStyle = {
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "50%",
    borderRadius: "5px",
    boxShadow: "-5px 5px 10px",
  }
  const titleStyle = {
    fontFamily: "Ubuntu",
    color: "white",
    lineHeight: "1em",
  }
  const subStyle = {
    color: "white",
    fontWeight: "200",
    lineHeight: "1em",
  }
  return (
    <Row
      style={{ padding: "32px" }}
      type="flex"
      justify="center"
      align="middle"
    >
      <Col sm={20} lg={16}>
        <h1 style={titleStyle}>{title}</h1>
        <h2 style={subStyle}>
          <i>{children}</i>
        </h2>
        <img style={imageStyle} alt="" src={src} />
      </Col>
    </Row>
  )
}

export default Card
