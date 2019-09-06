import React from "react"
import { Row, Col, Button } from "antd"
import ButtonGroup from "antd/lib/button/button-group"
import style from "./banner.module.css"
import resume from "../../assets/resume.pdf"
import bannerCover from "../../assets/bannerImage.jpg"

const banner = () => {
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{
        height: "100vh",
        backgroundImage: `url(${bannerCover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Col style={{ textAlign: "center" }}>
        <h1 className={style.banner}>
          <strong>Jesmar.</strong>
        </h1>
        <ButtonGroup style={{}}>
          <Button
            href="https://github.com/jesmarsc"
            target="_blank"
            rel="noreferrer"
            size="large"
            ghost
            icon="github"
          >
            Github
          </Button>
          <Button
            href="https://www.linkedin.com/in/jesmar-castillo-997336109/"
            target="_blank"
            rel="noreferrer"
            size="large"
            ghost
            icon="linkedin"
          >
            Linkedin
          </Button>
          <Button
            href={resume}
            target="_blank"
            rel="noreferrer"
            size="large"
            ghost
            icon="file-pdf"
          >
            Resume
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  )
}

export default banner
