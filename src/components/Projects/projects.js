import React from "react"
import { Row, Typography } from "antd"
import {
  SvgGatsby,
  SvgJava,
  SvgMysql,
  SvgReact,
  SvgSpring,
} from "../Logos/iconExports"
import ProjectCard from "./projectCard"
import konektCover from "../../assets/konekt-thumb.jpg"
import kubeCover from "../../assets/kube3d-thumb.jpg"
import bannerCover from "../../assets/banner-thumb.jpg"

class Projects extends React.Component {
  state = {
    projects: [
      {
        title: "Kubernetes Konekt",
        cover: konektCover,
        description:
          "A web application that deploys containers to Kubernetes clusters.",
        githubLink: "https://github.com/jesmarsc/kubernetes-konekt",
        demoLink: "https://github.com/jesmarsc/kubernetes-konekt",
        builtWith: [SvgJava, SvgSpring, SvgMysql],
      },
      {
        title: "Kube3D",
        cover: kubeCover,
        description:
          "An android application that creates 3D renderings of Kubernetes clusters.",
        githubLink: "",
        demoLink: "",
        builtWith: [SvgJava],
      },
      {
        title: "Personal Website",
        cover: bannerCover,
        description:
          "My personal website you're viewing right now! Created to practice React.",
        githubLink: "https://github.com/jesmarsc/personal-website",
        demoLink: "https://github.com/jesmarsc/personal-website",
        builtWith: [SvgReact, SvgGatsby],
      },
    ],
  }

  render() {
    const projectCards = this.state.projects.map(project => (
      <ProjectCard
        title={project.title}
        cover={project.cover}
        description={project.description}
        githubLink={project.githubLink}
        demoLink={project.demoLink}
        builtWith={project.builtWith}
      />
    ))

    return (
      <div
        id={this.props.id}
        style={{
          background:
            "linear-gradient(0deg, rgba(50,167,205,1) 0%, rgba(45,112,161,1) 25%, rgba(42,78,134,1) 50%, rgba(39,34,98,1) 100%)",
          paddingTop: "64px",
        }}
      >
        <Typography.Title
          style={{ fontFamily: "Ubuntu", textAlign: "center", color: "white" }}
        >
          Projects
        </Typography.Title>
        <Row
          style={{ margin: "0px" }}
          type="flex"
          justify="center"
          align="middle"
          gutter={32}
        >
          {projectCards}
        </Row>
      </div>
    )
  }
}

export default Projects
