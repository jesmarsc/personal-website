import React, { Fragment } from "react"
import { Affix, BackTop, Layout } from "antd"
import {
  Banner,
  Navbar,
  About,
  Projects,
  Skills,
} from "../components/componentExports"
import { Helmet } from "react-helmet"

import myImage from "../assets/about.jpg"

import "antd/dist/antd.css"

require("typeface-ubuntu")

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
      <style>{"body { background-color: #272262; }"}</style>
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
      © 2019 Jesmar Castillo - Built with React, Gatsby, and Ant Design.
    </Layout.Footer>
  </Fragment>
)
