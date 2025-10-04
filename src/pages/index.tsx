import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/global.css'
import '../styles/fonts.css'
import '../styles/profile.css'
import '../styles/skills.css'
import '../styles/employment.css'
import '../styles/project.css'
import Profile from "./components/profile"
import Skill from "./components/skills"
import Employment from "./components/employment"
import Project from "./components/project"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section id="hero">
        <Profile />
      </section>
      <section id="about">
        <Skill />
      </section>
      <section id="experience">
        <Employment />
      </section>
      <section id="projects">
        <Project />
      </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
