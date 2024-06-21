import { PageProps, graphql, useStaticQuery } from "gatsby"
import * as React from "react"

const ContainerStyle : React.CSSProperties = {
    padding: '50px 0px',
}

const EmploymentHistoryListContainerStyle : React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
}

const EmploymentHistoryContainerStyle : React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '50%'
}

const Employment = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulEmploymentHistory(sort: {startYear: ASC}) {
                    edges {
                        node {
                            title
                            startYear
                            present
                            id
                            company
                            companyLogo {
                            publicUrl
                            }
                            endYear
                            description {
                            description
                            }
                        }
                    }
                }
            }
        `
      );

    return(
        <div style={ContainerStyle}>
            <h1 style={{textAlign: 'center', margin: 0}}>Employment History</h1>
            <div style={EmploymentHistoryListContainerStyle}>
                {
                    data.allContentfulEmploymentHistory.edges.map((value: any) => (
                        <div key={value.node.id} style={EmploymentHistoryContainerStyle}>
                            <h3 style={{margin: 0}}>{value.node.title}</h3>
                            <h4 style={{margin: 0}}>{value.node.company}</h4>
                            <h5 style={{margin: 0}}>{`${value.node.startYear}-${value.node.present ? 'Present' : value.node.endYear}`}</h5>
                            <p style={{margin: 0}}>{value.node.description.description}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Employment