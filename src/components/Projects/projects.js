import React, { Fragment } from "react"
import { Card, Row, Col, Icon, Typography } from "antd"
import {
  IconText,
  SvgGatsby,
  SvgJava,
  SvgMysql,
  SvgReact,
  SvgSpring,
} from "../Icons/iconExports"
import konektCover from "../../assets/konekt-thumb.jpg"
import kubeCover from "../../assets/kube3d-thumb.jpg"
import bannerCover from "../../assets/banner-thumb.jpg"

const projects = ({ id }) => {
  const colStyle = { margin: "10px 0px" }
  const iconStyle = {
    paddingRight: "0.5em",
    fontSize: "1.25em",
  }
  return (
    <div
      id={id}
      style={{
        background:
          "linear-gradient(0deg, rgba(50,167,205,1) 0%, rgba(45,112,161,1) 25%, rgba(42,78,134,1) 50%, rgba(39,34,98,1) 100%)",
        paddingTop: "64px",
      }}
    >
      <Typography.Title
        style={{ fontFamily: "Ubuntu", textAlign: "center", color: "white" }}
      >
        Projects
      </Typography.Title>
      <Row
        style={{ margin: "0px" }}
        type="flex"
        justify="center"
        align="middle"
        gutter={32}
      >
        <Col style={colStyle} xs={24} lg={6}>
          <Card
            cover={<img alt="Kubernetes Konekt" src={konektCover} />}
            actions={[
              <Fragment>
                Code
                <Icon type="github" key="github" />
              </Fragment>,

              <Fragment>
                Demo
                <Icon type="experiment" key="expiriment" />
              </Fragment>,

              <Fragment>
                Built With
                <div>
                  <Icon style={iconStyle} component={SvgJava} />
                  <Icon style={iconStyle} component={SvgSpring} />
                  <Icon style={iconStyle} component={SvgMysql} />
                </div>
              </Fragment>,
            ]}
          >
            <Card.Meta
              component={<p>hello</p>}
              title="Kubernetes Konekt"
              description="A web application that deploys containers to Kubernetes clusters."
            />
          </Card>
        </Col>
        <Col style={colStyle} xs={24} lg={6}>
          <Card
            cover={<img alt="Kube3D" src={kubeCover} />}
            style={{
              color: "white",
            }}
            actions={[
              <Fragment>
                Code
                <Icon type="github" key="github" />
              </Fragment>,

              <Fragment>
                Demo
                <Icon type="experiment" key="expiriment" />
              </Fragment>,

              <Fragment>
                Built With
                <div>
                  <Icon style={iconStyle} component={SvgJava} />
                </div>
              </Fragment>,
            ]}
          >
            <Card.Meta
              style={{ color: "white" }}
              title="Kube3D"
              description="An Android application that 3D renders Kubernetes clusters"
            />
          </Card>
        </Col>
        <Col style={colStyle} xs={24} lg={6}>
          <Card
            cover={<img alt="Kube3D" src={bannerCover} />}
            actions={[
              <Fragment>
                Code
                <Icon type="github" key="github" />
              </Fragment>,

              <Fragment>
                Demo
                <Icon type="experiment" key="expiriment" />
              </Fragment>,

              <Fragment>
                Built With
                <div>
                  <Icon style={iconStyle} component={SvgReact} />
                  <Icon style={iconStyle} component={SvgGatsby} />
                </div>
              </Fragment>,
            ]}
          >
            <Card.Meta
              title="Personal Website"
              description="You're viewing it right now! Latest project in the making."
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default projects
