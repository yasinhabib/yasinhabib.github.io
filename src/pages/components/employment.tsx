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
        <div className={'experience-container'}>
            <h1 className={'section-title'}>Experience</h1>
            <div className={'experience-timeline'}>
                {
                    data.allContentfulEmploymentHistory.edges.map((value: any) => (
                        <div key={value.node.id} className={'experience-item'}>
                            <div className={'experience-content'}>
                                <h3 className={'experience-title'}>{value.node.title} <span className={'experience-company'}>@ {value.node.company}</span></h3>
                                <p className={'experience-date'}>{`${value.node.startYear} - ${value.node.present ? 'Present' : value.node.endYear}`}</p>
                                <p className={'experience-description'}>{value.node.description.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Employment