import React from "react"
import { Menu, Icon } from "antd"
import "./navbar.css"

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
        <Icon type="smile" />
        About Me
      </Menu.Item>
      <Menu.Item>
        <Icon type="project" />
        Projects
      </Menu.Item>
    </Menu>
  )
}

export default navbar
