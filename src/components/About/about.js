import React, { Fragment } from "react"
import { Row, Col, Typography } from "antd"

const about = ({ src, id }) => {
  const { Title, Paragraph } = Typography
  return (
    <Fragment>
      <Row
        id={id}
        style={{
          margin: "0px",
          paddingTop: "64px",
        }}
        type="flex"
        justify="center"
        gutter={32}
      >
        <Col sm={24} lg={8}>
          <img
            style={{
              borderRadius: "10px",
              boxShadow: "-5px 5px 10px",
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            alt="Graduation"
            src={src}
          />
        </Col>
        <Col sm={24} lg={8}>
          <Typography>
            <Title style={{ fontFamily: "Ubuntu", color: "white" }}>
              About Me
            </Title>
            <Paragraph strong style={{ color: "white" }}>
              B.S. in Computer Engineering - UCSB 2019
            </Paragraph>
            <Paragraph style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              sagittis sem sed cursus sodales. Ut eget diam suscipit eros
              sagittis hendrerit quis at augue. Vestibulum vestibulum turpis
              vitae libero aliquam, non iaculis lectus fringilla. Aenean vitae
              magna rhoncus, aliquam arcu sed, sodales libero. Donec a ex
              lectus. Mauris lobortis, orci ac accumsan vehicula, nunc ipsum
              fringilla lacus, eu interdum metus quam vel metus. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Cras eu dapibus nisl. Nulla maximus efficitur
              velit sit amet ultricies.
            </Paragraph>
            <Paragraph style={{ color: "white" }}>
              Cras quis nisi varius, laoreet leo ut, mollis lacus. Etiam ut
              mauris convallis, consequat lacus vitae, ullamcorper orci. Nullam
              efficitur lobortis mattis. Nam nec magna magna. Pellentesque quis
              mi varius nibh pellentesque euismod. Donec elementum condimentum
              congue. Suspendisse magna augue, sodales gravida consequat
              tincidunt, lacinia nec urna. Integer ornare magna eu eleifend
              aliquet.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
    </Fragment>
  )
}

export default about
