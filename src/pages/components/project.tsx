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
        <div className={'project-container'}>
            <h1>Project </h1>
            <div className={'project-list-container'}>
                {
                    data.allContentfulProjects.nodes.map((value: any) => (
                        <div key={value.id} className={'project-item-container'}>
                            <div className="project-image-container">
                                <img src={value.projectPreview[0].url} className="project-image" />
                            </div>
                            <h3 style={{margin: 0}}>{value.projectName}</h3>
                            <p style={{margin: 0}}>{value.projectDescription.projectDescription}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Project