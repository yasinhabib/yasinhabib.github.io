import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"

const Project = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulProjects {
                    nodes {
                        projectName
                        id
                        projectDescription {
                            projectDescription
                        }
                        projectPreview {
                            url
                        }
                    }
                }
            }
        `
      );
    return(
        <div className={'projects-container'}>
            <h1 className={'section-title'}>Projects</h1>
            <div className={'projects-grid'}>
                {
                    data.allContentfulProjects.nodes.map((value: any) => (
                        <div key={value.id} className={'project-card'}>
                            <div className="project-image-container">
                                <img src={value.projectPreview[0].url} className="project-image" alt={value.projectName} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{value.projectName}</h3>
                                <p className="project-description">{value.projectDescription.projectDescription}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Project