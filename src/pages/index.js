import React, { Fragment } from "react"
import Banner from "../components/Banner/banner"
import Projects from "../components/Projects/projects"
import About from "../components/About/about"
import "antd/dist/antd.css"

export default () => (
  <Fragment>
    <Banner />
    <About />
    <Projects />
  </Fragment>
)
