import React, { Fragment } from "react"
import { Affix, BackTop, Layout } from "antd"
import {
  Banner,
  Navbar,
  About,
  Projects,
  Skills,
} from "../components/components"
import { Helmet } from "react-helmet"

import myImage from "../assets/grad-thumb.jpg"

import "antd/dist/antd.css"

// Wrap the require in check for window
if (typeof window !== `undefined`) {
  document.body.style.backgroundColor = "#272262"
}

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="Description"
        content="Jesmar Castillo personal website and portfolio"
      />
      <title>Jesmar Castillo</title>
      <html lang="en" />
    </Helmet>
    <Banner />
    <Affix>
      <Navbar />
    </Affix>
    <About id="about" src={myImage} />
    <Projects id="projects" />
    <Skills id="skills" />
    <BackTop />
    <Layout.Footer
      style={{
        textAlign: "center",
        background: "#32a7cd",
      }}
    >
      © 2019 Jesmar Castillo - Built with React, Gatsby, and Ant Design
    </Layout.Footer>
  </Fragment>
)
