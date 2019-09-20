import React from "react"
import styles from "./about.module.css"

const about = ({ src, id }) => {
  return (
    <div id={id} className={styles.row}>
      <div className={styles.container}>
        <img className={styles.image} alt="Graduation" src={src} />
        <h1 className={styles.heading}>About Me</h1>
        <span style={{ fontWeight: "700" }} className={styles.paragraph}>
          B.S. in Computer Engineering - UCSB 2019
        </span>
        <span className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          sagittis sem sed cursus sodales. Ut eget diam suscipit eros sagittis
          hendrerit quis at augue. Vestibulum vestibulum turpis vitae libero
          aliquam, non iaculis lectus fringilla. Aenean vitae magna rhoncus,
          aliquam arcu sed, sodales libero. Donec a ex lectus. Mauris lobortis,
          orci ac accumsan vehicula, nunc ipsum fringilla lacus, eu interdum
          metus quam vel metus. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </span>
      </div>
    </div>
  )
}

export default about
