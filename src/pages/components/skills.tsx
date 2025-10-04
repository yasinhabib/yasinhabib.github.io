import { PageProps, graphql, useStaticQuery } from "gatsby"
import * as React from "react"



const Skill = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulSkill {
                    edges {
                        node {
                            skillName,
                            id
                        }
                    }
                }
            }
        `
      );

    return(
        <div className={'about-container'}>
            <h1 className={'section-title'}>About</h1>
            <p className={'about-description'}>Here are some technologies I've been working with recently:</p>
            <div className={'skill-container'}>
                {
                    data.allContentfulSkill.edges.map((value: any) => <span key={value.node.id} className={'skill-tag'}>{value.node.skillName}</span>)
                }
            </div>
        </div>
    )
}

export default Skill