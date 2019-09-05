import React, { Fragment } from "react"
import { Icon } from "antd"

const IconText = ({ component, children, style }) => {
  return (
    <div>
      <Icon component={component} style={style} />
      <span style={style}>
        <strong>{children}</strong>
      </span>
    </div>
  )
}

export default IconText
