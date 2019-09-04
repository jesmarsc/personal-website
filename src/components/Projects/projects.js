import React from "react"
import { Card, Row, Col, Typography, Icon } from "antd"

const projects = () => {
  return (
    <div style={{ background: "#11171b", padding: "30px" }}>
      <Typography style={{ color: "white" }}>Personal Projects.</Typography>

      <Row type="flex" justify="space-around" align="middle" gutter={16}>
        <Col style={{ margin: "10px 0px" }} xs={24} lg={6}>
          <Card
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
            style={{
              color: "white",
              background:
                "linear-gradient(0deg, rgba(253,187,45,1) 0%, rgba(251,61,152,1) 99%, rgba(232,7,201,1) 100%)",
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
