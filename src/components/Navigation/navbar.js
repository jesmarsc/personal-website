import React from "react"
import { Link } from "gatsby"
import { FaSmile, FaProjectDiagram, FaChartBar } from "react-icons/fa"
import styles from "./navbar.module.css"
import IconWithText from "../Logos/IconWithText"

const navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li>
          <Link to="/#about">
            <IconWithText className={styles.menuLink} component={FaSmile}>
              {" "}
              About Me
            </IconWithText>
          </Link>
        </li>
        <li>
          <Link to="/#projects">
            <IconWithText
              className={styles.menuLink}
              component={FaProjectDiagram}
            >
              {" "}
              Projects
            </IconWithText>
          </Link>
        </li>
        <li>
          <Link to="/#skills">
            <IconWithText className={styles.menuLink} component={FaChartBar}>
              {" "}
              Skills
            </IconWithText>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default navbar
