import React from "react"
import { Card, Icon, Col } from "antd"

const projectCard = ({
  title,
  cover,
  description,
  githubLink,
  demoLink,
  builtWith,
}) => {
  const colStyle = { margin: "10px 0px" }
  const iconStyle = {
    margin: "0em 0.25em",
    fontSize: "1.4em",
  }
  const builtWithIcons = builtWith.map(svg => (
    <Icon style={iconStyle} component={svg} />
  ))
  return (
    <Col style={colStyle} xs={24} lg={6}>
      <Card
        cover={<img src={cover} alt="Project" />}
        actions={[
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <p style={{ margin: "0" }}>Code</p>
            <Icon type="github" key="github" />
          </a>,

          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <p style={{ margin: "0" }}>Demo</p>
            <Icon type="experiment" key="experiment" />
          </a>,

          <div>
            <p style={{ margin: "0" }}>Built With</p>
            {builtWithIcons}
          </div>,
        ]}
      >
        <Card.Meta title={title} description={description} />
      </Card>
    </Col>
  )
}

export default projectCard
