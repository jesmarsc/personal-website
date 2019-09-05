import React from "react"
import { Card, Row, Col, Icon } from "antd"
import konektCover from "../../assets/konekt-provider.png"
import kube3dCover from "../../assets/kube3d-render.png"

const projects = () => {
  return (
    <div style={{ padding: "30px" }}>
      <Row type="flex" justify="space-around" align="middle" gutter={16}>
        <Col style={{ margin: "10px 0px" }} xs={24} lg={6}>
          <Card
            cover={<img src={konektCover} />}
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
            cover={<img src={kube3dCover} />}
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
