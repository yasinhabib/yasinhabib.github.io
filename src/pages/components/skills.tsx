import { PageProps, graphql, useStaticQuery } from "gatsby"
import * as React from "react"

const ContainerStyle : React.CSSProperties = {
    padding: '50px 0px',
}
const SkillContainerStyle : React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px 0px',
    gap: '1rem'
}

const SkillContentStyle : React.CSSProperties = {
    margin: 0,
    fontSize: '20px',
    padding: '10px 16px',
    border: '1px solid black'
}

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
        <div style={ContainerStyle}>
            <h1 style={{textAlign: 'center', margin: 0}}>My Skills</h1>
            <div style={SkillContainerStyle}>
                {
                    data.allContentfulSkill.edges.map((value: any) => <p key={value.node.id} style={SkillContentStyle}>{value.node.skillName}</p>)
                }
                
            </div>
        </div>
    )
}

export default Skill