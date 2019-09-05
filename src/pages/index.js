import React, { Fragment } from "react"
import { Affix, BackTop, Layout } from "antd"
import {
  Banner,
  Navbar,
  About,
  Projects,
  Skills,
} from "../components/components"

import myImage from "../assets/ucsb-me-solo-min.jpg"

import "antd/dist/antd.css"
document.body.style.backgroundColor = "#272262"

export default () => (
  <Fragment>
    <Banner />
    <Affix>
      <Navbar />
    </Affix>
    <About id="about" src={myImage} />
    <Projects id="projects" />
    <Skills />
    <BackTop />
    <Layout.Footer
      style={{
        background:
          "linear-gradient(0deg, rgba(39,34,98,1) 0%, rgba(42,78,134,1) 25%, rgba(45,112,161,1) 50%, rgba(50,167,205,1) 100%)",
      }}
    >
      Greetings
    </Layout.Footer>
  </Fragment>
)
