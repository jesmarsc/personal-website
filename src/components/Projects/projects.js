import React from "react"
import { Card, Row, Col, Icon, Typography } from "antd"
import konektCover from "../../assets/konekt-sized.png"
import kubeCover from "../../assets/kube3d-sized.png"
import bannerCover from "../../assets/banner-sized.png"

const projects = ({ id }) => {
  const colStyle = { margin: "10px 0px" }
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
              <Icon type="github" key="github" />,
              <Icon type="experiment" key="expiriment" />,
            ]}
          >
            <Card.Meta
              title="Kubernetes Konekt"
              description="A web application that deploys Docker containers to Kubernetes Clusters"
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
              <Icon type="github" key="github" />,
              <Icon type="experiment" key="expiriment" />,
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
              <Icon type="github" key="github" />,
              <Icon type="experiment" key="expiriment" />,
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
