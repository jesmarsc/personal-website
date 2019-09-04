import React, { Fragment } from "react"
import Banner from "../components/Banner/banner"
import Projects from "../components/Projects/projects"
import About from "../components/About/about"
import Navbar from "../components/Navigation/navbar"
import "antd/dist/antd.css"
import { Affix, Typography } from "antd"

document.body.style.backgroundColor = "#272262"

export default () => (
  <Fragment>
    <Banner />
    <Affix>
      <Navbar />
    </Affix>

    <About src="https://media.giphy.com/media/gzROsII7swwrm/giphy.gif" />
    <Typography.Title style={{ textAlign: "center", color: "white" }}>
      Projects
    </Typography.Title>
    <Projects />
  </Fragment>
)
