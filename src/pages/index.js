import React, { Fragment } from "react"
import { Affix, BackTop } from "antd"
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
    <About src={myImage} />
    <Projects />
    <Skills />
    <BackTop />
  </Fragment>
)
