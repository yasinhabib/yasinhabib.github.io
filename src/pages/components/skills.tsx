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
        <div className={'skill-container'}>
            <h1 style={{margin: 0}}>Expertise In</h1>
            <div className={'skill-container'}>
                {
                    data.allContentfulSkill.edges.map((value: any) => <p key={value.node.id} className={'skill-content'}>{value.node.skillName}</p>)
                }
                
            </div>
        </div>
    )
}

export default Skill