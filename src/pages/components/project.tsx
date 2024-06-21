import { PageProps, graphql, useStaticQuery } from "gatsby"
import * as React from "react"

const ContainerStyle : React.CSSProperties = {
    padding: '50px 0px',
}

const ProjectListContainerStyle : React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
}

const ProjectContainerStyle : React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '50%',
}

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
        <div style={ContainerStyle}>
            <h1 style={{textAlign: 'center', margin: 0}}>Project </h1>
            <div style={ProjectListContainerStyle}>
                {
                    data.allContentfulProjects.nodes.map((value: any) => (
                        <div key={value.id} style={ProjectContainerStyle}>
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