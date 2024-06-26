import { PageProps, graphql, useStaticQuery } from "gatsby"
import * as React from "react"

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
                            url
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
        <div className={'employment-container'}>
            <h1 style={{margin: 0}}>Employment History</h1>
            <div className={'employment-history-list-container'}>
                {
                    data.allContentfulEmploymentHistory.edges.map((value: any) => (
                        <div key={value.node.id} className={'employment-history-container'}>
                            <div className={'employment-history-title'}>
                                <h3 style={{margin: 0}}>{value.node.title}</h3>
                                <h5 style={{margin: 0}}>{value.node.company}</h5>
                                <h5 style={{margin: 0}}>{`${value.node.startYear}-${value.node.present ? 'Present' : value.node.endYear}`}</h5>
                            </div>
                            <p style={{margin: 0}}>{value.node.description.description}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Employment