import React from "react"
import { Card, Row, Col, Icon, Typography } from "antd"
import konektCover from "../../assets/konekt-provider.png"
import kube3dCover from "../../assets/kube3d-render.png"

const projects = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(50,167,205,1) 0%, rgba(45,112,161,1) 25%, rgba(42,78,134,1) 50%, rgba(39,34,98,1) 100%)",
        padding: "32px",
      }}
    >
      <Typography.Title style={{ textAlign: "center", color: "white" }}>
        Projects
      </Typography.Title>
      <Row type="flex" justify="space-around" align="middle" gutter={16}>
        <Col style={{ margin: "10px 0px" }} xs={24} lg={6}>
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
        <Col style={{ margin: "10px 0px" }} xs={24} lg={6}>
          <Card
            cover={<img alt="Kube3D" src={kube3dCover} />}
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
        <Col style={{ margin: "10px 0px" }} xs={24} lg={6}>
          <Card
            actions={[
              <Icon type="github" key="github" />,
              <Icon type="experiment" key="expiriment" />,
            ]}
          >
            <Card.Meta
              title="Personal Website"
              description="You're viewing it right now!"
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default projects
