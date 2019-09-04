import React from "react"
import { Row, Col, Typography, Button, Icon } from "antd"
import ButtonGroup from "antd/lib/button/button-group"
import style from "./banner.module.css"

const banner = () => {
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{
        height: "100vh",
        backgroundImage:
          "url(https://wallpapersite.com/images/pages/pic_h/13023.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Col style={{ textAlign: "center" }}>
        <h1 className={style.banner}>
          <strong>Jesmar.</strong>
        </h1>
        <ButtonGroup style={{ marginBottom: "200px" }}>
          <Button size="large" ghost icon="github">
            Github
          </Button>
          <Button size="large" ghost icon="linkedin">
            Linkedin
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  )
}

export default banner
