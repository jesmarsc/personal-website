import React from "react"
import { Row, Col, Typography, Icon } from "antd"
import SvgGatsby from "../Icons/SvgGatsby"

const GatsbyIcon = props => <Icon component={SvgGatsby} {...props} />
const skills = () => {
  const titleStyle = {
    color: "white",
    textAlign: "center",
  }
  return (
    <div style={{ backgroundColor: "#32a7cd" }}>
      <Typography.Title style={titleStyle}>Technologies</Typography.Title>

      <Row justify="space-around" type="flex">
        <Col style={{ textAlign: "center" }} lg={6}>
          <Typography.Title style={titleStyle}>Front-End</Typography.Title>
          <GatsbyIcon style={{ fontSize: "64px" }} />
          <span style={{ margin: "12px", color: "black", fontSize: "4.5em" }}>
            <strong>Gatsby</strong>
          </span>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </div>
  )
}

export default skills
