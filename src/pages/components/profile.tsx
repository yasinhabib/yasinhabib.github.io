import { PageProps, graphql, useStaticQuery } from "gatsby"
import * as React from "react"

const ProfileContainerStyle : React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
}

const ProfileContentContainerStyle : React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '1rem'
}

const ProfilePictureContainerStyle : React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
}

const ProfilePictureStyle = {
    width: '50%'
}

const SocialMediaContainer : React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem'
}

const SocialMediaLink : React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none'
}

const SocialMediaIcon : React.CSSProperties = {
    width: '20px',
    backgroundColor: 'black'
}

const Profile = () => {
    const data = useStaticQuery(
        graphql`
            query {
                contentfulMyInfo {
                    id
                    fullName
                    profilePicture {
                        publicUrl
                    }
                    shortName
                    title
                    selfDescription {
                        selfDescription
                    }
                }
                allContentfulSocialMedia {
                    edges {
                        node {
                            id
                            socialMediaUrl
                            socialMediaName
                            socialMediaIcon {
                                publicUrl
                            }
                        }
                    }
                }
            }
        `
      );
      console.log(data.allContentfulSocialMedia.edges)
    return(
        <div style={ProfileContainerStyle}>
            <div style={ProfileContentContainerStyle}>
                <h1 style={{margin: 0}}>{data.contentfulMyInfo.fullName}</h1>
                <h2 style={{margin: 0}}>{data.contentfulMyInfo.title}</h2>
                <p style={{margin: 0,fontSize: '20px'}}>{data.contentfulMyInfo.selfDescription.selfDescription}</p>
                <div style={SocialMediaContainer}>
                    {data.allContentfulSocialMedia.edges.map((value: any) => (
                        <a key={value.node.id} href={value.node.socialMediaUrl} style={SocialMediaLink} target="_blank">
                            <img src={value.node.socialMediaIcon.publicUrl} style={SocialMediaIcon}/>
                            <span>{value.node.socialMediaName}</span>
                        </a>    
                    ))}
                </div>
            </div>
            <div style={ProfilePictureContainerStyle}>
                <img style={ProfilePictureStyle} src={data.contentfulMyInfo.profilePicture.publicUrl} alt="Profile Picture" />
            </div>
        </div>
    )
}

export default Profile