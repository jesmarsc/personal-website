import React from "react"
import { Menu, Icon } from "antd"
import "./navbar.css"
import { Link } from "gatsby"

const navbar = () => {
  return (
    <Menu
      style={{
        textAlign: "center",
        backgroundColor: "#272262",
      }}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item>
        <Link style={{ color: "white" }} to="/#about">
          <Icon type="smile" />
          About Me
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link style={{ color: "white" }} to="/#projects">
          <Icon type="project" />
          Projects
        </Link>
      </Menu.Item>
    </Menu>
  )
}

export default navbar
