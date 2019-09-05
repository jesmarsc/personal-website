import React, { Fragment } from "react"
import Banner from "../components/Banner/banner"
import Projects from "../components/Projects/projects"
import About from "../components/About/about"
import Navbar from "../components/Navigation/navbar"
import "antd/dist/antd.css"
import { Affix, Typography, BackTop } from "antd"

import myImage from "../assets/ucsb-me-solo-min.jpg"

document.body.style.backgroundColor = "#272262"

export default () => (
  <Fragment>
    <Banner />
    <Affix>
      <Navbar />
    </Affix>

    <About src={myImage} />
    <Typography.Title style={{ textAlign: "center", color: "white" }}>
      Projects
    </Typography.Title>
    <Projects />
    <BackTop />
  </Fragment>
)
