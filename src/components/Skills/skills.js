import React from "react"
import { Row, Col, Typography } from "antd"
import {
  IconText,
  SvgGatsby,
  SvgJava,
  SvgMysql,
  SvgReact,
  SvgSpring,
} from "../Logos/iconExports"

const skills = ({ id }) => {
  const titleStyle = {
    color: "white",
    textAlign: "center",
    fontFamily: "Ubuntu",
  }
  const iconStyle = {
    margin: "4px",
    color: "black",
    fontSize: "3em",
    fontFamily: "Ubuntu",
  }
  const colStyle = {
    textAlign: "center",
  }
  return (
    <div id={id} style={{ paddingTop: "64px", backgroundColor: "#32a7cd" }}>
      <Typography.Title style={titleStyle}>Skills</Typography.Title>

      <Row justify="center" type="flex">
        <Col style={colStyle} sm={24} lg={6}>
          <Typography.Title style={titleStyle}>Front-End</Typography.Title>
          <IconText style={iconStyle} component={SvgReact}>
            React
          </IconText>
          <IconText style={iconStyle} component={SvgGatsby}>
            Gatsby
          </IconText>
        </Col>
        <Col style={colStyle} sm={24} lg={6}>
          <Typography.Title style={titleStyle}>Back-End</Typography.Title>
          <IconText style={iconStyle} component={SvgJava}>
            Java
          </IconText>
          <IconText style={iconStyle} component={SvgSpring}>
            Spring
          </IconText>
          <IconText style={iconStyle} component={SvgMysql}>
            MySql
          </IconText>
        </Col>
      </Row>
    </div>
  )
}

export default skills
