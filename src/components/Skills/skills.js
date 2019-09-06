import React from "react"
import { Row, Typography } from "antd"
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
    marginTop: "0.5em",
    marginBottom: "0",
  }
  const iconStyle = {
    color: "black",
    fontSize: "3em",
    fontFamily: "Ubuntu",
  }
  return (
    <div id={id} style={{ paddingTop: "64px", backgroundColor: "#32a7cd" }}>
      <Typography.Title style={titleStyle}>Skills</Typography.Title>
      <Typography.Title style={titleStyle}>Front-End</Typography.Title>
      <Row justify="center" type="flex">
        <IconText style={iconStyle} component={SvgReact}>
          React
        </IconText>
        <IconText style={iconStyle} component={SvgGatsby}>
          Gatsby
        </IconText>
      </Row>
      <Typography.Title style={titleStyle}>Back-End</Typography.Title>

      <Row justify="center" type="flex">
        <IconText style={iconStyle} component={SvgJava}>
          Java
        </IconText>
        <IconText style={iconStyle} component={SvgSpring}>
          Spring
        </IconText>
        <IconText style={iconStyle} component={SvgMysql}>
          MySql
        </IconText>
      </Row>
    </div>
  )
}

export default skills
